
$(document).ready(function() {
			var colors = ["#fb003b", "#3cff6a", "#FFFF00", "#6b03fc"];
			var rand = Math.floor(Math.random() * colors.length);
			$('.text').css("color", colors[rand]);
});

$(document).ready(function() {
	var colors = ["#fb003b", "#3cff6a", "#FFFF00", "#006aff"];
	var rand = Math.floor(Math.random() * colors.length);
	$('.ellipse').css("background-color", colors[rand]);
});

function myFunction() {
	var x = document.getElementById("dropdown");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
  }

