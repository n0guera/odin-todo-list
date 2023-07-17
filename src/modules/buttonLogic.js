import todoStorage from './todoStorage';

const Buttons = (() => {
  const addNewProjectPopup = () => {
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

    const addNewProject = () => {
      todoStorage.storeNewProject(newProjectName.value);
      newProjectPopup.style.display = 'none';
      newProjectBtn.style.display = 'flex';
    };
    acceptNewProjectBtn.addEventListener('click', addNewProject);

    projectList.appendChild(newProjectPopup);
  };

  const initButtons = () => {
    const newProjectBtn = document.querySelector('#new-project-btn');
    newProjectBtn.addEventListener('click', addNewProjectPopup);
  };

  return { initButtons };
})();

export default Buttons;
