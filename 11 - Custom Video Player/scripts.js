const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const volume = player.querySelector(".volume");
const progress = player.querySelector(".progress");
const progressSoFar = player.querySelector(".progress__filled");
const playButton = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  video[(video.paused) ? video.play() : video.pause()];
}

function bigScreen() {
  this.style.width = "100%";
  this.style.maxWidth = "100%";
}

function skip() {
  video.currentTime = parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  const name = this.name;
  const newVal = this.value;

  video[name] = newVal;
}

function updateButton() {
  playButton.innerHTML = (!video.paused) ? "▌▌" : "►";
}

function updateProgress() {
  const percent = ((video.currentTime)/(video.duration)) * 100;

  progressSoFar.style.flexBasis = `${percent}%`;
}

function scrub(event) {
  const newTime = (event.offsetX/(progress.offsetWidth)) * video.duration;

  video.currentTime = newTime;
}

player.addEventListener('dblclick', bigScreen);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
progress.addEventListener("click", scrub);
video.addEventListener('timeupdate', updateProgress);
playButton.addEventListener('click', togglePlay);