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
        <div class="flex-1 mx-2 md:mx-3 lg:mx-4 flex rounded-full">
          <div class="w-full md:max-w-[300px] relative">
            <button class="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-black">
              <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
            </button>
            <input type="text" placeholder="Search..."
              class="w-full max-w-[300px] bg-gray-100 focus:border-sky-800 px-4 py-2 pl-9 lg:pl-11 rounded-full text-black focus:outline-none" 
            />
          </div>
        </div>

        <!-- Hamburger Button -->
        <div class="">
          <button id="menu-btn" class="text-gray-500 focus:outline-none text-3xl">
            ☰
          </button>
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
    if (navContainer) {
        navContainer.innerHTML = navHTML;

        const btn = document.getElementById("menu-btn");
        const menu = document.getElementById("menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }
});
