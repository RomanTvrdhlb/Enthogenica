import Swiper from "../vendor/swiper";
import vars from "../_vars";

const {logoSlider} = vars;

  (function () {
    "use strict";

    const breakpoint = window.matchMedia("(min-width:1024px)");
    let slider;

    const breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (slider !== undefined) slider.destroy(true, true);

        return;
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };
    const enableSwiper = function () {
      logoSlider.map((item) => {
        slider = new Swiper(item, {
          slidesPerView: 'auto',
          centeredSlides: true,
          loop: true,
          loopedSlides: 4,
          spaceBetween: 25,
          speed: 4000,
          autoplay: {
            reverseDirection: false,
            delay: 0,
            disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия
          }
        });

        slider.autoplay.start()


      })
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  })();

