var hammenu = document.getElementById("hammenu");
var nav = document.getElementById("nav");
if ($(window).width() < 600) {
   hammenu.style.display = "inline-block";
   nav.style.display = "none";
}
else {
   hammenu.style.display = "none";
   nav.style.display = "inline-block";
}