const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

checkLocaleStorage();

form.addEventListener('input', throttle(getInputValues, 500));

function getInputValues(event) {
  event.preventDefault();

  let formData = localStorage.getItem('feedback-form-state')
    ? JSON.parse(localStorage.getItem('feedback-form-state'))
    : {};

  formData[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', sendFormData);

function sendFormData(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;

  if (email === '' || message === '') {
    alert('Please fill in all the fields!');
  } else {
    localStorage.removeItem('feedback-form-state');
    console.log({ email, message });
  }

  event.currentTarget.reset();
}

function checkLocaleStorage() {
  let formData = localStorage.getItem('feedback-form-state');
  if (formData) {
    formData = JSON.parse(formData);
    Object.entries(formData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}

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
