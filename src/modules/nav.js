import DOMStuff from './DOMStuff';

const createNav = (parentNode) => {
  const navElement = document.createElement('nav');

  const navList = document.createElement('ul');
  navElement.appendChild(navList);

  DOMStuff.createNavListItem('info', 'Test', navList);
  parentNode.appendChild(navElement);
};

export default createNav;
