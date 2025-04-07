const video = document.getElementById("videoPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const seekBar = document.getElementById("seekBar");
const currentTimeLabel = document.getElementById("currentTime");
const durationLabel = document.getElementById("duration");
const muteBtn = document.getElementById("muteBtn");
const volumeBar = document.getElementById("volumeBar");
const fullscreenBtn = document.getElementById("fullscreenBtn");

playPauseBtn.onclick = () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

video.onplay = () => {
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
};

video.onpause = () => {
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
};

video.ontimeupdate = () => {
    seekBar.value = video.currentTime;
    currentTimeLabel.textContent = formatTime(video.currentTime);
};

video.onloadedmetadata = () => {
    seekBar.max = video.duration;
    durationLabel.textContent = formatTime(video.duration);
};

seekBar.oninput = () => {
    video.currentTime = seekBar.value;
};

muteBtn.onclick = () => {
    video.muted = !video.muted;
    muteBtn.innerHTML = video.muted
        ? '<i class="fas fa-volume-mute"></i>'
        : '<i class="fas fa-volume-up"></i>';
};

volumeBar.oninput = () => {
    video.volume = volumeBar.value;
};

fullscreenBtn.onclick = () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
};

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}
