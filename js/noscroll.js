var noScrollPages = document.getElementsByClassName("noScrollPage");
var animationActiveOnPages = false;

//page switching animation speed
var animationSpeed = "500ms";

//starting page
var activePage = 0;


//page down function
function pageDown() {

	if(activePage < noScrollPages.length - 1 && !animationActiveOnPages) {

	if((document.getElementById("container").scrollHeight - document.getElementById("container").clientHeight != document.getElementById("container").scrollTop) && activePage == 1) return;

		if(activePage == 0) {
			document.getElementById("title").style.animation = ("titleSmall " + animationSpeed + " ease-in-out forwards");
			document.getElementById("backgroundOverlay").style.animation = ("backgroundImage " + animationSpeed + " ease-in-out forwards");	
		}

		if(activePage == 1) {
			document.getElementById("backgroundOverlay").style.animation = ("backgroundGray " + animationSpeed + " ease-in-out forwards");	
		}
		
		noScrollPages[activePage].style.animation = ("pageUpOut " + animationSpeed + " ease-in-out forwards");
		activePage++;
		noScrollPages[activePage].style.animation = ("pageUpIn " + animationSpeed + " ease-in-out forwards");

	}
	
}

//page up function
function pageUp() {
	
	if(document.getElementById("container").scrollTop != 0 && activePage == 1) return;

	if(activePage > 0 && !animationActiveOnPages) {

		if(activePage == 1) {
			document.getElementById("title").style.animation = ("titleBig " + animationSpeed + " ease-in-out forwards");
			document.getElementById("backgroundOverlay").style.animation = ("backgroundWhite " + animationSpeed + " ease-in-out forwards");
		}

		if(activePage == 2 && !animationActiveOnPages) {

			document.getElementById("backgroundOverlay").style.animation = ("backgroundImageFromGray " + animationSpeed + " ease-in-out forwards");

		}

		noScrollPages[activePage].style.animation = ("pageDownOut " + animationSpeed + " ease-in-out forwards");
		activePage--;
		noScrollPages[activePage].style.animation = ("pageDownIn " + animationSpeed + " ease-in-out forwards");

	}

}

//listening for keybord input
document.addEventListener("keydown", function() {

	if(event.keyCode == 33 || event.keyCode == 36 || event.keyCode == 38) pageUp();
	if(event.keyCode == 34 || event.keyCode == 35 || event.keyCode == 40) pageDown();

});

//listening for scroll input
document.addEventListener("wheel", function(){

	 if(event.deltaY != 0) if(event.deltaY > 0) {
		pageDown();			
	} else {
		pageUp();
	}

	if(event.deltaX != 0 && activePage == 0) if(event.deltaX > 0) {
		slideShow1Previous();			
		slideShow1AnimationIsActive = true;
	} else {
		slideShow1Next();
		slideShow1AnimationIsActive = true;
	}

});

//listening for animations starting and ending

for(i = 0; i < noScrollPages.length - 1; i++) {

	noScrollPages[i].addEventListener("animationstart", function(){
		if(event.target.className == "noScrollPage") animationActiveOnPages = true;
	});

	noScrollPages[i].addEventListener("animationend", function(){
		if(event.target.className == "noScrollPage")  animationActiveOnPages = false;
	});

}

//listening for the mouse hovering over page down button(s) 

var pageDownButtons = document.getElementsByClassName("PageDownButton");

for(i = 0; i < pageDownButtons.length; i++) {

	pageDownButtons[i].addEventListener("click", function(){

		pageDown();

	});

}