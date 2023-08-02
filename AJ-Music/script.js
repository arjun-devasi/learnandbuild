console.log("hii");
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let MasterPlay = document.getElementById("masterPlay");
let Bar = document.getElementById("rangeBar");
let songItem = Array.from(document.getElementsByClassName("list"));
let songs = [
  {
    songeNmae: "songNo-1 mp3",
    filePath: "./songs/1.mp3",
    coverPath: "./cover/1.jpg",
  },
  {
    songeNmae: "songNo-2 mp3",
    filePath: "./songs/2.mp3",
    coverPath: "./cover/2.jpg",
  },
  {
    songeNmae: "songNo-3 mp3",
    filePath: "./songs/3.mp3",
    coverPath: "./cover/3.jpg",
  },
  {
    songeNmae: "songNo-4 mp3",
    filePath: "./songs/4.mp3",
    coverPath: "./cover/4.jpg",
  },
  {
    songeNmae: "songNo-5 mp3",
    filePath: "./songs/5.mp3",
    coverPath: "./cover/5.jpg",
  },
  {
    songeNmae: "songNo-6 mp3",
    filePath: "./songs/6.mp3",
    coverPath: "./cover/6.jpg",
  },
  {
    songeNmae: "songNo-7 mp3",
    filePath: "./songs/7.mp3",
    coverPath: "./cover/7.jpg",
  },
  {
    songeNmae: "songNo-8 mp3",
    filePath: "./songs/8.mp3",
    coverPath: "./cover/8.jpg",
  },
  {
    songeNmae: "songNo-9 mp3",
    filePath: "./songs/9.mp3",
    coverPath: "./cover/9.jpg",
  },
  {
    songeNmae: "songNo-10 mp3",
    filePath: "./songs/10.mp3",
    coverPath: "./cover/10.jpg",
  },
];
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("SongBtn")).forEach((element) => {
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  });
};
// console.log(songPlayBtn);
songItem.forEach((element, i) => {
  // console.log(i);
  element.getElementsByClassName("coverImg")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songeNmae;
});
// event listner
MasterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    MasterPlay.classList.remove("fa-play-circle");
    MasterPlay.classList.add("fa-pause-circle");
    updateListIcon();
  } else {
    makeAllPlays();
    audioElement.pause();
    MasterPlay.classList.remove("fa-pause-circle");
    MasterPlay.classList.add("fa-play-circle");
  }
});
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // console.log(progress)
  Bar.value = progress;
});
Bar.addEventListener("change", () => {
  audioElement.currentTime = (Bar.value * audioElement.duration) / 100;
});

Array.from(document.getElementsByClassName("SongBtn")).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlays();
    const clickedSongIndex = parseInt(e.target.id);
    if (clickedSongIndex === songIndex) {
      // Clicked on the currently playing song, toggle between play and pause
      if (audioElement.paused) {
        audioElement.play();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        MasterPlay.classList.remove("fa-play-circle");
        MasterPlay.classList.add("fa-pause-circle");
      } else {
        audioElement.pause();
        e.target.classList.remove("fa-pause-circle");
        e.target.classList.add("fa-play-circle");
        MasterPlay.classList.remove("fa-pause-circle");
        MasterPlay.classList.add("fa-play-circle");
      }
    } else {
      // Clicked on a different song, play it
      songIndex = clickedSongIndex;
      audioElement.src = songs[songIndex].filePath;
      updateListIcon();
      audioElement.currentTime = 0;
      audioElement.play();
      MasterPlay.classList.remove("fa-play-circle");
      MasterPlay.classList.add("fa-pause-circle");
    }
  });
});

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  //   masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  updateListIcon();
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }

  audioElement.src = `songs/${songIndex + 1}.mp3`;
  updateListIcon();
  //   masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
function updateListIcon() {
  makeAllPlays();
  const songBtn = document.getElementById(songIndex.toString());
  if (songBtn) {
    songBtn.classList.remove("fa-play-circle");
    songBtn.classList.add("fa-pause-circle");
  }
}
