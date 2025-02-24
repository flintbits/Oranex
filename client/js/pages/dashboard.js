export function createDashboardComponent() {
  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.id = "greeting";
  title.textContent = "Enter Dashboard ID!";

  const changeUserBtn = document.createElement("button");
  changeUserBtn.id = "changeUser";
  changeUserBtn.textContent = "Enter ID";

  const nameDashboardContainer = document.createElement("div");
  nameDashboardContainer.id = "nameDashboardContainer";
  nameDashboardContainer.style.display = "none"; // Initially hidden

  const dashboardInput = document.createElement("input");
  dashboardInput.type = "text";
  dashboardInput.id = "dashboardInput";
  dashboardInput.placeholder = "Enter Dashboard ID";

  const submitUserBtn = document.createElement("button");
  submitUserBtn.id = "submitUser";
  submitUserBtn.textContent = "Submit";

  // Append elements
  nameDashboardContainer.appendChild(dashboardInput);
  nameDashboardContainer.appendChild(submitUserBtn);
  container.appendChild(title);
  container.appendChild(changeUserBtn);
  container.appendChild(nameDashboardContainer);

  // Event Listeners
  changeUserBtn.addEventListener("click", () => {
    nameDashboardContainer.style.display = "block"; // Show input field
    dashboardInput.focus();
  });

  submitUserBtn.addEventListener("click", () => {
    const userName = dashboardInput.value.trim();
    if (userName) {
      title.textContent = `Dashboard, ${userName}!`;
      nameDashboardContainer.style.display = "none"; // Hide input box after submission
      dashboardInput.value = ""; // Clear input field
    }
  });

  // Allow pressing "Enter" to submit the dashboard ID
  dashboardInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      submitUserBtn.click();
    }
  });

  return container;
}
