
let satukaliAlert = false;

document.getElementById("playbacksound").addEventListener("click", function (e) {
  e.preventDefault();

  if (!satukaliAlert) {
    alert("Klik 1x untuk play backsound, \ndan klik 1x lagi untuk stop backsound:D");
    satukaliAlert = true;
  }
});

const audio = new Audio("Assets/backsound.ogg");
audio.preload = "auto";
let isPlaying = false;

audio.load();

function onbacksound() { 
  document.getElementById("playbacksound").addEventListener("click", (e) => {
    e.preventDefault();
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    } else {
        audio.pause();
        audio.currentTime = 0; 
        isPlaying = false;
        location.reload();
    }
});
}

document.getElementById("reload").addEventListener("click", function () {
  location.reload();
});

document.getElementById("exit").addEventListener("click", function () {
  window.close(); // coba tutup tab
});

function home(){
    document.getElementById('selamat').innerHTML="Selamat Datang, Nama Mahasiswa Kelas SI-3X";
    document.getElementById('progres-kelas-content').style.backgroundColor="white";
    document.getElementById('aktifitas-selanjutnya-content').style.backgroundColor="white";
    document.getElementById('aside').style.backgroundColor="white";
    document.getElementById('lampiran-content').style.backgroundColor="white";
}

function mahasiswa () {
    document.getElementById('selamat').innerHTML="Selamat Datang, Dermawan Syahputra Gulo";
}

function kelas() {
    document.getElementById('selamat').innerHTML="Selamat Datang, Dermawan Syahputra Gulo Kelas SI-3D";
}

function aktifitas(){
    document.getElementById('progres-kelas-content').style.backgroundColor="grey";
    document.getElementById('aktifitas-selanjutnya-content').style.backgroundColor="grey";
    document.getElementById('aside').style.backgroundColor="white";
    document.getElementById('lampiran-content').style.backgroundColor="white";
}

function statistik(){
    document.getElementById('aside').style.backgroundColor="grey";
    document.getElementById('lampiran-content').style.backgroundColor="white";
    document.getElementById('progres-kelas-content').style.backgroundColor="white";
    document.getElementById('aktifitas-selanjutnya-content').style.backgroundColor="white";
    
}

function dokumen(){
    document.getElementById('lampiran-content').style.backgroundColor="grey";
    backgroundColor="white";
    document.getElementById('progres-kelas-content').style.backgroundColor="white";
    document.getElementById('aktifitas-selanjutnya-content').style.backgroundColor="white";
    document.getElementById('aside').style.backgroundColor="white";
}

function singout(){
    document.getElementById('selamat').innerHTML="Selamat Datang, Nama Mahasiswa Kelas";
    document.getElementById('progres-kelas-content').style.backgroundColor="white";
    document.getElementById('aktifitas-selanjutnya-content').style.backgroundColor="white";
    document.getElementById('aside').style.backgroundColor="white";
    document.getElementById('lampiran-content').style.backgroundColor="white";
}
