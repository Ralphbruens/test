var slideIndex2 = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
  setTimeout(showSlides2, 9010); // Change image every 2 seconds
}

