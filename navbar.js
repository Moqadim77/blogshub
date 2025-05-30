document.addEventListener("DOMContentLoaded", function () {
    const navHTML = `
    <nav class="p-4 bg-gray-500 text-white border-b border-white relative">
      <div class="flex items-center justify-between flex-wrap max-w-7xl mx-auto">
        <!-- Logo -->
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <a href="index.html" class="text-2xl font-bold">
            <img src="./logo.png" alt="logo" class="w-10 h-10" />
          </a>
        </div>

        <!-- Search Bar -->
        <div class="flex-1 mx-4 hidden md:flex">
          <div class="w-full md:max-w-[300px] relative">
            <input type="text" placeholder="Search..."
              class="w-full max-w-[300px] px-4 py-2 pr-12 rounded-full text-black focus:outline-none" />
            <button class="absolute right-2 top-1/2 transform -translate-y-1/2 text-black">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <!-- Hamburger Button -->
        <div class="md:hidden">
          <button id="menu-btn" class="text-white focus:outline-none text-3xl">
            ☰
          </button>
        </div>
      </div>

      <!-- Dropdown Menu -->
      <div id="menu" class="absolute md:mt-3 top-full left-0 w-full bg-gray-500 text-white hidden flex-col md:flex-row md:static md:flex md:items-center md:justify-center md:bg-transparent md:text-white">
        <a href="index.html" class="block px-6 py-2 hover:bg-blue-300 md:hover:bg-transparent">Home</a>
        <a href="blogs.html" class="block px-6 py-2 hover:bg-blue-300 md:hover:bg-transparent">Blogs</a>
        <a href="about.html" class="block px-6 py-2 hover:bg-blue-300 md:hover:bg-transparent">About</a>
        <a href="privacy.html" class="block px-6 py-2 hover:bg-blue-300 md:hover:bg-transparent">Privacy Policy</a>
        <a href="terms.html" class="block px-6 py-2 hover:bg-blue-300 md:hover:bg-transparent">Terms</a>
        <a href="signin.html" class="block px-6 py-2 hover:bg-blue-300 md:hover:bg-transparent">Sign In</a>
      </div>
    </nav>
  `;

    const navContainer = document.getElementById("navbar-placeholder");
    if (navContainer) {
        navContainer.innerHTML = navHTML;

        const btn = document.getElementById("menu-btn");
        const menu = document.getElementById("menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }
});
