import "./home.css";

export function createHomeComponent() {
  const container = document.createElement("div");
  container.classList.add("app-container");

  const title = document.createElement("h1");
  title.id = "greeting";
  title.textContent = "Welcome, Guest!";

  const userData = document.createElement("p");
  userData.id = "userData";
  userData.textContent = "Loading user data...";

  const newUserButton = document.createElement("button");
  newUserButton.id = "newUserButton";
  newUserButton.classList.add("btn");
  newUserButton.textContent = "Get a New User";

  container.appendChild(title);
  container.appendChild(userData);
  container.appendChild(newUserButton);

  let userId = 1;

  function fetchUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((user) => {
        title.textContent = `Welcome, ${user.name}!`;
        userData.textContent = `Email: ${user.email}`;
      })
      .catch(() => {
        userData.textContent = "Failed to load user data.";
      });
  }

  fetchUser(userId);

  newUserButton.addEventListener("click", () => {
    userId = Math.floor(Math.random() * 10) + 1;
    fetchUser(userId);
  });

  return container;
}
