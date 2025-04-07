const urlParams = new URLSearchParams(window.location.search);
const show = urlParams.get('show');
document.getElementById("showTitle").textContent = show?.replace(/(^|\s)\S/g, l => l.toUpperCase()) || "Show";

const totalSeasons = 3; // You can make this dynamic
const seasonButtons = document.getElementById("season-buttons");
const episodeGrid = document.getElementById("episode-grid");

for (let i = 1; i <= totalSeasons; i++) {
    const btn = document.createElement("button");
    btn.textContent = "Season " + i;
    btn.onclick = () => loadSeason(i);
    seasonButtons.appendChild(btn);
}

function loadSeason(seasonNum) {
    episodeGrid.innerHTML = "";
    document.getElementById("player-section").style.display = "none";

    for (let i = 1; i <= 12; i++) { // Assume 12 episodes per season
        const epBtn = document.createElement("button");
        epBtn.textContent = "Episode " + i;
        epBtn.onclick = () => playEpisode(seasonNum, i);
        episodeGrid.appendChild(epBtn);
    }
}

function playEpisode(season, episode) {
    const videoPath = `${show}/season${season}/episode${episode}.mp4`;
    const video = document.getElementById("videoPlayer");
    video.src = videoPath;
    video.load();
    video.play();
    document.getElementById("player-section").style.display = "block";

    const episodeList = document.getElementById("episode-list-below");
    episodeList.innerHTML = "";
    for (let i = 1; i <= 12; i++) {
        const epBtn = document.createElement("button");
        epBtn.textContent = "Episode " + i;
        epBtn.onclick = () => playEpisode(season, i);
        episodeList.appendChild(epBtn);
    }
}
