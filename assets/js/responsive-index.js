var responsiveicons = document.getElementById("responsiveicons");
var responsivemap = document.getElementById("responsivemap");
var responsivearea = document.getElementById("responsivearea");
if ($(window).width() < 600) {
	responsiveicons.style.height = "auto";
	responsivemap.style.height = "auto";
	responsivearea.style.height = "auto";
	responsiveicons.style.width = "100%";
	responsivemap.style.width = "100%";
	responsivearea.style.width = "100%";
}