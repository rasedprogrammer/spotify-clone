
let songIndex = 0;
let audioElement = new Audio('songs/O Yaara Dil Lagana.mp3');
let myProgressBar = document.getElementById('myProgressBar');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [

    {songName: "O Yaara Dil Lagana", 
    filePath: "songs/O Yaara Dil Lagana.mp3", 
    coverPath: "covers/01.jpg"},
    {songName: "Aashiqui Aa Gayi", 
    filePath: "songs/Aashiqui Aa Gayi.mp3", 
    coverPath: "covers/02.jpg"},
    {songName: "Najaa Sooryavanshi", 
    filePath: "songs/Najaa Sooryavanshi.mp3", 
    coverPath: "covers/03.jpg"},
    {songName: "Tip Tip Sooryavanshi", 
    filePath: "songs/Tip Tip Sooryavanshi.mp3", 
    coverPath: "covers/04.jpg"},
    {songName: "Sakhiyan 2 Bell Bottom", 
    filePath: "songs/Sakhiyan 2 Bell Bottom.mp3", 
    coverPath: "covers/05.jpg"},
    {songName: "Lagdi Lahore Di Street Dancer 3d", 
    filePath: "songs/Lagdi Lahore Di Street Dancer 3d.mp3", 
    coverPath: "covers/06.jpg"},
]

songItem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
// audioElement.play();
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    //seekbar Progress
    progess = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progess;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
