import DOMStuff from './DOMStuff';

const createNav = (parentNode) => {
  const navElement = document.createElement('nav');

  const navList = document.createElement('ul');
  navElement.appendChild(navList);

  DOMStuff.createNavListItem('home', 'Home', navList);
  DOMStuff.createNavListItem('today', 'Today', navList);
  DOMStuff.createNavListItem('date_range', 'Week', navList);

  const projectsTitle = document.createElement('h2');
  projectsTitle.textContent = 'Projects';
  navList.appendChild(projectsTitle);

  DOMStuff.createNavListItem('add_circle', 'New project', navList);

  parentNode.appendChild(navElement);
};

export default createNav;
