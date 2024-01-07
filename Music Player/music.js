let progress = document.getElementById('progress');
let song = document.getElementById('song');
let CrtlIcon = document.getElementById('CtrlIcon');

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
} 
function playPause(){
    if(CrtlIcon.classList.contains("fa-pause")){
        song.pause();
        CrtlIcon.classList.remove("fa-pause");
        CrtlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        CrtlIcon.classList.add("fa-pause");
        CrtlIcon.classList.remove("fa-play");
    }
}

if (song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value; 
    CrtlIcon.classList.add("fa-pause");
    CrtlIcon.classList.remove("fa-play");
}