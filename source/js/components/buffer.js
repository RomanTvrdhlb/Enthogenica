const parrent = [...document.querySelectorAll('.buffer')];

function copyFunction(textInput) {
  textInput.select();
  document.execCommand("copy");
}

parrent.map(function(item){
  const currentInput =  item.querySelector('.buffer__input');
  const currentButton =  item.querySelector('.buffer__button');
  currentButton.addEventListener('click', () => copyFunction(currentInput))
});


