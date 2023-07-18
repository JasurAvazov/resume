export function init() {
	// var cursor = document.querySelector(".custom-cursor");
	// var secondCursor = document.querySelector(".custom-second-cursor");

	// document.addEventListener("mousemove", function (event) {
	// 	cursor.style.left = event.clientX + "px";
	// 	cursor.style.top = event.clientY + "px";
	// 	secondCursor.style.left = event.clientX + "px";
	// 	secondCursor.style.top = event.clientY + "px";
	// });
	var cursor = document.querySelector(".custom-cursor");
	var secondCursor = document.querySelector(".custom-second-cursor");

	var lag = 100; // Lag duration in milliseconds
	var mouseX = 0;
	var mouseY = 0;
	var lagX = 0;
	var lagY = 0;

	document.addEventListener("mousemove", function (event) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	});

	function updateCursor() {
		lagX += (mouseX - lagX) / 10;
		lagY += (mouseY - lagY) / 10;

		cursor.style.left = mouseX + "px";
		cursor.style.top = mouseY + "px";
		secondCursor.style.left = lagX + "px";
		secondCursor.style.top = lagY + "px";

		requestAnimationFrame(updateCursor);
	}

	updateCursor();
}
