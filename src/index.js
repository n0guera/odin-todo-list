import createFooter from './modules/footer';
import createHeader from './modules/header';
import createMainContent from './modules/main-content';
import Buttons from './modules/buttonLogic';
import DOMStuff from './modules/DOMStuff';

createHeader();
createMainContent();
createFooter();
window.addEventListener('load', DOMStuff.updateNavProjectList());
Buttons.initButtons();
