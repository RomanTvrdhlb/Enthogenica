import vars from '../_vars';
const {cardList} = vars;

import { removeClassInArray, addCustomClass ,removeCustomClass} from "../functions/customFunctions";

cardList.map(function(item){
  for (const btn of item.querySelectorAll('.card__generation-item')) {
    btn.addEventListener('click', function(){
      removeClassInArray([...item.querySelectorAll('.card__generation-item')], 'active')
      addCustomClass(this, 'active');
    })
  }
});
