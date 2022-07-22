const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const formData = {};

checkLocaleStorage();

emailEl.addEventListener('input', throttle(getInputValues, 500));
messageEl.addEventListener('input', throttle(getInputValues, 500));

function getInputValues(event) {
  event.preventDefault();

  const name = event.target.name;
  const value = event.target.value;

  formData[name] = value;

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
  const savedData = localStorage.getItem('feedback-form-state')
    ? JSON.parse(localStorage.getItem('feedback-form-state'))
    : {};
  if (savedData.email) {
    emailEl.value = savedData.email;
  }
  if (savedData.message) {
    messageEl.value = savedData.message;
  }
}

// function checkLocaleStorage() {
//   const lsData = localStorage.getItem('feedback-form-state');
//   if (lsData) {
//     const savedData = JSON.parse(lsData);
//     if (savedData.email) {
//       emailEl.value = savedData.email;
//     }
//     if (savedData.message) {
//       messageEl.value = savedData.message;
//     }
//   }
// }
