import todoStorage from './todoStorage';

const DOMStuff = (() => {
  const createButton = (icon, text, parentNode, id, cssClass) => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('font-20px', 'flex', 'align-center');
    if (cssClass) buttonElement.classList.add(cssClass);
    if (id) buttonElement.id = id;

    const spanElement = document.createElement('span');
    spanElement.textContent = icon;
    spanElement.classList.add('material-icons');
    buttonElement.appendChild(spanElement);

    buttonElement.innerHTML += text;

    parentNode.appendChild(buttonElement);
  };

  const createNavButton = (icon, text, parentNode, id, cssClass) => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('nav-btn', 'font-20px', 'flex', 'align-center');
    if (cssClass) buttonElement.classList.add(cssClass);
    if (id) buttonElement.id = id;

    const spanElement = document.createElement('span');
    spanElement.textContent = icon;
    spanElement.classList.add('material-icons');
    buttonElement.appendChild(spanElement);

    buttonElement.innerHTML += text;

    parentNode.appendChild(buttonElement);
  };

  const createNavListItem = (icon, text, parentNode, id, cssClass) => {
    const listItem = document.createElement('li');
    listItem.classList.add('nav-item');

    createNavButton(icon, text, listItem, id, cssClass);

    parentNode.appendChild(listItem);
  };

  const createTaskElement = (parentNode) => {
    const taskElement = document.createElement('article');
    parentNode.appendChild(taskElement);
  };

  const viewProject = () => {
    // const pageTitle = document.querySelector('#page-title');
  };

  const updateNavProjectList = () => {
    const navListProjects = document.querySelector('#nav-list-projects');
    const projects = todoStorage.getProjectList();

    navListProjects.innerHTML = '';

    projects.forEach((project) => {
      createNavListItem(
        'folder',
        `${project.projectName}`,
        navListProjects,
        '',
        'project'
      );
    });

    const projectElements = document.querySelectorAll('.project');
    projectElements.forEach((project) => {
      project.addEventListener('click', viewProject);
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

  const addNewNotePopup = () => {
    const elementContainer = document.querySelector('#element-container');

    const newNoteBtn = document.querySelector('#new-note-btn');
    newNoteBtn.style.display = 'none';

    const newNotePopup = document.createElement('div');
    newNotePopup.id = 'new-note-popup';

    const newNoteName = document.createElement('input');
    newNoteName.classList.add('font-20px');
    newNoteName.type = 'text';
    newNoteName.id = 'note-name';
    newNoteName.name = 'noteName';
    newNoteName.required = true;
    newNotePopup.appendChild(newNoteName);

    const newNotePopupButtons = document.createElement('div');
    newNotePopupButtons.id = 'new-note-popup-buttons';
    newNotePopupButtons.classList.add('flex', 'font-20px');
    newNotePopup.appendChild(newNotePopupButtons);

    const acceptNewNoteBtn = document.createElement('button');
    acceptNewNoteBtn.id = 'accept-new-note-btn';
    acceptNewNoteBtn.textContent = 'Ok';
    acceptNewNoteBtn.classList.add('flex', 'font-20px', 'justify-center');
    newNotePopupButtons.appendChild(acceptNewNoteBtn);

    const cancelNewNoteBtn = document.createElement('button');
    cancelNewNoteBtn.id = 'cancel-new-note-btn';
    cancelNewNoteBtn.textContent = 'Cancel';
    cancelNewNoteBtn.classList.add('flex', 'font-20px', 'justify-center');
    newNotePopupButtons.appendChild(cancelNewNoteBtn);

    const cancelNewNote = () => {
      newNotePopup.remove();
      newNoteBtn.style.display = 'flex';
    };
    cancelNewNoteBtn.addEventListener('click', cancelNewNote);

    elementContainer.appendChild(newNotePopup);
  };

  const addNewTaskPopup = () => {
    const elementContainer = document.querySelector('#element-container');

    const newTaskBtn = document.querySelector('#new-task-btn');
    newTaskBtn.style.display = 'none';

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

    const cancelNewTask = () => {
      newTaskPopup.remove();
      newTaskBtn.style.display = 'flex';
    };
    cancelNewTaskBtn.addEventListener('click', cancelNewTask);

    elementContainer.appendChild(newTaskPopup);
  };

  return {
    createButton,
    createNavListItem,
    createTaskElement,
    updateNavProjectList,
    addNewProjectPopup,
    addNewNotePopup,
    addNewTaskPopup,
    viewProject,
    displayPageTitle,
  };
})();

export default DOMStuff;
