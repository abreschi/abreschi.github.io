/******************
  NAVIGATION BAR 
*******************/

// Responsive navbar
$("nav .icon").click(function() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
});

// Add the class selected to the navbar item of the current page
var $navli = $("nav li");
$navli.children().each( function() {
	$(this).removeClass("selected");
	if ($(this).prop("href") === window.location.href) {
		$(this).addClass("selected");
	};
});
