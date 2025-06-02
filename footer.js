document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
    <footer class="bg-gray-700 text-white border-white">
      <div class="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- About -->
        <div>
          <h3 class="text-xl font-semibold mb-2">BlogsHub</h3>
          <p class="text-sm">Your daily source of thoughtful blogs on life, tech, and everything in between.</p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-lg font-semibold mb-2">Quick Links</h4>
          <ul class="space-y-1 text-sm">
            <li><a href="index.html" class="hover:underline">Home</a></li>
            <li><a href="about.html" class="hover:underline">About</a></li>
            <li><a href="privacy.html" class="hover:underline">Privacy Policy</a></li>
            <li><a href="terms.html" class="hover:underline">Terms of Use</a></li>
            <li><a href="signin.html" class="hover:underline">Sign In</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-lg font-semibold mb-2">Contact</h4>
          <p class="text-sm">Email: support@blogshub.com</p>
          <p class="text-sm">Phone: +92 300 *******</p>
        </div>
      </div>
      <div class="text-center text-sm py-4 bg-gray-500 border-t border-white">
        © <span id="year"></span> BlogsHub. All rights reserved.
      </div>
    </footer>
  `;

    const footerContainer = document.getElementById("footer-placeholder");
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
        document.getElementById("year").textContent = new Date().getFullYear();
    }
});
