import odinLogo from '../img/odin-lined.png';

const createHeader = () => {
  const headerElement = document.createElement('header');

  const logoImg = new Image();
  logoImg.src = odinLogo;
  logoImg.alt = 'The Odin Project logo';
  logoImg.setAttribute('id', 'odin-logo');
  headerElement.appendChild(logoImg);

  const logoText = document.createElement('p');
  logoText.setAttribute('id', 'logo-text');
  logoText.textContent = 'The Odin Project';
  headerElement.appendChild(logoText);

  const headerText = document.createElement('p');
  headerText.textContent = 'Todo List';
  headerElement.appendChild(headerText);

  document.body.appendChild(headerElement);
};

export default createHeader;
