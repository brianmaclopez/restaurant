import './styles/style.css';
import Pizza from './images/pizza.jpg'
import { home, menu, reservation } from './content/cards.js';


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
    bannerDiv.classList.add('cursive');
    h1.appendChild(bannerDiv);
    h1.setAttribute('id', 'header');
    header.appendChild(h1);

    const tabs = ['Home', 'Menu', 'Reservations'];
    // Make, Populate and append divs to nav
    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        div.textContent = tabs[i];
        div.addEventListener('click', () => {
            // Dynamically add event according to type
            console.log('click');

            let node = document.getElementById("main");

            switch (tabs[i]) {
                case 'Home':
                    if (node.parentNode) {
                      node.parentNode.removeChild(node);
                    }
                    document.getElementById('content').appendChild(mainComponent(home));
                    break;
                case 'Menu':
                    if (node.parentNode) {
                      node.parentNode.removeChild(node);
                    }
                    document.getElementById('content').appendChild(mainComponent(menu));
                    break;
                case 'Reservations':
                    if (node.parentNode) {
                        node.parentNode.removeChild(node);
                      }
                    document.getElementById('content').appendChild(mainComponent(reservation));
                    document.getElementById('main').setAttribute('background-color', 'white');
                    break;
            }
            // console.dir()
            // Change main card comp
        });
        nav.appendChild(div);
    }
    header.appendChild(nav);

    return header;
}

// Deprecated
// function cardComponent(text) {
//     const card = document.createElement('article');
//     card.setAttribute('class', 'card');
//     card.textContent = text;
//     return card;
// }
function contentComponent() {
    const content = document.createElement('div');
    content.appendChild(mainComponent(home));
    content.id = 'content';

    return content;
}

function mainComponent(card) {
    console.log('main called');
    const mainElement = document.createElement('main');
    mainElement.id = 'main'
    mainElement.appendChild(card());
    // mainElement.appendChild(cardComponent(menu));
    // mainElement.appendChild(cardComponent(reservation));
    return mainElement;
}

function footerComponent() {
    const footer = document.createElement('footer');
    footer.textContent = 'Site design by Brian McCall Lopez';
    
    return footer;
}

// const content = document.querySelector('#main');
// const main = mainComponent(home);
// console.log(content);

document.body.appendChild(headComponent());
document.body.appendChild(contentComponent()); 
document.body.appendChild(footerComponent()); 

console.log("So far, so good");