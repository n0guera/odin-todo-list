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

  const viewProject = (element) => {
    const pageTitleElement = document.querySelector('#page-title');
    const projectName = element.target.textContent;
    const filterProjectName = () => projectName.split('folder')[1];
    pageTitleElement.textContent = filterProjectName(element);
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

  const updateNoteList = () => {
    const noteListContainer = document.querySelector('#task-container');
    const notes = todoStorage.getNotesList();

    noteListContainer.innerHTML = '';

    notes.forEach((note) => {
      const noteElement = document.createElement('div');
      noteElement.classList.add('note');
      noteListContainer.appendChild(noteElement);

      const noteTitle = document.createElement('h3');
      noteTitle.classList.add('note-title');
      noteElement.textContent = note.noteName;
      noteElement.appendChild(noteTitle);

      const noteDesc = document.createElement('p');
      noteDesc.classList.add('note-desc');
      noteDesc.textContent = note.noteDesc;
      noteElement.appendChild(noteDesc);
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

    const newNoteDesc = document.createElement('input');
    newNoteDesc.classList.add('font-20px');
    newNoteDesc.type = 'text';
    newNoteDesc.id = 'note-desc';
    newNoteDesc.name = 'noteDesc';
    newNoteDesc.required = true;
    newNotePopup.appendChild(newNoteDesc);

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

    const addNote = () => {
      newNotePopup.remove();
      todoStorage.storeNewNote(newNoteName.value, newNoteDesc.value);
      updateNoteList();
      newNoteBtn.style.display = 'flex';
    };
    acceptNewNoteBtn.addEventListener('click', addNote);

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
    updateNoteList,
    addNewProjectPopup,
    addNewNotePopup,
    addNewTaskPopup,
    viewProject,
  };
})();

export default DOMStuff;
