import createNav from './nav';
import createTasksContainer from './tasks';

const createMainContent = () => {
  const mainElement = document.createElement('main');
  document.body.appendChild(mainElement);
  createNav(mainElement);
  createTasksContainer(mainElement);
};

export default createMainContent;
