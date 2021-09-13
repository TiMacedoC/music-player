let currentMusic = 0;
var isPlaying = false;


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
const playList = document.querySelector('.song-list');

// Play button
function playPause() {
    playButton.classList.toggle("pause");
    diskImage.classList.toggle("pause");

    playingCheck() ? music.pause() : music.play();
}

function playingCheck() {

    music.onplaying = () => {
        isPlaying = true;
    }
    music.onpause = () => {
        isPlaying = false;
    }
    return isPlaying;
}


//Set music
function setMusic(musicIndex) {
    seekBar.value = 0;
    let song = songs[musicIndex];
    currentMusic = musicIndex;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    diskImage.style.backgroundImage = `url('${song.cover}')`

    currentTime.innerHTML = '00:00'

    playingCheck() ? music.play() : music.pause();

    setTimeout(() => {
        seekBar.max = music.duration;
        songDuration.innerHTML = formatTime(music.duration);
    }, 200);
}

setMusic(0)

// Seek Bar
setInterval(() => {
    currentTime.innerHTML = formatTime(music.currentTime);
    seekBar.value = music.currentTime;
}, 500);

seekBar.addEventListener('input', () => {
    music.currentTime = seekBar.value;
})

// Next and previous song
backwardBtn.addEventListener('click', () => {
    currentMusic == 0 ? setMusic(songs.length - 1) : setMusic(currentMusic - 1);
    playingCheck() ? music.play() : music.pause();

});

forwardBtn.addEventListener('click', () => {
    currentMusic == (songs.length - 1) ? setMusic(0) : setMusic(currentMusic + 1);
    playingCheck() ? music.play() : music.pause();

});

//Auto next
setInterval(function autoNext() {
    if (music.currentTime >= (music.duration - 0.9)) {
        console.log("acabou", music.currentTime, music.duration)
        forwardBtn.click()
    }
}, 500);

// Include media keys control
navigator.mediaSession.setActionHandler('play', function () { playButton.click() });
navigator.mediaSession.setActionHandler('pause', function () { playButton.click() });
navigator.mediaSession.setActionHandler('previoustrack', function () { backwardBtn.click() });
navigator.mediaSession.setActionHandler('nexttrack', function () { forwardBtn.click() });


// Format Time
function formatTime(time) {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`;
    }

    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return (`${min}:${sec}`);
}



function selectFromList(i) {
    setMusic(i);
    music.play();

    //Sempre mostrar a animação de musica tocando
    playButton.classList.remove("pause");
    diskImage.classList.remove("pause");

    closeNavbar();
}

//Monta a PlayList
for (i in songs) {
    playList.insertAdjacentHTML(
        'beforeend',
        `
         <li onclick="selectFromList(${i})">
            <img class="song-cover" src="${songs[i].cover}" alt="Song Cover">
            <h2 class="song-title">${songs[i].name}</h2>
         </li>
         `);
}

