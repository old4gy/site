﻿function setBackground(){
	var background_count = 6;
	var background_number = Math.floor((Math.random() * background_count) + 1);
	var bg = "swamp"+background_number;
	changeBackground(bg);
	//loadTimeOut();
}
function changeBackground(image){
	document.getElementsByClassName('body_class0')[0].style.backgroundImage="url(style/images/"+image+".png)";
}
function loadTimeOut(){
	setTimeout ('document.body.style.visibility = \'visible\'', 100);
}
