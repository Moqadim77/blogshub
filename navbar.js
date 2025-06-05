document.addEventListener("DOMContentLoaded", function () {
  const navHTML = `
    <nav class="sticky top-0 z-50 bg-white border-b border-gray-200 p-4">
      <div class="flex items-center justify-between flex-wrap max-w-7xl mx-auto">
        <!-- Logo -->
        <div class="flex items-center flex-shrink-0 text-white">
          <a href="index.html" class="text-2xl font-bold">
            <img src="./logo.png" alt="logo" class="sm:w-11 rounded-full bg-white sm:h-11 w-10 h-10" />
          </a>
        </div>

        <!-- Search Bar -->
        <div class="flex-1 mx-2 md:mx-3 lg:mx-4 flex rounded-full relative">
          <div class="w-full md:max-w-[300px] relative">
            <button class="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-black">
              <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
            </button>
            <input type="text" id="navbar-search-input" placeholder="Search..."
              class="w-full max-w-[300px] bg-gray-100 focus:border-sky-800 px-4 py-2 pl-9 lg:pl-11 rounded-full text-black focus:outline-none" 
            />
            <div id="search-suggestions"
              class="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-[350px] overflow-y-auto hidden">
            </div>
          </div>
        </div>

        <!-- Hamburger Button -->
        <div>
          <button id="menu-btn" class="text-gray-500 focus:outline-none text-3xl">☰</button>
        </div>
      </div>

      <!-- Dropdown Menu -->
      <div id="menu" class="absolute md:mt-3 top-full left-0 w-full text-black bg-white hidden flex-col flex md:flex-row md:static md:items-center md:justify-center">
        <a href="index.html" class="block px-6 py-2 hover:bg-gray-700 hover:text-white">Home</a>
        <a href="blogs.html" class="block px-6 py-2 hover:bg-gray-700 hover:text-white">Blogs</a>
        <a href="about.html" class="block px-6 py-2 hover:bg-gray-700 hover:text-white">About</a>
        <a href="privacy.html" class="block px-6 py-2 hover:bg-gray-700 hover:text-white">Privacy Policy</a>
        <a href="terms.html" class="block px-6 py-2 hover:bg-gray-700 hover:text-white">Terms</a>
        <a href="signin.html" class="block px-6 py-2 hover:bg-gray-700 hover:text-white">Sign In</a>
      </div>
    </nav>
  `;

  const navContainer = document.getElementById("navbar-placeholder");
  if (!navContainer) return;
  navContainer.innerHTML = navHTML;

  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  const searchInput = document.getElementById("navbar-search-input");
  const suggestionsDiv = document.getElementById("search-suggestions");

  // Pre-fill input if URL has ?q
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get("q")?.trim() || "";
  if (searchQuery && searchInput) {
    searchInput.value = searchQuery;
  }

  function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, `<mark class="bg-yellow-200">$1</mark>`);
  }

  function matchBlog(blog, query) {
    const q = query.toLowerCase();
    return (
      blog.title.toLowerCase().includes(q) ||
      blog.description?.toLowerCase().includes(q) ||
      blog.keywords?.toLowerCase().includes(q) ||
      (blog.tags && blog.tags.some(tag => tag.toLowerCase().includes(q)))
    );
  }

  function showSuggestions(query) {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      suggestionsDiv.classList.add("hidden");
      suggestionsDiv.innerHTML = "";
      return;
    }

    const matched = blogs.filter(blog => matchBlog(blog, trimmedQuery)).slice(0, 10);

    if (matched.length === 0) {
      suggestionsDiv.innerHTML = `<div class="px-4 py-2 text-gray-600">No matches found for "<strong>${trimmedQuery}</strong>"</div>`;
    } else {
      suggestionsDiv.innerHTML = matched.map(blog => `
        <a href="index.html?post=${blog.id}" class="flex items-center px-4 py-2 hover:bg-sky-100 transition border-b last:border-b-0">
          <img src="${blog.banner}" alt="${blog.title}" class="w-12 h-12 object-cover rounded-lg mr-3" />
          <span class="text-sm font-medium text-gray-800">${highlightMatch(blog.title, trimmedQuery)}</span>
        </a>
      `).join("");
    }

    suggestionsDiv.classList.remove("hidden");
  }

  searchInput.addEventListener("input", e => {
    const value = e.target.value;
    showSuggestions(value);
  });

  searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const value = searchInput.value.trim();
      if (value.length > 0) {
        window.location.href = `search.html?q=${encodeURIComponent(value)}`;
      }
    }
  });

  // Hide suggestions when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !suggestionsDiv.contains(e.target)) {
      suggestionsDiv.classList.add("hidden");
    }
  });
});
