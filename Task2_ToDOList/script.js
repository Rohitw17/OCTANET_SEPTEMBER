const taskInput = document.getElementById('taskInput');
const dueDateInput = document.getElementById('dueDate');
const prioritySelect = document.getElementById('priority');
const filterSelect = document.getElementById('filter');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = prioritySelect.value;

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <span>Due Date: ${dueDate}</span>
            <span>Priority: ${priority}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        li.className = priority; 
        taskList.appendChild(li);
        taskInput.value = '';
        dueDateInput.value = '';
        prioritySelect.value = 'low';
    }
}

function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}


function filterTasks() {
    const selectedPriority = filterSelect.value;

    const tasks = document.querySelectorAll('li');

    tasks.forEach(task => {
        if (selectedPriority === 'all' || task.classList.contains(selectedPriority)) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}


filterSelect.addEventListener('change', filterTasks);
