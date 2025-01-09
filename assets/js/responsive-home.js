var homedescription = document.getElementsByClassName("leftc");
var homepics = document.getElementsByClassName("imageflex2");
var images = document.getElementsByClassName("example-image-link");
if ($(window).width() < 600) {
	for (var i = 0; i<homedescription.length; i++) {
		homedescription[i].style.width = "100%";
		homedescription[i].style.margin = "0 0 5em 0";
		homepics[i].style.width = "100%";
	}
	for (var i = 0; i<images.length; i++) {
		images[i].style.width = "100%";
	}
}