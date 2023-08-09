import DOMStuff from './DOMStuff';
import todoStorage from './todoStorage';

const renderHomeTab = () => {
  const elementContainer = document.querySelector('#element-container');
  elementContainer.innerHTML = '';

  const pageTitle = document.createElement('h2');
  pageTitle.id = 'page-title';
  pageTitle.textContent = 'Home';
  elementContainer.appendChild(pageTitle);

  const taskContainer = document.createElement('div');
  taskContainer.id = 'task-container';
  taskContainer.style.display = 'grid';
  elementContainer.appendChild(taskContainer);
  if (todoStorage.getNoteList().length === 0)
    taskContainer.style.display = 'none';

  DOMStuff.updateNoteList();

  DOMStuff.createNavListItem(
    'add_circle',
    'New note',
    elementContainer,
    'new-note-btn'
  );

  const newNoteBtn = document.querySelector('#new-note-btn');
  newNoteBtn.addEventListener('click', DOMStuff.addNewNotePopup);
};

export default renderHomeTab;
