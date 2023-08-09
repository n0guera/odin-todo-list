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

  const createTaskElement = (taskName, parentNode) => {
    const taskElement = document.createElement('button');
    taskElement.classList.add('task');

    const taskCheck = document.createElement('span');
    taskCheck.textContent = 'check_box_outline_blank';
    taskCheck.classList.add('material-icons');
    taskElement.appendChild(taskCheck);

    taskElement.innerHTML += taskName;

    parentNode.appendChild(taskElement);
  };

  const updateNoteList = () => {
    const noteListContainer = document.querySelector('#task-container');
    const notes = todoStorage.getNoteList();

    noteListContainer.innerHTML = '';

    notes.forEach((note) => {
      const noteElement = document.createElement('div');
      noteElement.classList.add('note');
      noteListContainer.appendChild(noteElement);

      const noteTitle = document.createElement('h3');
      noteTitle.classList.add('note-title');
      noteTitle.textContent = note.noteName;
      noteElement.appendChild(noteTitle);

      const noteDesc = document.createElement('p');
      noteDesc.classList.add('note-desc');
      noteDesc.textContent = note.noteDesc;
      noteElement.appendChild(noteDesc);
    });
  };

  const updateTaskContainer = () => {
    const taskContainer = document.querySelector('#task-container');
    const currentProject = document.querySelector('#page-title').textContent;
    const projectTasks = todoStorage.getTaskList(currentProject);

    if (projectTasks.length === 0) taskContainer.style.display = 'none';

    projectTasks.forEach((task) => {
      createTaskElement(task.taskName, taskContainer);
    });
  };

  const addNewNotePopup = () => {
    const elementContainer = document.querySelector('#element-container');

    const newNoteBtn = document.querySelector('#new-note-btn');
    newNoteBtn.style.display = 'none';

    const newNotePopup = document.createElement('form');
    newNotePopup.method = 'post';
    newNotePopup.id = 'new-note-popup';

    const newNoteName = document.createElement('input');
    newNoteName.classList.add('font-20px');
    newNoteName.type = 'text';
    newNoteName.id = 'note-name';
    newNoteName.name = 'noteName';
    newNoteName.required = true;
    newNoteName.autocomplete = 'off';
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
    acceptNewNoteBtn.type = 'submit';
    acceptNewNoteBtn.id = 'accept-new-note-btn';
    acceptNewNoteBtn.textContent = 'Ok';
    acceptNewNoteBtn.classList.add('flex', 'font-20px', 'justify-center');
    newNotePopupButtons.appendChild(acceptNewNoteBtn);

    const cancelNewNoteBtn = document.createElement('button');
    cancelNewNoteBtn.id = 'cancel-new-note-btn';
    cancelNewNoteBtn.textContent = 'Cancel';
    cancelNewNoteBtn.classList.add('flex', 'font-20px', 'justify-center');
    newNotePopupButtons.appendChild(cancelNewNoteBtn);

    const addNote = (event) => {
      event.preventDefault();
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

    const newTaskPopup = document.createElement('form');
    newTaskPopup.method = 'post';
    newTaskPopup.id = 'new-task-popup';

    const newTaskName = document.createElement('input');
    newTaskName.classList.add('font-20px');
    newTaskName.type = 'text';
    newTaskName.id = 'task-name';
    newTaskName.name = 'taskName';
    newTaskName.required = true;
    newTaskName.autocomplete = 'off';
    newTaskPopup.appendChild(newTaskName);

    const newTaskDate = document.createElement('input');
    newTaskDate.type = 'date';
    newTaskDate.id = 'new-task-date';
    newTaskPopup.appendChild(newTaskDate);

    const newTaskPopupButtons = document.createElement('div');
    newTaskPopupButtons.id = 'new-task-popup-buttons';
    newTaskPopupButtons.classList.add('flex', 'font-20px');
    newTaskPopup.appendChild(newTaskPopupButtons);

    const acceptNewTaskBtn = document.createElement('button');
    acceptNewTaskBtn.type = 'submit';
    acceptNewTaskBtn.id = 'accept-new-task-btn';
    acceptNewTaskBtn.textContent = 'Ok';
    acceptNewTaskBtn.classList.add('flex', 'font-20px', 'justify-center');
    newTaskPopupButtons.appendChild(acceptNewTaskBtn);

    const cancelNewTaskBtn = document.createElement('button');
    cancelNewTaskBtn.id = 'cancel-new-task-btn';
    cancelNewTaskBtn.textContent = 'Cancel';
    cancelNewTaskBtn.classList.add('flex', 'font-20px', 'justify-center');
    newTaskPopupButtons.appendChild(cancelNewTaskBtn);

    const addTask = (event) => {
      event.preventDefault();
      const currentProject = document.querySelector('#page-title').textContent;
      newTaskPopup.remove();
      todoStorage.storeNewTask(
        currentProject,
        newTaskName.value,
        newTaskDate.value
      );
      updateTaskContainer();
    };
    acceptNewTaskBtn.addEventListener('click', addTask);

    const cancelNewTask = () => {
      newTaskPopup.remove();
      newTaskBtn.style.display = 'flex';
    };
    cancelNewTaskBtn.addEventListener('click', cancelNewTask);

    elementContainer.appendChild(newTaskPopup);
  };

  const viewProject = (element) => {
    const elementContainer = document.querySelector('#element-container');
    elementContainer.innerHTML = '';

    const pageTitleElement = document.createElement('h2');
    pageTitleElement.id = 'page-title';
    elementContainer.appendChild(pageTitleElement);

    const projectName = element.target.textContent;
    const filteredProjectName = projectName.split('folder')[1];
    pageTitleElement.textContent = filteredProjectName;

    const taskContainer = document.createElement('div');
    taskContainer.id = 'task-container';
    taskContainer.style.display = 'flex';
    elementContainer.appendChild(taskContainer);
    if (todoStorage.getTaskList(filteredProjectName).length === 0)
      taskContainer.style.display = 'none';

    updateTaskContainer();

    createNavListItem(
      'add_circle',
      'New task',
      elementContainer,
      'new-task-btn'
    );

    const newTaskBtn = document.querySelector('#new-task-btn');
    newTaskBtn.addEventListener('click', addNewTaskPopup);
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

    const newProjectPopup = document.createElement('form');
    newProjectPopup.method = 'post';
    newProjectPopup.id = 'new-project-popup';

    const newProjectName = document.createElement('input');
    newProjectName.classList.add('font-20px');
    newProjectName.type = 'text';
    newProjectName.id = 'project-name';
    newProjectName.name = 'projectName';
    newProjectName.required = true;
    newProjectName.autocomplete = 'off';
    newProjectPopup.appendChild(newProjectName);

    const newProjectPopupButtons = document.createElement('div');
    newProjectPopupButtons.id = 'new-project-popup-buttons';
    newProjectPopupButtons.classList.add('flex', 'font-20px');
    newProjectPopup.appendChild(newProjectPopupButtons);

    const acceptNewProjectBtn = document.createElement('button');
    acceptNewProjectBtn.type = 'submit';
    acceptNewProjectBtn.id = 'accept-new-project-btn';
    acceptNewProjectBtn.textContent = 'Ok';
    acceptNewProjectBtn.classList.add('flex', 'font-20px', 'justify-center');
    newProjectPopupButtons.appendChild(acceptNewProjectBtn);

    const cancelNewProjectBtn = document.createElement('button');
    cancelNewProjectBtn.id = 'cancel-new-project-btn';
    cancelNewProjectBtn.textContent = 'Cancel';
    cancelNewProjectBtn.classList.add('flex', 'font-20px', 'justify-center');
    newProjectPopupButtons.appendChild(cancelNewProjectBtn);

    const addProject = (event) => {
      event.preventDefault();
      if (!todoStorage.validateProjectName(newProjectName.value)) return;
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

  return {
    createButton,
    createNavListItem,
    createTaskElement,
    updateNavProjectList,
    updateNoteList,
    updateTaskContainer,
    addNewProjectPopup,
    addNewNotePopup,
    addNewTaskPopup,
    viewProject,
  };
})();

export default DOMStuff;
