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

  const addNewProject = (parentNode) => {
    const newProjectPopup = document.createElement('div');
    newProjectPopup.id = 'new-project-popup';
    parentNode.appendChild(newProjectPopup);

    const newProjectName = document.createElement('input');
    newProjectName.type = 'text';
    newProjectName.id = 'projectName';
    newProjectName.name = 'projectName';
    newProjectName.required = true;
    newProjectPopup.appendChild(newProjectName);

    const newProjectPopupButtons = document.createElement('div');
    newProjectPopupButtons.classList.add('flex', 'font-20px');
    newProjectPopup.appendChild(newProjectPopupButtons);

    parentNode.appendChild(newProjectPopup);
  };

  return { createNavListItem, createTaskElement, addNewProject };
})();

export default DOMStuff;
