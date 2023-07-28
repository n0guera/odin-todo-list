import DOMStuff from './DOMStuff';

const renderHomeTab = () => {
  const elementContainer = document.querySelector('#element-container');
  elementContainer.innerHTML = '';

  const pageTitle = document.createElement('h2');
  pageTitle.id = 'page-title';
  pageTitle.textContent = 'Home';
  elementContainer.appendChild(pageTitle);

  DOMStuff.createNavListItem(
    'add_circle',
    'New note',
    elementContainer,
    'new-note-btn'
  );
};

export default renderHomeTab;
