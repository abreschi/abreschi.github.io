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

/******************
  SKILL BARS
*******************/

// List of skills with labels and scores
var skills = {
  html : {"label": "HTML & CSS", "score": 0.8},
  js : {"label": "JavaScript", "score": 0.3},
};

// Iterate over skills and add bars
var skillBarTotalWidth = 200;
for (var el in skills) {
  // Define score wrt total bar width
  var skillBarWidth = skills[el].score * skillBarTotalWidth;
  // Create internal bar --> represent the score of the skill
  var $skillBarSpan = $('<span></span>').addClass('skillBar').css("width", skillBarWidth+"px");
  // Create background bar for skill and append the score bar
  var $skillBar100Span = $('<span></span>').addClass('skillBar100').append($skillBarSpan);
  // Create the skill label
  var $skillLabel = $('<label></label>').text(skills[el].label);
  // Append all the previous elements to the skills ul
  $('#skills-body ul').append($('<li></li>').append($skillLabel).append($skillBar100Span));
};
