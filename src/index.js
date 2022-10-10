// import './components/styles/style.css';
import { head, content, footer } from './components/components/load.js';

// console.log(document.body.getElementsByClassName('content').children());

document.body.appendChild(head());
document.body.appendChild(content()); 
document.body.appendChild(footer()); 

console.log("So far, so good");