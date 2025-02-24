import "./about.css";

export function createAboutComponent() {
  const container = document.createElement("div");
  container.classList.add("app-info");

  const title = document.createElement("h1");
  title.textContent = "Oranex is a JIRA-like Experimental Application";

  const objective = document.createElement("p");
  objective.innerHTML =
    "<strong>Main Objective:</strong> Build a framework-free SPA with Vanilla JS focusing on:";

  const list = document.createElement("ul");
  const features = [
    "Dynamic client-side routing",
    "Modular component system",
    "Drag-and-drop interface for core functionality",
    "Node.js backend serving API data",
  ];

  features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    list.appendChild(li);
  });

  // Home button to test navigation
  const homeButton = document.createElement("button");
  homeButton.classList.add("home-button");
  homeButton.textContent = "Go to Home";
  homeButton.addEventListener("click", () => {
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new Event("popstate"));
  });

  // Test projects route with params
  const testProjectButton = document.createElement("button");
  testProjectButton.classList.add("test-project-button");
  testProjectButton.textContent = "Test Project (ID: 123)";
  testProjectButton.addEventListener("click", () => {
    const testProjectId = 123;
    window.history.pushState({}, "", `/projects/${testProjectId}`);
    window.dispatchEvent(new Event("popstate"));
  });

  container.appendChild(title);
  container.appendChild(objective);
  container.appendChild(list);
  container.appendChild(homeButton);
  container.appendChild(testProjectButton);

  return container;
}
