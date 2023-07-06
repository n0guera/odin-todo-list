const createFooter = () => {
  const footerElement = document.createElement('footer');

  const footerText = document.createElement('p');
  footerText.textContent = 'Made with <3 for The Odin Project curriculum';
  footerText.classList.add('flex', 'font-20px', 'justify-center');
  footerElement.appendChild(footerText);

  document.body.appendChild(footerElement);
};

export default createFooter;
