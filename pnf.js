// pnf.js - Page Not Found Redirect
(function() {
  const path = window.location.pathname;
  
  // List of all valid pages in your site
  const validPages = [
    "/",
    "/index.html",
    "/about.html",
    "/portfolio.html",
    "/blog.html",
    "/contact.html",
    "/careers.html",
    "/privacy.html",
    "/team.html",
    "/terms.html"
  ];

  // If the current path is not in the valid pages list
  if (!validPages.includes(path)) {
    // Redirect to your custom 404 page
    window.location.href = "/404.html";
  }
})();