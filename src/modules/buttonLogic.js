const Buttons = (() => {
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

  const initButtons = () => {
    const newProjectBtn = document.querySelector('#new-project-btn');
    newProjectBtn.addEventListener('click', addNewProject);
  };

  return { initButtons };
})();

export default Buttons;
