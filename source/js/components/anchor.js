// Подключение плавной прокрутки к якорям
// https://github.com/cferdinandi/smooth-scroll
import {addCustomClass, removeClassInArray} from '../functions/customFunctions';

import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
});

const links = [...document.querySelectorAll('.main-nav__link')];
links.map(function(link){
  link.addEventListener('click', function(){
    removeClassInArray(links, 'active');
    addCustomClass(link, 'active');
  })
})