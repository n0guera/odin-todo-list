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

    todoStorage.updateProjectList();

    navListProjects.innerHTML = '';

    todoStorage.getProjectList().forEach((project) => {
      createNavListItem('folder', `${project.projectName}`, navListProjects);
    });

    createNavListItem(
      'add_circle',
      'New project',
      navListProjects,
      'new-project-btn'
    );
  };

  return { createNavListItem, createTaskElement, updateNavProjectList };
})();

export default DOMStuff;
