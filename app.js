console.log('connected to html');

const btn = document.querySelector('.hamburgerMenu')
const mobileMenu = document.querySelector('.mobileSubPages')
const mobileSubPages = document.querySelectorAll('.subPage')
const currentSection = document.querySelector('.mobileSubPages')
const arrowToNextSection = document.querySelector('.arrowsToDown')



window.addEventListener('DOMContentLoaded', ()=>{
    if (window.location.hash) {
        var targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    btn.classList.remove('toggleMenu')
    mobileMenu.classList.remove('openMenu')
    // mobileMenu.style.display = 'block';
})

btn.addEventListener('click', () =>{
    btn.classList.toggle('toggleMenu')
    mobileMenu.classList.toggle('openMenu')
    
});

mobileSubPages.forEach(subPage => {
    subPage.addEventListener('click', () =>{
        mobileMenu.classList.remove('openMenu')
        // mobileMenu.style.display = 'none';
        btn.classList.remove('toggleMenu')
    })
})

arrowToNextSection.addEventListener('click', ()=>{
    
    let nextSesction = currentSection.nextElementSibling
    nextSesction.scrollIntoView({behavior: 'smooth'})
})