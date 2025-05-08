'use strict';

const container = document.querySelector('.main-container');

export default function createLayout(designatedPage) {
    container.innerHTML = '';
    const buttonsContainer = document.createElement('div');
    container.append(buttonsContainer);
    buttonsContainer.classList.add('buttons-container');
    const pages = ['home', 'menu', 'about'];

    pages.forEach(pageKey => {
        const button = document.createElement('button');
        button.textContent = pageKey.charAt(0).toUpperCase() + pageKey.slice(1);
        button.classList.add('nav-buttons');
        button.addEventListener('click', () => {
            designatedPage(pageKey);
        });
        buttonsContainer.append(button);
    });
}