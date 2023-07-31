import DOMStuff from './DOMStuff';
import renderHomeTab from './homeTab';
import todoStorage from './todoStorage';

const createTaskContainer = (parentNode) => {
  const sectionElement = document.createElement('section');
  parentNode.appendChild(sectionElement);

  const elementContainer = document.createElement('div');
  elementContainer.id = 'element-container';
  sectionElement.appendChild(elementContainer);

  renderHomeTab();

  const taskContainer = document.createElement('div');
  taskContainer.id = 'task-container';
  elementContainer.appendChild(taskContainer);

  if (todoStorage.getNotesList().length === 0)
    taskContainer.style.display = 'none';
  DOMStuff.updateNoteList();
};

export default createTaskContainer;
