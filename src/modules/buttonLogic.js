import DOMStuff from './DOMStuff';

const initButtons = () => {
  const newProjectBtn = document.querySelector('#new-project-btn');
  newProjectBtn.addEventListener('click', DOMStuff.addNewProject);
};

export default initButtons;
