console.log('connected to html');

const btn = document.querySelector('.hamburgerMenu')
const mobileMenu = document.querySelector('.mobileSubPages')
const mobileSubPages = document.querySelectorAll('.subPage')
const currentSection = document.querySelector('.mobileSubPages')
const arrowToNextSection = document.querySelector('.arrowsToDown')
const upBtn = document.querySelector('.upArrow')

const removeBgCheckbox = document.querySelector('#transparentBg')
const naturalShadowCheckbox = document.querySelector('#naturalShadow')
const mirroringCheckbox = document.querySelector('#mirroring')

const solidColors = document.querySelectorAll('.color')
const rgbColorInput = document.querySelector('#chooseBgProductColor')

const customCursor = document.querySelector('.cursor')

const subPages = document.querySelectorAll('.subPage')
const homeLogo = document.querySelector('#logoBack')

const firstTitle = document.querySelector('.firstTitle')
const firstSectionDesc = document.querySelector('.firstSectionDesc')
const arrowsToDown = document.querySelector('.arrowsToDown')

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



console.log(window);
window.addEventListener('scroll', ()=>{
    let heightPosition = scrollY 
    if (heightPosition>0){
        upBtn.classList.add('activeUp')
    }else{
        upBtn.classList.remove('activeUp')
    }
    // console.log(heightPosition);
})

window.addEventListener('mousemove', (e)=>{
    let x = e.clientX
    let y = e.clientY
    customCursor.style.top = y + 'px'
    customCursor.style.left = x + 'px'
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



upBtn.addEventListener('click', ()=>{
    let home = document.querySelector('#config_first_section')
    home.scrollIntoView({behavior: 'smooth'})
})


subPages.forEach(subPage => {
    subPage.addEventListener('mouseenter', () =>{
        customCursor.style.transform = `scale(6)`
    })
    subPage.addEventListener('mouseleave', () =>{
        customCursor.style.transform = `scale(1)`
    })
})

homeLogo.addEventListener('mouseenter', () =>{
        customCursor.style.transform = `scale(6)`
    })
homeLogo.addEventListener('mouseleave', () =>{
    customCursor.style.transform = `scale(1)`
    })


    removeBgCheckbox.addEventListener('change', () =>{
        let transparentBgImg = document.querySelector('.transparentBg')
        if(removeBgCheckbox.checked) {
            transparentBgImg.style.opacity = 1
        }else {
            transparentBgImg.style.opacity = 0
        }
    })
    naturalShadowCheckbox.addEventListener('change', ()=>{
        let naturalShadowImg = document.querySelector('.shadow')
        if(naturalShadowCheckbox.checked){
            naturalShadowImg.style.opacity = 1
        }else{
            naturalShadowImg.style.opacity = 0
        }
    })
    mirroringCheckbox.addEventListener('change', ()=>{
        let mirroringImg = document.querySelector('.mirroring')
        if(mirroringCheckbox.checked){
            mirroringImg.style.opacity = 1
        }else{
            mirroringImg.style.opacity = 0
        }
    })

solidColors.forEach(solidColor => {
    solidColor.addEventListener('click', ()=>{
        let bgToChange = document.querySelector('.productImg')
        let solidColorBox = window.getComputedStyle(solidColor)
        let getSolidColorBox = solidColorBox.backgroundColor;
        bgToChange.style.backgroundColor = getSolidColorBox
        // console.log(bgToChange);
    })
})

rgbColorInput.addEventListener('input', ()=>{
    let bgToChange = document.querySelector('.productImg')
    let getInputColor = rgbColorInput.value
    
    bgToChange.style.backgroundColor = getInputColor
})