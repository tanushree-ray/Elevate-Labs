const addBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.classList.add('remove-btn');
  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = '';
  taskInput.focus();
});
