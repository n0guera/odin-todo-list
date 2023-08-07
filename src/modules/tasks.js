import DOMStuff from './DOMStuff';
import renderHomeTab from './homeTab';

const createTaskContainer = (parentNode) => {
  const sectionElement = document.createElement('section');
  parentNode.appendChild(sectionElement);

  const elementContainer = document.createElement('div');
  elementContainer.id = 'element-container';
  sectionElement.appendChild(elementContainer);

  renderHomeTab();
  DOMStuff.updateNoteList();
};

export default createTaskContainer;
