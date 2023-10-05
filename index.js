// Select elements from the DOM
const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const taskList = document.getElementById("taskList");

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
  const tasks = Array.from(taskList.children).map(
    (li) => li.querySelector("span").textContent
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to retrieve tasks from local storage
function getTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return tasks;
}

// Function to add a task
function addTask(taskText) {
  const li = document.createElement("li");
  li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Delete</button>
    `;
  taskList.appendChild(li);
  taskInput.value = "";

  // Save tasks to local storage after adding
  saveTasksToLocalStorage();
}

// Function to load tasks from local storage and display them
function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach((taskText) => addTask(taskText));
}

// Load tasks from local storage when the page loads
window.addEventListener("load", loadTasks);

// Event listener for adding a task
addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
  } else {
    alert("Please enter a task!");
  }
});

// Event listener for deleting a task
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const li = e.target.parentElement;
    taskList.removeChild(li);

    // Save tasks to local storage after deleting
    saveTasksToLocalStorage();
  }
});
