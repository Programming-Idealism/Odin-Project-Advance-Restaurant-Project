'use strict';

import burgerImage from "../assets/Burger.avif";
import fork from "../assets/fork.png";
import knife from "../assets/knife.png";

export default function toHomePage() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('home-page');

    const headliner = document.createElement('h1');
    headliner.classList.add('main-headline');
    headliner.innerHTML = `Welcome to <span class="store-name-home">Burgeraious</span> Where beautiful burgers meet beautiful customers!`;
    wrapper.appendChild(headliner);

    const image = document.createElement('img');
    image.setAttribute('id', 'home-burger')
    image.src = burgerImage;
    wrapper.appendChild(image);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    wrapper.append(imageContainer);
    imageContainer.append(image);
    
    const forkImage = document.createElement('img');
    forkImage.setAttribute('id', 'fork-image');
    forkImage.src = fork;
    imageContainer.prepend(forkImage)

    const knifeImage = document.createElement('img');
    knifeImage.setAttribute('id', 'knife-image');
    knifeImage.src = knife;
    imageContainer.prepend(knifeImage)

    
    const message = document.createElement('p');
    message.innerHTML = `<em>Using a cutlery to eat hamburger is just stupid! Well, duh! It looks awesome though!</em>`;
    message.className = 'message';
    wrapper.append(message);
    const credit = document.createElement('p');
    credit.className = 'home-credit';
    credit.textContent = 'Ori Trabelsi/最も相応しい弟子  - The Odin Project - 2025';
    wrapper.appendChild(credit);
    
    return wrapper;
}
