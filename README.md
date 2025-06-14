# BlogsHub

## Overview
BlogsHub is a clean, modern, and responsive static website designed for reading a variety of articles and blog posts across numerous topics including News, Earning, Tech, Health, and more. The content is predefined within the site's JavaScript files and dynamically rendered on the client-side. It features a user-friendly interface, category-based filtering, and search functionality for an enhanced reading experience.

The live site is available at: [blogshub.online](http://blogshub.online)

## Key Features
*   **Static Content Source:** All blog posts are stored as JavaScript objects in `blogs.js`.
*   **Dynamic Article Rendering:** Individual articles are displayed by dynamically loading Markdown content into templates using JavaScript.
*   **Categorization & Filtering:** Browse articles by various categories such as News, Earning, Business, Tech, Health, and more.
*   **Search Functionality:** Allows users to search for articles by keywords present in titles, descriptions, or tags.
*   **Responsive Design:** Optimized for a seamless viewing experience on desktops, tablets, and mobile devices, styled with Tailwind CSS.
*   **Client-Side Markdown Parsing:** Blog content written in Markdown is converted to HTML directly in the browser.
*   **Standard Informational Pages:** Includes "About Us", "Contact Us", "Privacy Policy", and "Terms of Service".
*   **No Backend Required:** Operates entirely as a client-side application served statically.

## Tech Stack
*   **HTML5:** For the semantic structure of the web pages.
*   **CSS3:** For styling, primarily utilizing **Tailwind CSS** for a utility-first approach. Custom styles are in `style.css`.
*   **JavaScript (ES6+):** For dynamic content loading and rendering, client-side routing for articles, search logic, navigation management, and Markdown parsing.

## Core Components & Functionality

*   **`blogs.js` (Data Source):**
    *   This crucial file contains an array of JavaScript objects. Each object represents a blog post, including its `id`, `title`, `category`, `date`, `tags`, `keywords`, `description`, `banner` image URL, and `content` (in Markdown format).

*   **Homepage (`index.html`):**
    *   Serves as the main entry point, displaying a list of blog posts.
    *   Features a category navigation bar enabling users to filter blog posts by their respective categories.
    *   Loads blog cards dynamically, showing a banner, title, short description, and a "Read more" link.

*   **Article Page (`article.html`):**
    *   Displays individual blog posts. The specific post is determined by an `id` from the URL (e.g., `/article/{post-id}`).
    *   Client-side JavaScript fetches the corresponding blog data from `blogs.js` and parses its Markdown content into HTML for display.
    *   Includes the article's banner image, title, publication date, tags, and full content.

*   **Search (`search.html` & `navbar.js`):**
    *   The navigation bar (`navbar.js`) includes a search input that provides live suggestions.
    *   Pressing Enter or submitting the search navigates to `search.html`, which displays a list of matching blog posts.
    *   Search queries match against blog titles, descriptions, keywords, and tags.

*   **Static Informational Pages:**
    *   `about.html`: Provides information about the BlogsHub platform.
    *   `contact.html`: Offers contact details (with a static form layout, directing users to email).
    *   `privacy.html`: Details the site's privacy practices, emphasizing no user data collection.
    *   `terms.html`: Outlines the terms of service for using the website.
    *   `signin.html`: Includes a mock sign-in interface for demonstration purposes.

*   **Navigation and Footer (`navbar.js`, `footer.js`):**
    *   These JavaScript files dynamically inject the navigation bar and footer content into all pages, ensuring consistency.

*   **Error Handling (`404.html`):**
    *   Manages undefined routes and includes logic to redirect "pretty URLs" (e.g., `/article/some-post-id`) to the correct `article.html?post=some-post-id` structure.

## Running Locally
To run BlogsHub on your local machine:
1.  Clone the repository:
    ```bash
    git clone https://github.com/iqbalbhatti49/blogshubmj.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd blogshubmj
    ```
3.  Open the `index.html` file in your preferred web browser.

As this is a fully static website, no build steps or local server (beyond a simple one for proper path resolution if needed) are required.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
