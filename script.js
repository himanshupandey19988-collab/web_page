let slideIndex = 1;
showSlides(slideIndex);
setInterval(() => {
slideIndex++;
showSlides(slideIndex);
},4000);

function currentSlide(n){
slideIndex=n;
showSlides(slideIndex);
}

function showSlides(n){
let slides=document.getElementsByClassName("slides");
let dots=document.getElementsByClassName("dot");

if(n>slides.length){slideIndex=1}
if(n<1){slideIndex=slides.length}

for(let i=0;i<slides.length;i++){
slides[i].style.display="none";
}

for(let i=0;i<dots.length;i++){
dots[i].classList.remove("active-dot");
}

slides[slideIndex-1].style.display="block";
dots[slideIndex-1].classList.add("active-dot");
}
