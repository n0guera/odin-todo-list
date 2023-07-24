import DOMStuff from './DOMStuff';

const createNav = (parentNode) => {
  const navElement = document.createElement('nav');

  const tasksTitle = document.createElement('h2');
  tasksTitle.textContent = 'Tasks';
  tasksTitle.id = 'tasks-title';
  navElement.appendChild(tasksTitle);

  const navListTasks = document.createElement('ul');
  navListTasks.setAttribute('id', 'nav-list-tasks');
  navElement.appendChild(navListTasks);

  DOMStuff.createNavListItem('home', 'Home', navListTasks, 'home-tab');
  DOMStuff.createNavListItem('today', 'Today', navListTasks, 'today-tab');
  DOMStuff.createNavListItem('date_range', 'Week', navListTasks, 'week-tab');

  const projectsTitle = document.createElement('h2');
  projectsTitle.textContent = 'Projects';
  projectsTitle.id = 'projects-title';
  navElement.appendChild(projectsTitle);

  const navListProjects = document.createElement('ul');
  navListProjects.setAttribute('id', 'nav-list-projects');
  navElement.appendChild(navListProjects);

  DOMStuff.createNavListItem(
    'add_circle',
    'New project',
    navElement,
    'new-project-btn'
  );

  parentNode.appendChild(navElement);
};

export default createNav;
