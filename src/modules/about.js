'use strict';

import Burgeraious from "../assets/Burgeraious.jpg";

const container = document.querySelector('.main-container');

export default function toAboutPage() {
    const content = document.createElement('div');
    content.classList.add('about-page'); 
    container.append(content);
    const background = document.createElement('img');
    background.src = Burgeraious;
    background.classList.add('about-background');
    content.appendChild(background);

    const message = document.createElement('div');
    message.classList.add('about-message');
    message.innerHTML = `
    <h2 class="message-headline">About <span class="store-name-about">Burgeraious</span>:</h2>
    <p id="message-paragraph">In case you haven't figured it out by now the store doesn't actually <br> exist, dummy! This is an exercise dummy model!</p>
    <small>Phone: Unknown Plane-123456789</small> <br>
    <small>Address: Not on this domain 馬鹿野郎!</small>
    `;
    content.appendChild(message);

    return content;
}