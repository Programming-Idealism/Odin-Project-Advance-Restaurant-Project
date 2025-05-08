'use strict';

import './style.css';
import createLayout from './modules/layout';
import toHomePage from './modules/home';
import toMenuPage from './modules/menu';
import toAboutPage from './modules/about';

const container = document.querySelector('.main-container');

const availablePages = {
    home: toHomePage,
    menu: toMenuPage,
    about: toAboutPage
};

function renderPage(pageKey) {
    container.innerHTML = '';
    createLayout(renderPage);
    const pageElement = availablePages[pageKey]();
    container.appendChild(pageElement);
    const credit = document.createElement('p');
    credit.className = 'home-credit';
    credit.textContent = 'Ori Trabelsi/最も相応しい弟子  - The Odin Project - 2025';
    container.appendChild(credit);
}

renderPage('home');
