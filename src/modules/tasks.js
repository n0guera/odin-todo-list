const createTaskContainer = (parentNode) => {
  const sectionElement = document.createElement('section');

  const elementContainer = document.createElement('div');
  elementContainer.id = 'element-container';
  sectionElement.appendChild(elementContainer);

  const pageTitle = document.createElement('h2');
  pageTitle.id = 'page-title';
  pageTitle.textContent = 'Home';
  elementContainer.appendChild(pageTitle);

  const taskContainer = document.createElement('div');
  taskContainer.id = 'task-container';
  elementContainer.appendChild(taskContainer);

  parentNode.appendChild(sectionElement);
};

export default createTaskContainer;
