import createNav from './nav';

const createMainContent = () => {
  const mainElement = document.createElement('main');

  createNav(mainElement);
  document.body.appendChild(mainElement);
};

export default createMainContent;
