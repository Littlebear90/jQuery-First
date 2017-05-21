var main = function(){
	$("#catch-button").click("catch", animateButton);
	$("#dont-button").mouseenter("dont", animateButton);
}
var animateButton = function(button){
	if (button.data == "catch"){
		var button = $("#catch-button");
	}
	else if (button.data == "dont"){
		var button = $("#dont-button");
	}
	button.animate({
		left:Math.random()*500
	},{ duration: 200, queue: false });
	button.animate({
		top:Math.random()*500
	},{ duration: 200, queue: false });	
};
$(document).ready(main);