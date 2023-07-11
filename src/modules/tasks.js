import DOMStuff from './DOMStuff';

const createTasksContainer = (parentNode) => {
  const taskContainer = document.createElement('section');
  DOMStuff.createTaskElement(taskContainer);
  parentNode.appendChild(taskContainer);
};

export default createTasksContainer;
