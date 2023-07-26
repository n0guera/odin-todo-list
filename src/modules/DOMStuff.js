import todoStorage from './todoStorage';

const DOMStuff = (() => {
  const createNavButton = (icon, text, parentNode, id) => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('nav-btn', 'font-20px', 'flex', 'align-center');
    if (id) buttonElement.id = id;

    const spanElement = document.createElement('span');
    spanElement.textContent = icon;
    spanElement.classList.add('material-icons');
    buttonElement.appendChild(spanElement);

    buttonElement.innerHTML += text;

    parentNode.appendChild(buttonElement);
  };

  const createNavListItem = (icon, text, parentNode, id) => {
    const listItem = document.createElement('li');
    listItem.classList.add('nav-item');

    createNavButton(icon, text, listItem, id);

    parentNode.appendChild(listItem);
  };

  const createTaskElement = (parentNode) => {
    const taskElement = document.createElement('article');
    parentNode.appendChild(taskElement);
  };

  const updateNavProjectList = () => {
    const navListProjects = document.querySelector('#nav-list-projects');
    const projects = todoStorage.getProjectList();

    navListProjects.innerHTML = '';

    projects.forEach((project) => {
      createNavListItem('folder', `${project.projectName}`, navListProjects);
    });
  };

  const addNewProjectPopup = () => {
    const navElement = document.querySelector('nav');

    const newProjectBtn = document.querySelector('#new-project-btn');
    newProjectBtn.style.display = 'none';

    const newProjectPopup = document.createElement('div');
    newProjectPopup.id = 'new-project-popup';

    const newProjectName = document.createElement('input');
    newProjectName.classList.add('font-20px');
    newProjectName.type = 'text';
    newProjectName.id = 'project-name';
    newProjectName.name = 'projectName';
    newProjectName.required = true;
    newProjectPopup.appendChild(newProjectName);

    const newProjectPopupButtons = document.createElement('div');
    newProjectPopupButtons.id = 'new-project-popup-buttons';
    newProjectPopupButtons.classList.add('flex', 'font-20px');
    newProjectPopup.appendChild(newProjectPopupButtons);

    const acceptNewProjectBtn = document.createElement('button');
    acceptNewProjectBtn.id = 'accept-new-project-btn';
    acceptNewProjectBtn.textContent = 'Ok';
    acceptNewProjectBtn.classList.add('flex', 'font-20px', 'justify-center');
    newProjectPopupButtons.appendChild(acceptNewProjectBtn);

    const cancelNewProjectBtn = document.createElement('button');
    cancelNewProjectBtn.id = 'cancel-new-project-btn';
    cancelNewProjectBtn.textContent = 'Cancel';
    cancelNewProjectBtn.classList.add('flex', 'font-20px', 'justify-center');
    newProjectPopupButtons.appendChild(cancelNewProjectBtn);

    const addProject = () => {
      newProjectPopup.remove();
      todoStorage.storeNewProject(newProjectName.value);
      updateNavProjectList();
      newProjectBtn.style.display = 'flex';
    };
    acceptNewProjectBtn.addEventListener('click', addProject);

    const cancelNewProject = () => {
      newProjectPopup.remove();
      newProjectBtn.style.display = 'flex';
    };
    cancelNewProjectBtn.addEventListener('click', cancelNewProject);
    navElement.appendChild(newProjectPopup);
  };

  const displayPageTitle = (element) => {
    const pageTitleElement = document.querySelector('#page-title');

    switch (element.target.id) {
      case 'home-tab':
        pageTitleElement.textContent = 'Home';
        break;

      case 'today-tab':
        pageTitleElement.textContent = 'Today';
        break;

      case 'week-tab':
        pageTitleElement.textContent = 'Week';
        break;

      default:
        break;
    }
  };

  const addNewTaskPopup = () => {
    const elementContainer = document.querySelector('#element-container');

    const newProjectBtn = document.querySelector('#new-task-btn');
    newProjectBtn.style.display = 'none';

    const newTaskPopup = document.createElement('div');
    newTaskPopup.id = 'new-task-popup';

    const newTaskName = document.createElement('input');
    newTaskName.classList.add('font-20px');
    newTaskName.type = 'text';
    newTaskName.id = 'task-name';
    newTaskName.name = 'taskName';
    newTaskName.required = true;
    newTaskPopup.appendChild(newTaskName);

    const newTaskPopupButtons = document.createElement('div');
    newTaskPopupButtons.id = 'new-task-popup-buttons';
    newTaskPopupButtons.classList.add('flex', 'font-20px');
    newTaskPopup.appendChild(newTaskPopupButtons);

    const acceptNewTaskBtn = document.createElement('button');
    acceptNewTaskBtn.id = 'accept-new-task-btn';
    acceptNewTaskBtn.textContent = 'Ok';
    acceptNewTaskBtn.classList.add('flex', 'font-20px', 'justify-center');
    newTaskPopupButtons.appendChild(acceptNewTaskBtn);

    const cancelNewTaskBtn = document.createElement('button');
    cancelNewTaskBtn.id = 'cancel-new-task-btn';
    cancelNewTaskBtn.textContent = 'Cancel';
    cancelNewTaskBtn.classList.add('flex', 'font-20px', 'justify-center');
    newTaskPopupButtons.appendChild(cancelNewTaskBtn);

    elementContainer.appendChild(newTaskPopup);
  };

  return {
    createNavListItem,
    createTaskElement,
    updateNavProjectList,
    addNewProjectPopup,
    displayPageTitle,
    addNewTaskPopup,
  };
})();

export default DOMStuff;
