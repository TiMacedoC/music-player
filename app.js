const playButton = document.querySelector('.play-btn');
const diskImage = document.querySelector('.disk')


playButton.addEventListener("click", function playPause() {
    playButton.classList.toggle("pause");

    diskImage.classList.toggle("pause");

});
