import createNav from './nav';
import createTaskContainer from './tasks';

const createMainContent = () => {
  const mainElement = document.createElement('main');
  document.body.appendChild(mainElement);
  createNav(mainElement);
  createTaskContainer(mainElement);
};

export default createMainContent;
