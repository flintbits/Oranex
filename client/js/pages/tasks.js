import "./tasks.css";

export function createTasksComponent() {
  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Task Management";

  const taskBoard = document.createElement("div");
  taskBoard.classList.add("task-board");

  // Create task columns
  const columns = [
    {
      id: "todo",
      title: "To Do",
      tasks: ["Task 1", "Task 2", "Task 3", "Task 4"],
    },
    { id: "in-progress", title: "In Progress", tasks: [] },
    { id: "done", title: "Done", tasks: [] },
  ];

  columns.forEach((col) => {
    const column = document.createElement("div");
    column.classList.add("column");
    column.id = col.id;

    const columnTitle = document.createElement("h2");
    columnTitle.textContent = col.title;

    column.appendChild(columnTitle);

    // Add tasks if available
    col.tasks.forEach((taskText, index) => {
      const task = document.createElement("div");
      task.classList.add("task");
      task.draggable = true;
      task.id = `task${index + 1}`;
      task.textContent = taskText;
      column.appendChild(task);
    });

    taskBoard.appendChild(column);
  });

  container.appendChild(title);
  container.appendChild(taskBoard);

  // Drag-and-Drop Logic
  const tasks = container.querySelectorAll(".task");
  const taskColumns = container.querySelectorAll(".column");

  tasks.forEach((task) => {
    task.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.id);
      e.target.classList.add("dragging");
    });

    task.addEventListener("dragend", (e) => {
      e.target.classList.remove("dragging");
    });
  });

  taskColumns.forEach((column) => {
    column.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    column.addEventListener("drop", (e) => {
      e.preventDefault();
      const taskId = e.dataTransfer.getData("text/plain");
      const task = container.querySelector(`#${taskId}`);
      column.appendChild(task);
    });
  });

  return container;
}
