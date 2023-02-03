import { removeClassInArray, addCustomClass, removeCustomClass } from '../functions/customFunctions'

const roundParrent = document.querySelector('.round-image');

if (roundParrent) {

roundParrent.innerHTML = `
<svg width="604" height="605" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g data-parrent="big-round">
    <path  d="M553.333 430.88c9.844 5.009 13.821 17.09 8.171 26.582-24.093 40.475-57.373 74.838-97.257 100.243-39.883 25.405-85.094 41.039-131.959 45.762-10.99 1.108-20.258-7.603-20.636-18.642l-3.791-110.694c-.378-11.039 8.308-20.16 19.201-21.99 19.921-3.348 39.04-10.664 56.192-21.59 17.151-10.925 31.864-25.158 43.32-41.797 6.263-9.098 18.201-13.114 28.045-8.104l98.714 50.23Z" data-inner="1" fill="url(#a)"/>
    <path d="M562.566 195.152c10.207-4.224 21.973.61 25.512 11.073 21.249 62.812 21.229 130.903-.058 193.702-3.546 10.461-15.315 15.288-25.518 11.058l-102.315-42.416c-10.204-4.23-14.905-15.915-12.057-26.588 6.808-25.512 6.816-52.378.023-77.895-2.841-10.674 1.867-22.356 12.073-26.58l102.34-42.354Z" data-inner="2" fill="url(#b)"/>
    <path d="M311.842 21.1618c.385-11.039 9.659-19.74393 20.648-18.6288 46.863 4.75534 92.062 20.4194 131.929 45.8513 39.867 25.4319 73.124 59.8177 97.189 100.3087 5.644 9.495 1.659 21.574-8.189 26.577l-98.747 50.163c-9.848 5.003-21.783.979-28.041-8.123-11.444-16.647-26.147-30.89-43.292-41.827-17.144-10.936-36.258-18.266-56.177-21.627-10.892-1.838-19.571-10.964-19.186-22.003l3.866-110.6912Z" data-inner="3" fill="url(#c)"/>
    <path d="M50.667 430.88c-9.8444 5.009-13.8211 17.09-8.1713 26.582 24.0928 40.475 57.3731 74.838 97.2573 100.243 39.883 25.405 85.094 41.039 131.959 45.762 10.99 1.108 20.258-7.603 20.636-18.642l3.791-110.694c.378-11.039-8.308-20.16-19.201-21.99-19.921-3.348-39.04-10.664-56.192-21.59-17.151-10.925-31.864-25.158-43.32-41.797-6.263-9.098-18.201-13.114-28.045-8.104l-98.714 50.23Z" data-inner="4" fill="url(#d)"/>
    <path d="M41.4336 195.152c-10.2062-4.224-21.9724.61-25.512 11.073-21.2487 62.812-21.22825 130.903.0582 193.702 3.5459 10.461 15.315 15.288 25.5186 11.058l102.3146-42.416c10.204-4.23 14.905-15.915 12.057-26.588-6.808-25.512-6.816-52.378-.023-77.895 2.841-10.674-1.867-22.356-12.073-26.58L41.4336 195.152Z" data-inner="5" fill="url(#e)"/>
    <path d="M292.158 21.1618c-.385-11.039-9.659-19.74393-20.648-18.6288-46.863 4.75534-92.062 20.4194-131.929 45.8513C99.7143 73.8162 66.4572 108.202 42.3916 148.693c-5.6434 9.495-1.6585 21.574 8.1893 26.577l98.7371 50.158c9.848 5.003 21.783.979 28.041-8.123 11.445-16.648 26.149-30.893 43.295-41.831 17.146-10.938 36.262-18.268 56.183-21.629 10.892-1.838 19.572-10.965 19.186-22.004l-3.865-110.6792Z" class="active" data-inner="6" fill="url(#f)"/>
  </g>
  <g data-parrent="inner-round">
    <path d="M529.269 418.635c9.845 5.009 13.826 17.096 8.115 26.55-21.863 36.191-51.829 66.935-87.642 89.748-35.813 22.812-76.343 36.972-118.383 41.485-10.983 1.18-20.253-7.538-20.631-18.577l-2.867-83.701c-.378-11.04 8.308-20.16 19.201-21.991 19.923-3.347 39.043-10.665 56.196-21.591 17.153-10.926 31.867-25.16 43.323-41.8 6.264-9.098 18.201-13.114 28.046-8.105l74.642 37.982Z" data-path="1" fill="url(#g)"/>
    <path d="M537.619 205.476c10.206-4.223 21.978.609 25.45 11.095 18.592 56.159 18.574 116.847-.052 172.995-3.478 10.484-15.253 15.309-25.457 11.079l-77.365-32.073c-10.204-4.23-14.905-15.915-12.058-26.587 6.809-25.515 6.817-52.383.024-77.902-2.842-10.674 1.867-22.356 12.073-26.58l77.385-32.027Z" data-path="2" fill="url(#h)"/>
    <path d="M310.899 48.1453c.386-11.0389 9.662-19.7505 20.644-18.5639 42.037 4.5421 82.557 18.7294 118.355 41.5657s65.743 53.6009 87.582 89.8059c5.705 9.459 1.715 21.543-8.133 26.545l-74.668 37.931c-9.848 5.003-21.783.979-28.04-8.123-11.445-16.648-26.149-30.892-43.295-41.83-17.146-10.937-36.261-18.267-56.182-21.628-10.891-1.838-19.571-10.965-19.185-22.004l2.922-83.6987Z" data-path="3" fill="url(#i)"/>
    <path d="M74.7308 418.635c-9.8445 5.009-13.8261 17.096-8.1147 26.55 21.8628 36.191 51.8289 66.935 87.6419 89.748 35.813 22.812 76.343 36.972 118.383 41.485 10.983 1.18 20.253-7.538 20.631-18.577l2.867-83.701c.378-11.04-8.308-20.16-19.201-21.991-19.923-3.347-39.043-10.665-56.196-21.591-17.153-10.926-31.867-25.16-43.323-41.8-6.264-9.098-18.201-13.114-28.046-8.105l-74.6422 37.982Z" data-path="4" fill="url(#j)"/>
    <path d="M66.3814 205.476c-10.2061-4.223-21.9789.609-25.4504 11.095-18.5924 56.159-18.5742 116.847.052 172.995 3.4778 10.484 15.2534 15.309 25.457 11.079l77.365-32.073c10.204-4.23 14.905-15.915 12.058-26.587-6.809-25.515-6.817-52.383-.024-77.902 2.842-10.674-1.867-22.356-12.073-26.58l-77.3846-32.027Z" data-path="5" fill="url(#k)"/>
    <path d="M293.101 48.1453c-.386-11.0389-9.662-19.7505-20.644-18.5639-42.037 4.5421-82.557 18.7294-118.355 41.5657S88.3588 124.748 66.5204 160.953c-5.705 9.459-1.7153 21.543 8.1326 26.545l74.668 37.931c9.848 5.003 21.783.979 28.04-8.123 11.445-16.648 26.149-30.892 43.295-41.83 17.146-10.937 36.261-18.267 56.182-21.628 10.891-1.838 19.571-10.965 19.185-22.004l-2.922-83.6987Z" class="active" data-path="6" fill="url(#l)"/>
  </g>
  <defs>
    <linearGradient id="a" x1="524.931" y1="406.219" x2="302" y2="593.459" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A066FF"/>
      <stop offset="1" stop-color="#FF2879"/>
    </linearGradient>
    <linearGradient id="b" x1="545.247" y1="189.877" x2="545.247" y2="426.535" gradientUnits="userSpaceOnUse">
      <stop stop-color="#359ADC"/>
      <stop offset="1" stop-color="#A45CFF"/>
    </linearGradient>
    <linearGradient id="c" x1="528.225" y1="189.328" x2="314.08" y2="48.7609" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3499DC"/>
      <stop offset="1" stop-color="#4A64FF"/>
    </linearGradient>
    <linearGradient id="d" x1="79.0691" y1="406.219" x2="302" y2="593.459" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F07582"/>
      <stop offset="1" stop-color="#FA3485"/>
    </linearGradient>
    <linearGradient id="e" x1="58.7527" y1="189.877" x2="58.7527" y2="426.535" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F9D294"/>
      <stop offset="1" stop-color="#F17482"/>
    </linearGradient>
    <linearGradient id="f" x1="75.7746" y1="189.328" x2="289.92" y2="48.7609" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FAD194"/>
      <stop offset="1" stop-color="#35F7A5"/>
    </linearGradient>
    <linearGradient id="g" x1="505" y1="396.99" x2="302" y2="567.49" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A066FF"/>
      <stop offset="1" stop-color="#FF2879"/>
    </linearGradient>
    <linearGradient id="h" x1="523.5" y1="199.99" x2="523.5" y2="415.49" gradientUnits="userSpaceOnUse">
      <stop stop-color="#359ADC"/>
      <stop offset="1" stop-color="#A45CFF"/>
    </linearGradient>
    <linearGradient id="i" x1="508" y1="199.49" x2="313" y2="71.49" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3499DC"/>
      <stop offset="1" stop-color="#4A64FF"/>
    </linearGradient>
    <linearGradient id="j" x1="99" y1="396.99" x2="302" y2="567.49" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F07582"/>
      <stop offset="1" stop-color="#FA3485"/>
    </linearGradient>
    <linearGradient id="k" x1="80.5" y1="199.99" x2="80.5" y2="415.49" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F9D294"/>
      <stop offset="1" stop-color="#F17482"/>
    </linearGradient>
    <linearGradient id="l" x1="96" y1="199.49" x2="291" y2="71.49" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FAD194"/>
      <stop offset="1" stop-color="#35F7A5"/>
    </linearGradient>
  </defs>
</svg>
`;

}

const bigRound = document.querySelectorAll('[data-parrent="big-round"] path');
const bigRoundPath = document.querySelectorAll('[data-parrent="inner-round"] path');
const imageDescr = document.querySelectorAll('[data-descr]');

function addClassMain(currentNumber, active){
  addCustomClass(document.querySelector(`[data-inner="${currentNumber}"]`), active);
  addCustomClass(document.querySelector(`[data-path="${currentNumber}"]`), active);
  addCustomClass(document.querySelector(`[data-descr="${currentNumber}"]`), active);
}
function removeClassMain(item,active){
  removeCustomClass(item, active);
  removeClassInArray([...bigRound], active);
  removeClassInArray([...bigRoundPath], active);
  removeClassInArray([...imageDescr], active);
}

const addHoverClass = function (array, dataPath, active) {
  array.forEach(function (item) {
    let currentNumber;
    item.addEventListener('mouseenter', function (e) {
      currentNumber = e.target.getAttribute(dataPath);
      removeClassMain(item, active);
      addClassMain(currentNumber, active);
    });
    item.addEventListener('mouseout', function (e) {
      removeClassMain(item, active);
      addClassMain(currentNumber, active);
    });
  })
}


addHoverClass(imageDescr, 'data-descr', 'active');
addHoverClass(bigRoundPath, 'data-path', 'active');
