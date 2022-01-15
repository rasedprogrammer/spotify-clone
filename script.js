
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let myProgressBar = document.getElementById('myProgressBar');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let next = document.getElementById('next');
let previous = document.getElementById('previous');


let songs = [

    {songName: "O Yaara Dil Lagana", 
    filePath: "songs/1.mp3", 
    coverPath: "covers/01.jpg"},
    {songName: "Aashiqui Aa Gayi", 
    filePath: "songs/2.mp3", 
    coverPath: "covers/02.jpg"},
    {songName: "Najaa Sooryavanshi", 
    filePath: "songs/3.mp3", 
    coverPath: "covers/03.jpg"},
    {songName: "Tip Tip Sooryavanshi", 
    filePath: "songs/4.mp3", 
    coverPath: "covers/04.jpg"},
    {songName: "Sakhiyan 2 Bell Bottom", 
    filePath: "songs/5.mp3", 
    coverPath: "covers/05.jpg"},
    {songName: "Lagdi Lahore Di Street Dancer 3d", 
    filePath: "songs/5.mp3", 
    coverPath: "covers/06.jpg"},
]

songItem.forEach((element, i) => {
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

const makeAllPlay = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

songItemPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
    })
})

next.addEventListener('click', () => {
    if(songIndex>=9){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

previous.addEventListener('click', () => {
    if(songIndex<=0){
        songIndex = 0;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})