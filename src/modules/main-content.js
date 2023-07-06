const createMainContent = () => {
  const mainElement = document.createElement('main');

  const navElement = document.createElement('nav');
  mainElement.appendChild(navElement);

  const taskContainer = document.createElement('section');
  mainElement.appendChild(taskContainer);

  document.body.appendChild(mainElement);
};

export default createMainContent;
