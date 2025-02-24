import { routes } from "./Constants/routes";

function loadPage(path) {
  const app = document.getElementById("app");

  app.innerHTML = "<h2>Loading...</h2>";

  let page;
  let param = null;

  if (path.startsWith("/projects/")) {
    page = "projects";
    param = path.split("/")[2]; //gives id
  } else {
    page = routes[path] || "home";
  }

  import(`./pages/${page}.js`)
    .then((module) => {
      app.innerHTML = ""; // Clear existing content

      const functionName = `create${
        page.charAt(0).toUpperCase() + page.slice(1)
      }Component`;
      const component = module[functionName]
        ? module[functionName](param)
        : null;

      if (component) {
        app.replaceChildren(component);
      } else {
        app.innerHTML = "<h2>Page not found</h2>";
      }
    })
    .catch((error) => {
      console.error("Error loading page:", error);
      document.getElementById("app").innerHTML = "<h2>page not found</h2>";
    });
}

//handle navigation without full reload
document.addEventListener("click", (e) => {
  if (e.target.matches("a[data-link]")) {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    history.pushState({}, "", path); //change url without reloading
    loadPage(path);
  }
});

//handle browser back/fordward buttons
window.addEventListener("popstate", () => {
  loadPage(location.pathname);
});

//Dynamically generate a navBar
function generateNav() {
  let nav = document.getElementById("nav");

  if (!nav) {
    nav = document.createElement("nav");
    document.body.insertBefore(nav, document.getElementById("app"));
  }

  Object.entries(routes).forEach(([path, name]) => {
    const link = document.createElement("a");
    link.href = path;
    link.textContent = name[0].toUpperCase() + name.slice(1);
    link.setAttribute("data-link", "true");
    nav.appendChild(link);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generateNav();
  loadPage(location.pathname);
});
