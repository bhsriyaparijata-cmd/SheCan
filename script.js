// Slideshow

let slideIndex = 0;
showSlides();

function showSlides(){

  let slides = document.getElementsByClassName("slides");

  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  slideIndex++;

  if(slideIndex > slides.length){
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides,3000);
}


// Changing Text

const texts = [
  "She Can Learn",
  "She Can Lead",
  "She Can Inspire",
  "She Can Create Change"
];

let textIndex = 0;

const changingText = document.getElementById("changing-text");

setInterval(() => {

  textIndex++;

  if(textIndex >= texts.length){
    textIndex = 0;
  }

  changingText.textContent = texts[textIndex];

},2000);