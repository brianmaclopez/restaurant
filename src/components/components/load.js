import '../styles/style.css';
import Pizza from '../images/pizza.jpg'
import { home, menu, reservation } from './cards.js';


function headComponent() {
    console.log('loading head component from load.js...');
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const bannerDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    const getTabs = () => document.getElementById('nav-bar').childNodes;

    // Set, populate and append banner
    bannerDiv.setAttribute('id', 'head-text');

    // Load pizza.jpg onto the banner
    const pizzaBanner = new Image();
    pizzaBanner.src = Pizza;
    bannerDiv.appendChild(pizzaBanner);
    bannerDiv.textContent = 'Turtle Pizza';
    bannerDiv.classList.add('cursive');
    h1.appendChild(bannerDiv);
    h1.setAttribute('id', 'header');
    header.appendChild(h1);

    // Make, Populate and append divs to nav
    // Can be refactored out to a function
    const tabs = ['Home', 'Menu', 'Reservations'];
    for (let i = 0; i < 3; i++) {
        console.log(`creating ${tabs[i]} tab...`)
        const div = document.createElement('div');
        div.textContent = tabs[i];
        div.classList.add(`tab${i + 1}`);
        div.addEventListener('click', () => {
            // Dynamically add event according to type
            console.log('click');
            let node = document.getElementById("main");
            const content = document.getElementById('content');

            switch (tabs[i]) {
                case 'Home':
                    console.log('home tab called...');
                    if (node.parentNode) {
                      node.parentNode.removeChild(node);
                    }
                    for (const tab of getTabs()) {
                        tab.classList.remove('active-tab');
                    }
                    div.classList.add('active-tab');
                    content.appendChild(mainComponent(home));
                    break;
                case 'Menu':
                    console.log('menu tab called...');
                    if (node.parentNode) {
                      node.parentNode.removeChild(node);
                    }
                    for (const tab of getTabs()) {
                        tab.classList.remove('active-tab');
                    }
                    div.classList.add('active-tab');
                    content.appendChild(mainComponent(menu));
                    break;
                case 'Reservations':
                    console.log('resrvations tab called...');
                    if (node.parentNode) {
                        node.parentNode.removeChild(node);
                    }
                    for (const tab of getTabs()) {
                        tab.classList.remove('active-tab');
                    }
                    div.classList.add('active-tab');
                    content.appendChild(mainComponent(reservation));
                    break;
            }
        });
        nav.appendChild(div);
    }
    nav.id = 'nav-bar';
    nav.firstChild.classList.add('active-tab');
    header.appendChild(nav);

    return header;
}

function contentComponent() {
    console.log('loading content component from load.js...');
    const content = document.createElement('div');
    content.appendChild(mainComponent(home));
    content.id = 'content';

    return content;
}

function mainComponent(card) {
    console.log('loading main component from load.js...');
    // input a card from the cards module
    const mainElement = document.createElement('main');
    mainElement.id = 'main'
    mainElement.appendChild(card());
    return mainElement;
}

function footerComponent() {
    // Image attribution
    console.log('loading footer component from load.js...');
    const footer = document.createElement('footer');
    footer.textContent = 'Site design by Brian McCall Lopez';
    
    return footer;
}

export {
    headComponent as head,
    contentComponent as content,
    footerComponent as footer
}