import DOMStuff from './DOMStuff';

const Buttons = (() => {
  const initButtons = () => {
    const newProjectBtn = document.querySelector('#new-project-btn');
    newProjectBtn.addEventListener('click', DOMStuff.addNewProjectPopup);
  };

  return { initButtons };
})();

export default Buttons;
