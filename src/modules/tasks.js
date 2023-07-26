import DOMStuff from './DOMStuff';

const createTaskContainer = (parentNode) => {
  const sectionElement = document.createElement('section');

  const elementContainer = document.createElement('div');
  elementContainer.id = 'element-container';
  sectionElement.appendChild(elementContainer);

  const pageTitle = document.createElement('h2');
  pageTitle.id = 'page-title';
  pageTitle.textContent = 'Home';
  elementContainer.appendChild(pageTitle);

  DOMStuff.createNavListItem(
    'add_circle',
    'New task',
    elementContainer,
    'new-task-btn'
  );

  const taskContainer = document.createElement('div');
  taskContainer.id = 'task-container';
  elementContainer.appendChild(taskContainer);

  parentNode.appendChild(sectionElement);
};

export default createTaskContainer;
