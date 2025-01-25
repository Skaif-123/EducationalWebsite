// responsive menu toggle
const menuToggle=document.querySelector('#menu-toggle')
const navLinks=document.querySelector('.nav-links')


if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
} else {
    console.error('Menu toggle or nav links not found in the document.');
}

const form= document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    alert('Thank You For Contacting Us');
    form.reset();
});