// Select elements from the DOM
const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const taskList = document.getElementById("taskList");

// Add task to the list
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Task cannot be empty");
  }
}

// Event listener for adding a task
addButton.addEventListener("click", addTask);

// Function to delete a task
function deleteTask(e) {
  if (e.target.classList.contains("delete")) {
    const li = e.target.parentElement;
    taskList.removeChild(li);
  }
}

// Event listener for deleting a task
taskList.addEventListener("click", deleteTask);
