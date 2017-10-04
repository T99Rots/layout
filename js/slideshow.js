// buttons hover animation speed
var ImageAnimationSpeed = "1s"

//starting image

var slideShow1ActiveImage = 0;

// looking if mouse is hovering over next and previous buttons

var leftButtons = document.getElementsByClassName("slideShowLeftButton");
var rightButtons = document.getElementsByClassName("slideShowRightButton");

for(i = 0; i < leftButtons.length; i++) {
	
	leftButtons[0].addEventListener("click", slideShow1Previous);
	
}
	
for(i = 0; i < rightButtons.length; i++) {
	
	rightButtons[0].addEventListener("click", slideShow1Next);
	
}


// listening for keybord input on the same page 

document.addEventListener("keydown", function() {
	
	if(activePage == 0) {
	
		if(event.keyCode == 39) slideShow1Next();
		if(event.keyCode == 37) slideShow1Previous();
	
	}
});	

// code for the actual slideshow

var slideShow1AnimationIsActive = false;

var slideShow1Images = document.getElementsByClassName("slideShow-1-Image");

function slideShow1Next() {

	if (!slideShow1AnimationIsActive) {

		slideShow1Images[slideShow1ActiveImage].style.animation = ("SlideShowLeftOut " + ImageAnimationSpeed + " ease-in-out forwards")

		if(slideShow1ActiveImage < slideShow1Images.length - 1) {
			slideShow1ActiveImage++;
		} else {
			slideShow1ActiveImage = 0;
		}

		slideShow1Images[slideShow1ActiveImage].style.animation = ("SlideShowRightIn " + ImageAnimationSpeed + " ease-in-out forwards")
		clearInterval(slideShowTimer);
		slideShowTimer = setInterval(slideShow1Next, 10000);		

	}

}

function slideShow1Previous() {

	if (!slideShow1AnimationIsActive) {

		slideShow1Images[slideShow1ActiveImage].style.animation = ("SlideShowRightOut " + ImageAnimationSpeed + " ease-in-out forwards")

		if(slideShow1ActiveImage > 0) {
			slideShow1ActiveImage--;
		} else {
			slideShow1ActiveImage = (slideShow1Images.length - 1);
		}

		slideShow1Images[slideShow1ActiveImage].style.animation = ("SlideShowLeftIn " + ImageAnimationSpeed + " ease-in-out forwards")
		clearInterval(slideShowTimer);
		slideShowTimer = setInterval(slideShow1Next, 10000);	

	}

}

for(i = 0; i < slideShow1Images.length; i++) {

	slideShow1Images[i].addEventListener("animationstart", function(){
		slideShow1AnimationIsActive = true;
	});

	slideShow1Images[i].addEventListener("animationend", function(){
		slideShow1AnimationIsActive = false;
	});

}

slideShowTimer = setInterval(slideShow1Next, 10000);	