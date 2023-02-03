import { addCustomClass, removeCustomClass } from "../functions/customFunctions";
import vars from "../_vars";
const {header} = vars;

let lastScroll = 0;
const defaultOffset = 0;


function stickyHeaderFunction(breakpoint){
  let containerWidth = document.documentElement.clientWidth;
  if (containerWidth > `${breakpoint}`) {
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains('sticky');

    window.addEventListener('scroll', () => {
        if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
            addCustomClass(header, "sticky")
        }
        else if(window.pageYOffset === 0 && containHide()){
            removeCustomClass(header, "sticky")
        }

        lastScroll = scrollPosition();
    })
  }
}

window.addEventListener('resize', () => {
  stickyHeaderFunction(0)
});
window.addEventListener('DOMContentLoaded', () => {
  stickyHeaderFunction(0)
});




