import './styles/style.css';
import Pizza from './images/pizza.jpg'

function headComponent() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const bannerDiv = document.createElement('div');
    const h1 = document.createElement('h1');

    // Set, populate and append banner
    bannerDiv.setAttribute('id', 'head-text');
    // Load pizza.jpg onto the banner
    const pizzaBanner = new Image();
    pizzaBanner.src = Pizza;
    bannerDiv.appendChild(pizzaBanner);
    bannerDiv.textContent = 'Turtle Pizza';
    h1.appendChild(bannerDiv);
    h1.setAttribute('id', 'header');
    header.appendChild(h1);

    // Make, Populate and append divs to nav
    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        div.textContent = `Tab ${i + 1}`;
        nav.appendChild(div);
    }
    header.appendChild(nav);

    return header;
}

function cardComponent() {
    const card = document.createElement('article');
    card.setAttribute('class', 'card');
    card.textContent('hello');
    return card;
}

function mainComponent() {
    console.log('main called');
    const mainElement = document.createElement('main');
    // mainElement.textContent("<h1>I am Main</h1>");
    return mainElement;
}

// function footerComponent() {

// }

document.body.appendChild(headComponent());
document.body.appendChild(mainComponent()); // Need to apply style loader
console.log("So far, so good");