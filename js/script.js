// var myNav = document.querySelector('.head');
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
//         myNav.classList.add("nav-colored");
//         myNav.classList.remove("nav-transparent");
//     } 
//     else {
//         myNav.classList.add("nav-transparent");
//         myNav.classList.remove("nav-colored");
//     }
// };
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
function autoslides(){
    nextSlide();
}
let timer = setInterval(autoslides,3000);


let nav = document.querySelector('.head');
window.onscroll = function(){
    "use strict";
    if(document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50){
        nav.classList.add('nav-colored');
    }
    else{
        nav.classList.remove('nav-colored');
        nav.classList.add('nav-transparent');
    }
}

const navtoggler = document.querySelector('.nav__toggle');
const navmenu = document.querySelector('.nav__menu');

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
const navlink = document.querySelector('.nav__item');
navmenu.addEventListener('click',()=>{
    navmenu.classList.toggle('displayit');
})