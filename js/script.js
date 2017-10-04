document.getElementById("container").addEventListener("scroll", repositionBackground);
window.addEventListener("resize", repositionBackground);
window.addEventListener("resize", resizeBackground);

function resizeBackground() {

	if (((window.innerHeight+200)*backgroundRatio) > window.innerWidth) {

		document.getElementById("body").style.backgroundSize = (((window.innerHeight+201)*backgroundRatio) + "px");
		
	} else {

		document.getElementById("body").style.backgroundSize = (window.innerWidth + "px");

	}

} 

var img = new Image();
var backgroundRatio;
img.onload = function() {

	backgroundRatio = (this.width / this.height);

}
img.src = 'img/road8.jpg';

function repositionBackground() {
	
	document.getElementById("body").style.backgroundPosition = ("50% " + -(document.getElementById("container").scrollTop/(document.getElementById("container").scrollHeight-document.getElementById("container").clientHeight)*200) + "px");
	document.getElementById("advertention").style.top = (document.getElementById("container").scrollTop + "px");
	
}

window.onload = function() {
	resizeBackground();
}

repositionBackground();

function initMap() {
	var uluru = {lat: 51.7990107, lng: 4.6833559};
	var map = new google.maps.Map(document.getElementById('googleMaps'), {
	  zoom: 10,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
  }