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

  const addNewProject = () => {
    const newProjectBtn = document.querySelector('#new-project-btn');
    newProjectBtn.style.display = 'none';

    const projectList = document.querySelector('#nav-list-projects');
    const newProjectPopup = document.createElement('div');
    newProjectPopup.id = 'new-project-popup';
    projectList.appendChild(newProjectPopup);

    const newProjectName = document.createElement('input');
    newProjectName.classList.add('font-20px');
    newProjectName.type = 'text';
    newProjectName.id = 'projectName';
    newProjectName.name = 'projectName';
    newProjectName.required = true;
    newProjectPopup.appendChild(newProjectName);

    const newProjectPopupButtons = document.createElement('div');
    newProjectPopupButtons.id = 'new-project-popup-buttons';
    newProjectPopupButtons.classList.add('flex', 'font-20px');
    newProjectPopup.appendChild(newProjectPopupButtons);

    const acceptBtn = document.createElement('button');
    acceptBtn.textContent = 'Ok';
    acceptBtn.classList.add('accept-btn', 'flex', 'font-20px');
    newProjectPopupButtons.appendChild(acceptBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('cancel-btn', 'flex', 'font-20px');
    newProjectPopupButtons.appendChild(cancelBtn);

    projectList.appendChild(newProjectPopup);
  };

  return { createNavListItem, createTaskElement, addNewProject };
})();

export default DOMStuff;
