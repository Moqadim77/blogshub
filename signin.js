document.addEventListener("DOMContentLoaded", function () {
    const signinHTML = `
    <section class="max-w-md mx-auto mt-10 p-6 bg-white border rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">Sign In to BlogsHub</h2>

      <form id="signin-form" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" required
            class="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" required
            class="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        <button type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Sign In</button>

        <p id="message" class="text-green-600 mt-4 font-medium text-center hidden"></p>
      </form>
    </section>
  `;

    const signinContainer = document.getElementById("signin-placeholder");
    if (signinContainer) {
        signinContainer.innerHTML = signinHTML;

        const form = document.getElementById("signin-form");
        const message = document.getElementById("message");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            // Static validation mockup
            if (email && password) {
                message.textContent = "✅ Signing in... user found!";
                message.classList.remove("hidden");
            } else {
                message.textContent = "❌ Please enter email and password.";
                message.classList.remove("hidden");
                message.classList.add("text-red-600");
            }
        });
    }
});
