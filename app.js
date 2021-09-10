let currentMusic = 0;

const music = document.querySelector('#audio');

const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.artist-name');
const diskImage = document.querySelector('.disk');
const seekBar = document.querySelector('.seek-bar');
const currentTime = document.querySelector('.current-time');
const songDuration = document.querySelector('.song-duration');
const backwardBtn = document.querySelector('.previous-song');
const playButton = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.next-song');








playButton.addEventListener("click", function playPause() {
    playButton.classList.toggle("pause");

    diskImage.classList.toggle("pause");

});
