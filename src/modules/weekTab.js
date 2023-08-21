import todoStorage from './todoStorage';

const renderWeekTab = () => {
  const elementContainer = document.querySelector('#element-container');
  elementContainer.innerHTML = '';

  const pageTitle = document.createElement('h2');
  pageTitle.id = 'page-title';
  pageTitle.textContent = 'Week';
  elementContainer.appendChild(pageTitle);

  const taskContainer = document.createElement('div');
  taskContainer.id = 'task-container';
  elementContainer.appendChild(taskContainer);

  if (todoStorage.getWeekTasks().length === 0)
    taskContainer.style.display = 'none';
};

export default renderWeekTab;
