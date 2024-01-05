console.log('connected to html');
const btn = document.querySelector('.hamburgerMenu')
const mobileMenu = document.querySelector('.mobileSubPages')
const mobileSubPages = document.querySelectorAll('.subPage')
console.log(mobileMenu.innerHTMLileMenu);

window.addEventListener('DOMContentLoaded', ()=>{
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