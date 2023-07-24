const createTasksContainer = (parentNode) => {
  const taskContainer = document.createElement('section');

  const pageTitle = document.createElement('h2');
  pageTitle.id = 'page-title';
  taskContainer.appendChild(pageTitle);
  parentNode.appendChild(taskContainer);
};

export default createTasksContainer;
