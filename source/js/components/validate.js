import { validateForms } from '../functions/validate-forms';
import vars from '../_vars';
import {modalClickHandler} from '../components/modals'
import { removeClassInArray,addCustomClass, removeCustomClass } from "../functions/customFunctions";

const {overlay,formsSecond,formsFirst, activeClass, activeMode} = vars;

const rules1 = [

  {
    ruleSelector: '.input-mail',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите вашу почту!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректную почту!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      },
    ]
  },
  {
    ruleSelector: '.input-user',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните название вашего заведения!'
      }
    ]
  },
];
const rules2 = [
  {
    ruleSelector: '.input-place-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните название заведения!'
      }
    ]
  },
  {
    ruleSelector: '.input-mail',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите вашу почту!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректную почту!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.input-user',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполнте ваше имя!'
      }
    ]
  },
];

const afterForm = () => {
  modalClickHandler('done',activeClass);
};

  validateForms(formsFirst, rules1, afterForm);
  validateForms(formsSecond, rules2, afterForm);




