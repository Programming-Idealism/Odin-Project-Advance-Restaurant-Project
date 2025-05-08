'use strict';

import juicyStandardBurger from "../assets/Juicy Standard Burger.png";
import crispyFishBurger from "../assets/Crispy Fish Burger.jpg";
import cheeseBurger from "../assets/Cheese Burger.png";
import beastBurger from "../assets/Beast Burger.png";
import childBurger from "../assets/Child Burger.jpg";
import eggBurger from "../assets/Egg Burger.jpg";
import dryBurger from "../assets/Dry Burger.jpg";


const container = document.querySelector('.main-container');

export default function toMenuPage() {
    const content = document.createElement('div');
    container.append(content);

    const headlinesContainer = document.createElement('div');
    headlinesContainer.classList.add('headline-container');
    content.append(headlinesContainer);
    const headliner = document.createElement('h1');
    headliner.innerHTML = `<h1>At <span class="store-name-menu">Burgeraious</span> we offer only the very best!</h1>`;
    headliner.id = 'menu-headline';

    const subHeadliner = document.createElement('h2');
    subHeadliner.innerHTML = `<h2>Most refined ingredients, fresh, delicious, juicy burgers to brighten your day!</h2>`;
    subHeadliner.id = 'menu-subline';
    headlinesContainer.append(headliner, subHeadliner);

    const typesOfBurgers = [
        {
            src: juicyStandardBurger,
            title: "The Juicy Standard - 8$",
            description: "Our classic beef patty with fresh lettuce and secret sauce!"
        },
        {
            src: crispyFishBurger,
            title: "The Crispy Fish-Burger - 9$",
            description: "The fantastic, crispy burger - The Fish Burger!"
        },
        {
            src: cheeseBurger,
            title: "Cheese Converge Within The Burger - 9$",
            description: "Our classic version of the classic Cheese Burger!"
        },
        {
            src: beastBurger,
            title: "The Delicious Monstrosity - 15$",
            description: "Beastly Meat of DOOM. Eat at your own healthy risk!"
        },
        {
            src: childBurger,
            title: "The Bratty Burger - 7$",
            description: "Buy yourself this package of small burger and fries to distract and calm your loud children at our restaurant.. Please!"
        },
        {
            src: eggBurger,
            title: "Burger Explosion - 8$",
            description: "Egg burger is the direct result of the combination of the cosmos of the burger-verse!"
        },
        {
            src: dryBurger,
            title: "The Dull Yet Delicious Burger - 7$",
            description: "Do you have a fear of sauces/vegetables ruining your burger experience? Look no further than here!"
        },
    ];

    const grid = document.createElement('div');
    grid.classList.add('menu-grid');
    content.append(grid);

    typesOfBurgers.forEach(({ src, title, description }) => {
        const burgerCard = document.createElement('div');
        burgerCard.classList.add('burger-card');
        const image = document.createElement('img');
        image.setAttribute('id', 'menu-burger');
        image.src = src;
        image.alt = title;

        const headline = document.createElement('h1');
        headline.innerHTML = title;
        headline.classList.add('menu-headline');

        const subLine = document.createElement('p');
        subLine.textContent = description;
        subLine.classList.add('menu-subline');

        burgerCard.append(image, headline, subLine);
        grid.appendChild(burgerCard);
    });

    return content;
}