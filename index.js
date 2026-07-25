// template_q39byrs
// service_coaksme 
// bhUr8uq6lLF4dpzuV

function contact(event) {
  event.preventDefault();
const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success') 
loading.classList += " modal__overlay--visible";
emailjs
  .sendForm(
  'service_coaksme',
  'template_q39byrs',
  event.target,
  'bhUr8uq6lLF4dpzuV'
 ).then(() => {
loading.classList.remove("modal__overlay--visible");
success.classList += " modal__overlay--visible";
 }).catch(() => {
  loading.classList.remove("modal__overlay--visible");
alert(
  "The email service is temporarily unavailable. Please contact me directly on nickap2301@gmail.com"
);
})
}