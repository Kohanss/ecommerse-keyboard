let subMenu = document.getElementById("subMenu");

document.querySelector(".toggle_btn").addEventListener("click", toggleMenu);

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

var slideIndex = 1;
timer = null;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
  clearTimeout(timer);
}
function currentSlide(n) {
  showSlides((slideIndex = n));
  clearTimeout(timer);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n == undefined) {
    n = ++slideIndex;
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  timer = setTimeout(showSlides, 4000);
}
