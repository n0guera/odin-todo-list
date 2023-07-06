import odinLogo from '../img/odin-lined.png';

const createHeader = () => {
  const headerElement = document.createElement('header');

  const logoContainer = document.createElement('div');
  logoContainer.setAttribute('id', 'logo-container');
  headerElement.appendChild(logoContainer);

  const logoImg = new Image();
  logoImg.src = odinLogo;
  logoImg.alt = 'The Odin Project logo';
  logoImg.setAttribute('id', 'odin-logo');
  logoContainer.appendChild(logoImg);

  const logoText = document.createElement('p');
  logoText.setAttribute('id', 'logo-text');
  logoText.textContent = 'The Odin Project';
  logoContainer.appendChild(logoText);

  const headerText = document.createElement('p');
  headerText.textContent = 'Todo List';
  headerElement.appendChild(headerText);

  document.body.appendChild(headerElement);
};

export default createHeader;
