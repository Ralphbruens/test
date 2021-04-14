var slideIndex3 = 0;
showSlides3();

function showSlides3() {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";  
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) {slideIndex3 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
  setTimeout(showSlides3, 11104); // Change image every 2 seconds
}

