const routes = {
  "/": "js/pages/home.js",
  "/dashboard": "js/pages/dashboard.js",
  "/projects": "js/pages/projects.js",
};

// Listen for hash changes
window.addEventListener("hashchange", loadPage);
window.addEventListener("DOMContentLoaded", loadPage);

//testing the api call
fetch("http://localhost:3000/api/message")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("message").textContent = data.message;
  })
  .catch((error) => console.error("Error:", error));
