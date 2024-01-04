console.log('connected to html');
const btn = document.querySelector('.hamburgerMenu')
const mobileMenu = document.querySelector('.mobileSubPages')
const sections = document.querySelectorAll('.nonDisplayWhenHamburger')
console.log(mobileMenu.innerHTMLileMenu);

window.addEventListener('DOMContentLoaded', ()=>{
    btn.classList.remove('toggleMenu')
    mobileMenu.classList.remove('openMenu')
})

btn.addEventListener('click', () =>{
    btn.classList.toggle('toggleMenu')
    mobileMenu.classList.toggle('openMenu')
    sections.forEach(section => {
        section.style.display = 'none';
    })
});