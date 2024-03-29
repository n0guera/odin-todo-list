import createHeader from './modules/header';
import createMainContent from './modules/main-content';
import createFooter from './modules/footer';
import Buttons from './modules/buttonLogic';
import DOMStuff from './modules/DOMStuff';
import './index.css';

createHeader();
createMainContent();
createFooter();
window.addEventListener('load', DOMStuff.updateNavProjectList());
Buttons.initButtons();
