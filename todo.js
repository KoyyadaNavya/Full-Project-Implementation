const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
    };
    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

form.onsubmit = (e) => {
  e.preventDefault();
  tasks.push(input.value);
  input.value = '';
  saveTasks();
};

renderTasks();
