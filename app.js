// The main function controls the events of the buttons
var main = function(){
	$("#catch-button").click("catch", animateButton);
	$("#dont-button").mouseenter("dont", animateButton);
}

// The animateButton function determines the button
//  that had its event triggered and then does the
//  animation on the button
var animateButton = function(button){
	if (button.data == "catch"){
		var button = $("#catch-button");
	}
	else if (button.data == "dont"){
		var button = $("#dont-button");
	}
	button.animate({
		left:Math.random()*500 //the distance drawn is determined here
	},{ duration: 200, queue: false });
	button.animate({
		top:Math.random()*500 //the distance drawn is determined here
	},{ duration: 200, queue: false });	
};
$(document).ready(main);