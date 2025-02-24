export function createProjectsComponent(projectId) {
  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = projectId ? "Project Details" : "All Projects";

  const description = document.createElement("p");
  description.innerHTML = projectId
    ? `Showing details for Project ID: <strong>${projectId}</strong>`
    : "Select a project to view details.";

  container.appendChild(title);
  container.appendChild(description);

  return container;
}
