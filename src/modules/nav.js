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

  DOMStuff.createNavListItem('home', 'Home', navListTasks);
  DOMStuff.createNavListItem('today', 'Today', navListTasks);
  DOMStuff.createNavListItem('date_range', 'Week', navListTasks);

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
    navListProjects,
    'new-project-btn'
  );

  parentNode.appendChild(navElement);
};

export default createNav;
