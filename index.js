// template_q39byrs
// service_coaksme 
// bhUr8uq6lLF4dpzuV

function contact(event) {
  event.preventDefault();
  //emailjs
  //.sendForm(
  //  'service_coaksme',
    //'template_q39byrs',
    //event.target,
 //'bhUr8uq6lLF4dpzuV'
  //).then(() => {
   // console.log('this worded1')
  //})
const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success') 
loading.classList += " modal__overlay--visible"
setTimeout(() => {
  console.log('it worked 1')
   }, 1000); 
}