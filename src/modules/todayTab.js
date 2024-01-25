import todoStorage from './todoStorage';
import DOMStuff from './DOMStuff';

const renderTodayTab = () => {
  const elementContainer = document.querySelector('#element-container');
  elementContainer.innerHTML = '';

  const pageTitle = document.createElement('h2');
  pageTitle.id = 'page-title';
  pageTitle.textContent = 'Today';
  elementContainer.appendChild(pageTitle);

  const taskContainer = document.createElement('div');
  taskContainer.id = 'container';
  taskContainer.classList.add('task-container');
  elementContainer.appendChild(taskContainer);

  if (todoStorage.getTodayTasks().length === 0)
    taskContainer.style.display = 'none';
  todoStorage.getTodayTasks().forEach((task) => {
    DOMStuff.createTaskElement(
      task.taskName,
      task.dueDate,
      task.checked,
      taskContainer
    );
  });
};

export default renderTodayTab;
