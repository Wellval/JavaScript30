// Get elements

const player = document.querySelector('.player'),
      video = document.querySelector('.viewer'),
      progress = document.querySelector('.progress'),
      progressBar = document.querySelector('.progress__filled'),
      toggle = document.querySelector('.toggle'),
      skipButtons = document.querySelectorAll('[data-skip]'),
      ranges = document.querySelectorAll('.player__slider'),
      fullscreen = document.querySelector('.fullscreen');

let mouseDown = false;
// write functions

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function togglePlayButton() {
    let icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate() {
    if (!mouseDown) return;
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    if (!mouseDown) return;
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function openFullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
}

// hook up event listeners

video.addEventListener('timeupdate', handleProgress);
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', togglePlayButton);
video.addEventListener('pause', togglePlayButton);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', rangeUpdate));
ranges.forEach(range => range.addEventListener('mousedown', (e) => {
    mouseDown = true;
}));
ranges.forEach(range => range.addEventListener('mouseup', (e) => {
    mouseDown = false;
}));
ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate));
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', scrub);
progress.addEventListener('mousedown', (e) => {
    mouseDown = true;
});
progress.addEventListener('mouseup', (e) => {
    mouseDown = false;
});
fullscreen.addEventListener('click', openFullscreen);
