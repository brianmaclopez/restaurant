const homeComp = function() {
    const section = document.createElement('section');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    section.classList.add('homeSection');
    h1.classList.add('homeH1');
    p.classList.add('homeP');

    h1.textContent = 'Home Page';
    p.textContent = 'This is content all about the homepage';

    section.appendChild(h1);
    section.appendChild(p);
    return section;
}

const menuComp = function() {
    const section = document.createElement('section');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    section.classList.add('menuSection');
    h1.classList.add('menuH1');
    p.classList.add('menuP');

    h1.textContent = 'Menu Page';
    p.textContent = 'This is content all about the Menu';

    section.appendChild(h1);
    section.appendChild(p);
    return section;
}

const reservationComp = function() {
    const section = document.createElement('section');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    section.classList.add('reservationSection');
    h1.classList.add('reservationH1');
    p.classList.add('reservationP');

    h1.textContent = 'Reservations';
    p.textContent = 'This is content all about the reservations';

    section.appendChild(h1);
    section.appendChild(p);
    return section;
}

export { 
    homeComp as home,
    menuComp as menu, 
    reservationComp as reservation
};