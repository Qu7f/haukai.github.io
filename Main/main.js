const togglebutton = document.querySelector('.navbar_togglebutton');
const menu = document.querySelector('.navbar_menu');

togglebutton.addEventListener('click',()=> {
    menu.classList.toggle('active');
});