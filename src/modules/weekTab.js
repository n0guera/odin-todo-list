import todoStorage from './todoStorage';
import DOMStuff from './DOMStuff';

const renderWeekTab = () => {
  const elementContainer = document.querySelector('#element-container');
  elementContainer.innerHTML = '';

  const pageTitle = document.createElement('h2');
  pageTitle.id = 'page-title';
  pageTitle.textContent = 'Week';
  elementContainer.appendChild(pageTitle);

  const taskContainer = document.createElement('div');
  taskContainer.id = 'container';
  taskContainer.classList.add('task-container');
  elementContainer.appendChild(taskContainer);

  if (todoStorage.getWeekTasks().length === 0)
    taskContainer.style.display = 'none';
  todoStorage.getWeekTasks().forEach((task) => {
    DOMStuff.createTaskElement(
      task.taskName,
      task.dueDate,
      task.checked,
      taskContainer
    );
  });
};

export default renderWeekTab;
