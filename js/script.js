
const slides = document.querySelector('.slider').children;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const indicator = document.querySelector('.indicator');
let index = 0;


next.addEventListener('click', ()=>{
    nextSlide();
});
prev.addEventListener('click', ()=>{
    prevSlide();
});
function nextSlide(){
    if(index == slides.length - 1){
        index=0;
    }
    else{
        index++;
    }
    changeCircle();
}
function prevSlide(){
    if(index == 0){
        index=slides.length - 1;
    }
    else{
        index--;
    }
    changeCircle();
}
function changeCircle(){
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}
const navilink = document.querySelectorAll('.nav__link');
const navmenu = document.querySelector('.nav__menu');
function linkAction(){
    navilink.forEach(n =>n.classList.remove('active'))
    this.classList.add('active')
    navmenu.classList.remove('displayit');
}
navilink.forEach(n => n.addEventListener('click',linkAction))
function autoslides(){
    nextSlide();
}
let timer = setInterval(autoslides,3000);




const navtoggler = document.querySelector('.nav__toggle');


navtoggler.addEventListener('click',()=>{
    navmenu.classList.toggle('displayit');
});
const slider1 = document.querySelector('.slider1').children;
const next1 = document.querySelector('.next1');
const prev1 = document.querySelector('.prev1');
console.log(slider1);
console.log(slides);
let index1 =0;

next1.addEventListener('click',()=>{
    next1Slide();
});
prev1.addEventListener('click',()=>{
    prev1Slide();
});

function next1Slide(){
    if(index1 == slider1.length -1){
        index1 =0;
    }
    else{
        index1 ++;
    }
    changeCircle1();
}
function prev1Slide(){
    if(index1 == 0){
        index1 = slider1.length -1;
    }
    else{
        index1 --;
    }
    changeCircle1();
}
function changeCircle1(){
    for(let i=0; i<slider1.length;i++){
        slider1[i].classList.remove('active');
    }
    slider1[index1].classList.add('active');
}
const navlink = document.querySelector('.nav__link');
navmenu.addEventListener('click',()=>{
    navmenu.classList.toggle('displayit');
})