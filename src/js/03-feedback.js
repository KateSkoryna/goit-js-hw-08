// const throttle = require('lodash.throttle');

// const form = document.querySelector('.feedback-form');
// const emailEl = document.querySelector('input');
// const messageEl = document.querySelector('textarea');

// checkLocaleStorage();

// form.addEventListener('input', throttle(getInputValues, 500));

// function getInputValues(event) {
//   event.preventDefault();

//   let formData = localStorage.getItem('feedback-form-state')
//     ? JSON.parse(localStorage.getItem('feedback-form-state'))
//     : {};

//   formData[event.target.name] = event.target.value;

//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// }

// form.addEventListener('submit', sendFormData);

// function sendFormData(event) {
//   event.preventDefault();

//   const email = event.target.elements.email.value;
//   const message = event.target.elements.message.value;

//   if (email === '' || message === '') {
//     alert('Please fill in all the fields!');
//   } else {
//     localStorage.removeItem('feedback-form-state');
//     console.log({ email, message });
//   }

//   event.currentTarget.reset();
// }

// function checkLocaleStorage() {
//   let formData = localStorage.getItem('feedback-form-state');
//   if (formData) {
//     formData = JSON.parse(formData);
//     Object.entries(formData).forEach(([name, value]) => {
//       form.elements[name].value = value;
//     });
//   }
// }

// ВТОРОЙ ВАРИАНТ

// const throttle = require('lodash.throttle');

// const form = document.querySelector('.feedback-form');
// const emailEl = document.querySelector('input');
// const messageEl = document.querySelector('textarea');
// const formData = localStorage.getItem('feedback-form-state')
//   ? JSON.parse(localStorage.getItem('feedback-form-state'))
//   : {};

// checkLocaleStorage();

// emailEl.addEventListener('input', throttle(getInputValues, 500));
// messageEl.addEventListener('input', throttle(getInputValues, 500));

// function getInputValues(event) {
//   event.preventDefault();

//   const name = event.target.name;
//   const value = event.target.value;

//   formData[name] = value;

//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// }

// form.addEventListener('submit', sendFormData);

// function sendFormData(event) {
//   event.preventDefault();

//   const email = event.target.elements.email.value;
//   const message = event.target.elements.message.value;

//   if (email === '' || message === '') {
//     alert('Please fill in all the fields!');
//   } else {
//     localStorage.removeItem('feedback-form-state');
//     console.log({ email, message });
//   }

//   event.currentTarget.reset();
// }

// function checkLocaleStorage() {
//   if (formData.email) {
//     emailEl.value = formData.email;
//   }
//   if (formData.message) {
//     messageEl.value = formData.message;
//   }
// }

// import throttle from 'lodash.throttle';
// const form = document.querySelector('.feedback-form');
// const email = document.querySelector('input');
// const message = document.querySelector('textarea');

// let formData = {};

// form.addEventListener('input', inputValue);
// form.addEventListener('submit', onSubmitForm);

// function onFormData(el) {
//   const data = JSON.stringify(formData);
//   if (data) {
//     return localStorage.setItem(el, data);
//   }
// }

// function dataFromLocalStorage(el) {
//   const data = localStorage.getItem(el);
//   if (data === null) {
//     return (el = undefined);
//   } else {
//     return JSON.parse(data);
//   }
// }

// const objFromLocalStorage = dataFromLocalStorage('feedback-form-state');

// if (objFromLocalStorage) {
//   email.value = objFromLocalStorage.email;
//   message.value = objFromLocalStorage.message;
//   formData = objFromLocalStorage;
// } else {
//   email.value = '';
//   message.value = '';
// }

// function onSubmitForm(e) {
//   e.preventDefault();
//   const formEl = e.currentTarget.elements;
//   const emailEl = formEl.email.value;
//   const messageEl = formEl.message.value;
//   if (emailEl === '' || messageEl === '') {
//     alert('Всі поля повинні бути заповнені');
//   } else if (emailEl !== '' || messageEl !== '') {
//     console.log(formData);
//   }
//   localStorage.removeItem('feedback-form-state');
//   form.reset();
// }
// function inputValue(e) {
//   const {
//     elements: { email, message },
//   } = e.currentTarget;
//   if (email.value || message.value) {
//     formData = {
//       email: email.value,
//       message: message.value,
//     };
//     throttle(onFormData, 500)('feedback-form-state', formData);
//   }
// }

// ВАРИАНТ

import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const feedBackFormRef = document.querySelector('.feedback-form');

feedBackFormRef.addEventListener('submit', onFormSubmit);
feedBackFormRef.addEventListener('input', throttle(onDataInput, 500));

getDataFunction();

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.target.email.value;
  const message = event.target.message.value;

  if (email === '' || message === '') {
    alert('Заполни форму, балда!');
  } else {
    console.log({ email, message });
  }
  event.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onDataInput(event) {
  let getItemsEl = localStorage.getItem(LOCALSTORAGE_KEY);
  getItemsEl = getItemsEl ? JSON.parse(getItemsEl) : {};
  getItemsEl[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(getItemsEl));
}

function getDataFunction() {
  let getItemsEl = localStorage.getItem(LOCALSTORAGE_KEY);
  if (getItemsEl) {
    getItemsEl = JSON.parse(getItemsEl);
    Object.entries(getItemsEl).forEach(([name, value]) => {
      feedBackFormRef.elements[name].value = value;
    });
  }
}
