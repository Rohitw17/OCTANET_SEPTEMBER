function addTask() {
    const title = document.getElementById("title").value;
    const deadline = document.getElementById("deadline").value;
    const priority = document.getElementById("priority").value;
    const label = document.getElementById("label").value;

    if (title && deadline && priority && label) {
        const taskList = document.getElementById("task-list");
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const taskInfo = `
            <div>
                <label>Title: </label> ${title}
                <br>
                <label>Deadline: </label> ${deadline}
                <br>
                <label>Priority: </label> ${priority}
                <br>
                <label>Label: </label> ${label}
            </div>
            <div>
                <button onclick="toggleComplete(this)">Complete</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;

        taskDiv.innerHTML = taskInfo;
        taskList.appendChild(taskDiv);

        // Clear the input fields
        document.getElementById("title").value = "";
        document.getElementById("deadline").value = "";
        document.getElementById("priority").value = "";
        document.getElementById("label").value = "";
    }
}

function toggleComplete(button) {
    const taskDiv = button.parentElement.parentElement;
    taskDiv.classList.toggle("completed-task");
}

function deleteTask(button) {
    const taskDiv = button.parentElement.parentElement;
    const taskList = document.getElementById("task-list");
    taskList.removeChild(taskDiv);
}
