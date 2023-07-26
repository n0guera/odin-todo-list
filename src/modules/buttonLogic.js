import DOMStuff from './DOMStuff';

const Buttons = (() => {
  const initButtons = () => {
    const homeTab = document.querySelector('#home-tab');
    homeTab.addEventListener('click', DOMStuff.displayPageTitle);

    const todayTab = document.querySelector('#today-tab');
    todayTab.addEventListener('click', DOMStuff.displayPageTitle);

    const weekTab = document.querySelector('#week-tab');
    weekTab.addEventListener('click', DOMStuff.displayPageTitle);

    const newProjectBtn = document.querySelector('#new-project-btn');
    newProjectBtn.addEventListener('click', DOMStuff.addNewProjectPopup);

    const newTaskBtn = document.querySelector('#new-task-btn');
    newTaskBtn.addEventListener('click', DOMStuff.addNewTaskPopup);
  };

  return { initButtons };
})();

export default Buttons;
