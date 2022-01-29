/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navBar() {
    var responsive = document.getElementById("topNav");
    if (responsive.className === "topnav") {
        responsive.className += " responsive";
    } else {
        responsive.className = "topnav";
    }
}

/* Make nav background change colour on scroll */
$(window).on("scroll", function() {
	if($(window).scrollTop() > 50) {
		$(".topnav,h1.intro").addClass("active"); //adds the active class to topnav
	} else {
		//remove the background property so it becomes transparent again, defined in main.css
		$(".topnav,h1.intro").removeClass("active");
	}
});