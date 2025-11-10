var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video = document.querySelector("#player1");

	// Initialize video settings
	video.autoplay = false;
	console.log("Auto play is set to false");
	video.loop = false;
	console.log("Looping is set to false");
	video.volume = 1.0;

	// Add event listeners for buttons
	document.querySelector("#play").addEventListener("click", playVideo);
	document.querySelector("#pause").addEventListener("click", pauseVideo);
	document.querySelector("#slower").addEventListener("click", slowDown);
	document.querySelector("#faster").addEventListener("click", speedUp);
	document.querySelector("#skip").addEventListener("click", skipAhead);
	document.querySelector("#mute").addEventListener("click", toggleMute);
	document.querySelector("#slider").addEventListener("input", changeVolume);
	document.querySelector("#vintage").addEventListener("click", addOldSchool);
	document.querySelector("#orig").addEventListener("click", removeOldSchool);
});
// Get the video element when page loads

// Play button
function playVideo() {
	video.play();
	console.log("Play Video");
	document.getElementById("volume").innerText = (video.volume * 100) + "%";
}

// Pause button
function pauseVideo() {
	video.pause();
	console.log("Pause Video");
}

// Slow down video by 10%
function slowDown() {
	video.playbackRate *= 0.9;
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate);
}

// Speed up video (reverse of slow down)
function speedUp() {
	video.playbackRate /= 0.9;
	console.log("Speed up Video");
	console.log("Speed is " + video.playbackRate);
}

// Skip ahead 10 seconds
function skipAhead() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Skip ahead");
	console.log("Video current time is " + video.currentTime);
}

// Mute / unmute the video
function toggleMute() {
	video.muted = !video.muted;
	document.getElementById("mute").innerText = video.muted ? "Unmute" : "Mute";
	console.log(video.muted ? "Mute" : "Unmute");
}

// Volume slider
function changeVolume() {
	const slider = document.getElementById("slider");
	video.volume = slider.value / 100;
	document.getElementById("volume").innerText = slider.value + "%";
	console.log("The current value is " + slider.value/100);
}

// Add old-school style
function addOldSchool() {
	video.classList.add("oldSchool");
}

// Remove old-school style
function removeOldSchool() {
	video.classList.remove("oldSchool");
}

