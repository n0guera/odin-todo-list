import createNav from './nav';
import createTasksContainer from './tasks';

const createMainContent = () => {
  const mainElement = document.createElement('main');

  createNav(mainElement);
  createTasksContainer(mainElement);
  document.body.appendChild(mainElement);
};

export default createMainContent;
