import DOMStuff from './DOMStuff';
import renderHomeTab from './homeTab';
import renderTodayTab from './todayTab';
import renderWeekTab from './weekTab';

const Buttons = (() => {
  const initButtons = () => {
    const homeTab = document.querySelector('#home-tab');
    homeTab.addEventListener('click', renderHomeTab);

    const todayTab = document.querySelector('#today-tab');
    todayTab.addEventListener('click', renderTodayTab);

    const weekTab = document.querySelector('#week-tab');
    weekTab.addEventListener('click', renderWeekTab);

    const projectElements = document.querySelectorAll('.project');
    projectElements.forEach((project) => {
      project.addEventListener('click', DOMStuff.viewProject);
    });

    const newProjectBtn = document.querySelector('#new-project-btn');
    newProjectBtn.addEventListener('click', DOMStuff.addNewProjectPopup);

    const newNoteBtn = document.querySelector('#new-note-btn');
    newNoteBtn.addEventListener('click', DOMStuff.addNewNotePopup);
  };

  return { initButtons };
})();

export default Buttons;
