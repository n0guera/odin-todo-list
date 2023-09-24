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

  const createProjectNavItem = (projectName, parentNode) => {
    const projectElement = document.createElement('button');
    projectElement.classList.add(
      'project-item',
      'font-20px',
      'flex',
      'align-center'
    );
    projectElement.dataset.projectName = projectName;

    const folderIcon = document.createElement('span');
    folderIcon.textContent = 'folder';
    folderIcon.classList.add('material-icons');
    folderIcon.dataset.projectName = projectName;
    projectElement.appendChild(folderIcon);

    const projectNameElement = document.createElement('p');
    projectNameElement.textContent = projectName;
    projectNameElement.classList.add('project-name-element');
    projectNameElement.dataset.projectName = projectName;
    projectElement.appendChild(projectNameElement);

    const deleteProject = document.createElement('span');
    deleteProject.textContent = 'delete';
    deleteProject.classList.add('material-icons', 'delete-project-btn');
    deleteProject.dataset.projectName = projectName;
    deleteProject.style.display = 'none';
    projectElement.appendChild(deleteProject);

    projectElement.onmouseover = () => {
      deleteProject.style.display = 'inline-block';
    };
    projectElement.onmouseout = () => {
      deleteProject.style.display = 'none';
    };

    parentNode.appendChild(projectElement);
  };

  const createTaskElement = (taskName, dueDate, checked, parentNode) => {
    const taskElement = document.createElement('button');
    taskElement.classList.add('task', 'flex', 'align-center', 'font-20px');

    const taskLeftPanel = document.createElement('div');
    taskLeftPanel.classList.add('task-left-panel', 'flex');
    taskElement.appendChild(taskLeftPanel);

    const taskRightPanel = document.createElement('div');
    taskRightPanel.classList.add('task-right-panel', 'flex');
    taskElement.appendChild(taskRightPanel);

    const taskStatus = document.createElement('span');
    if (checked) taskStatus.textContent = 'check_box';
    if (!checked) taskStatus.textContent = 'check_box_outline_blank';
    taskStatus.classList.add('material-icons', 'task-status');
    taskStatus.dataset.taskName = taskName;
    taskLeftPanel.appendChild(taskStatus);

    const taskNameElement = document.createElement('p');
    taskNameElement.textContent = taskName;
    taskLeftPanel.appendChild(taskNameElement);

    const taskDueDate = document.createElement('p');
    taskDueDate.textContent = dueDate;
    taskRightPanel.appendChild(taskDueDate);

    const deleteTask = document.createElement('span');
    deleteTask.textContent = 'delete';
    deleteTask.classList.add('material-icons', 'delete-task');
    deleteTask.dataset.taskName = taskName;
    taskRightPanel.appendChild(deleteTask);

    parentNode.appendChild(taskElement);
  };

  const updateNoteList = () => {
    const noteListContainer = document.querySelector('.note-container');
    const notes = todoStorage.getNoteList();

    noteListContainer.innerHTML = '';

    if (notes.length === 0) noteListContainer.style.display = 'none';
    if (notes.length > 0) noteListContainer.style.display = 'grid';

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

  const checkTask = (e, projectName) => {
    const taskName = e.target.dataset.taskName.toString();
    e.target.textContent = 'check_box';
    todoStorage.checkTask(projectName, taskName);
  };

  const updateTaskContainer = () => {
    const taskContainer = document.querySelector('.task-container');
    const currentProject = document.querySelector('#page-title').textContent;
    const projectTasks = todoStorage.getTaskList(currentProject);

    taskContainer.innerHTML = '';

    if (projectTasks.length === 0) taskContainer.style.display = 'none';
    if (projectTasks.length > 0) taskContainer.style.display = 'grid';

    projectTasks.forEach((task) => {
      createTaskElement(
        task.taskName,
        task.dueDate,
        task.checked,
        taskContainer
      );
    });

    const taskStatusElements = document.querySelectorAll('.task-status');
    taskStatusElements.forEach((taskStatusElement) => {
      taskStatusElement.addEventListener('click', (e) => {
        checkTask(e, currentProject);
      });
    });

    const taskDeleteElements = document.querySelectorAll('.delete-task');
    taskDeleteElements.forEach((taskDeleteElement) => {
      taskDeleteElement.addEventListener('click', (e) => {
        const taskName = e.target.dataset.taskName.toString();
        todoStorage.deleteTask(currentProject, taskName);
        updateTaskContainer();
      });
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
      todoStorage.storeNewNote(newNoteName.value, newNoteDesc.value);
      newNotePopup.remove();
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
      todoStorage.storeNewTask(
        currentProject,
        newTaskName.value,
        newTaskDate.value
      );
      newTaskPopup.remove();
      updateTaskContainer();
      newTaskBtn.style.display = 'flex';
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

    const projectName = element.target.dataset.projectName.toString();

    const pageTitleElement = document.createElement('h2');
    pageTitleElement.id = 'page-title';
    pageTitleElement.textContent = projectName;
    elementContainer.appendChild(pageTitleElement);

    const taskContainer = document.createElement('div');
    taskContainer.id = 'container';
    taskContainer.classList.add('task-container');
    elementContainer.appendChild(taskContainer);
    if (todoStorage.getTaskList(projectName).length === 0)
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
      createProjectNavItem(`${project.projectName}`, navListProjects);
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
