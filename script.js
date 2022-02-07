function cycleImage(){
	delayInSeconds = 1;
	var rotator = document.getElementById('rotator');
	var imageDir = "images/";

	var images = ["old_man_1", "old_man_2"];

	var num = 0;
	var changeImage = function () {
		rotator.src = imageDir + images[num++] + ".jpg";
		if (num == images.length){
			num = 0;
		}
	};
	setInterval(changeImage, delayInSeconds * 1000);
}


window.onload=function(){
	cycleImage();
	document.getElementById('rotator').src = ["images/old_man_1.jpg"];
}