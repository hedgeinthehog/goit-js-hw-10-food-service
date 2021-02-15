import itemsTemplate from '../templates/menu-item.hbs';
import items from '../menu.json';

const menuRef = document.querySelector('.js-menu');
const markup = itemsTemplate(items);

menuRef.insertAdjacentHTML('afterbegin', markup);
