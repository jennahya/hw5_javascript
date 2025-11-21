var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");

  video = document.querySelector("#player1");

  video.autoplay = false;
  video.loop = false;

  let slider = document.querySelector("#slider");
  video.volume = slider.value / 100;
  updateVolumeDisplay();

  document.querySelector("#play").addEventListener("click", function () {
    video.play();
    updateVolumeDisplay();
  });

  document.querySelector("#pause").addEventListener("click", function () {
    video.pause();
  });

  document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate = video.playbackRate * 0.9;
    console.log("New speed is: " + video.playbackRate);
  });

  document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate = video.playbackRate / 0.9;
    console.log("New speed is: " + video.playbackRate);
  });

  document.querySelector("#skip").addEventListener("click", function () {
    if (video.currentTime + 10 >= video.duration) {
      video.currentTime = 0;
    } else {
      video.currentTime = video.currentTime + 10;
    }
    console.log("Current location is: " + video.currentTime);
  });

  document.querySelector("#mute").addEventListener("click", function () {
    if (video.muted) {
      video.muted = false;
      this.textContent = "Mute";
    } else {
      video.muted = true;
      this.textContent = "Unmute";
    }
  });

  document.querySelector("#slider").addEventListener("input", function () {
    video.volume = this.value / 100;
    updateVolumeDisplay();
  });

  document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
  });

  document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
  });
});

function updateVolumeDisplay() {
  var volPercent = Math.round(video.volume * 100);
  document.querySelector("#volume").textContent = volPercent + "%";
}



