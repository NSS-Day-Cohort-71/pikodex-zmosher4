import { pikomonList } from './pikomon.js';

const pikomons = pikomonList();
const container = document.querySelector('#container');
container.innerHTML = pikomons.join('');
