// import { active } from 'browser-sync';
import lottie from 'lottie-web';

const images = document.querySelectorAll('.box-icon');

let delay = 500;

[...images].map((img) => {
  setTimeout(() => {
    let rightFrame = lottie.loadAnimation({
      container: img,
      renderer: 'svg',
      loop: true,
      // autoplay: true,
      path: '../image-box.json'
    });
  }, delay);
  delay += 500;
});


document.querySelectorAll('.animation-baner').forEach(function(item){
  const leftFrame = lottie.loadAnimation({
    container: item,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../baners-data.json'
  });
})

