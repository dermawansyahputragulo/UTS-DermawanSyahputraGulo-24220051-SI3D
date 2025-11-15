
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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
  document.getElementById('progres-kelas-content').style.backgroundColor="white";
  document.getElementById('lampiran-content').style.backgroundColor="white";
    document.getElementById('aktifitas-selanjutnya-content').style.backgroundColor="white";
    document.getElementById('aside').style.backgroundColor="white";
    document.getElementById('lampiran-content').style.backgroundColor="white";
    document.getElementById('SM').style.color="black";
    document.getElementById('PK').style.color="black";
    document.getElementById('AS').style.color="black";
    document.getElementById('Lcolor').style.color="black";
    document.getElementById('main-color').style.backgroundColor="#0052b4";
    document.getElementById("playbacksound").addEventListener("click", (e) => {
    e.preventDefault();
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        setTimeout(function () {
        document.getElementById('bg-color').style.backgroundColor="#0b1014";
        document.getElementById('bg-color').style.border="2px white solid";
        document.getElementById('bg-color').style.boxshadow="0 0 10px white";
}, 2850);
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

document.getElementById("signout").addEventListener("click", function () {
  window.close();
  location.reload();
});

function home(){
    document.getElementById('selamat').innerHTML="Selamat Datang, Nama Mahasiswa<br>Kelas SI-3X";
    document.getElementById('main-color').style.backgroundColor="#0e3b72";
    document.getElementById('progres-kelas-content').style.backgroundColor="white";
    document.getElementById('aktifitas-selanjutnya-content').style.backgroundColor="white";
    document.getElementById('aside').style.backgroundColor="white";
    document.getElementById('lampiran-content').style.backgroundColor="white";
}

function mahasiswa () {
    document.getElementById('selamat').innerHTML="Selamat Datang, Dermawan Syahputra Gulo";
    document.getElementById('main-color').style.backgroundColor="#0e3b72";
    document.getElementById('lampiran-content').style.backgroundColor="white";
    document.getElementById('progres-kelas-content').style.backgroundColor="white";
    document.getElementById('aktifitas-selanjutnya-content').style.backgroundColor="white";
    document.getElementById('aside').style.backgroundColor="white";
    document.getElementById('PK').style.color="black";
    document.getElementById('AS').style.color="black";
    document.getElementById('SM').style.color="black";
    document.getElementById('Lcolor').style.color="black";
}

function kelas() {
    document.getElementById('selamat').innerHTML="Selamat Datang, Dermawan Syahputra Gulo Kelas SI-3D";
    document.getElementById('main-color').style.backgroundColor="#0e3b72";
    document.getElementById('lampiran-content').style.backgroundColor="white";
    document.getElementById('progres-kelas-content').style.backgroundColor="white";
    document.getElementById('aktifitas-selanjutnya-content').style.backgroundColor="white";
    document.getElementById('aside').style.backgroundColor="white";
    document.getElementById('PK').style.color="black";
    document.getElementById('AS').style.color="black";
    document.getElementById('SM').style.color="black";
    document.getElementById('Lcolor').style.color="black";
}

function aktifitas(){
    document.getElementById('aktifitas-selanjutnya-content').style.backgroundColor="#0e3b72";
    document.getElementById('progres-kelas-content').style.backgroundColor="#0e3b72";
    document.getElementById('PK').style.color="white";
    document.getElementById('AS').style.color="white";
    document.getElementById('SM').style.color="black";
    document.getElementById('Lcolor').style.color="black";
    document.getElementById('main-color').style.backgroundColor="#0052b4";
    document.getElementById('lampiran-content').style.color="black";
    document.getElementById('aside').style.backgroundColor="white";
    document.getElementById('lampiran-content').style.backgroundColor="white";
}

function statistik(){
    document.getElementById('aside').style.backgroundColor="#0e3b72";
    document.getElementById('SM').style.color="white";
    document.getElementById('PK').style.color="black";
    document.getElementById('AS').style.color="black";
    document.getElementById('Lcolor').style.color="black";
    document.getElementById('main-color').style.backgroundColor="#0052b4";
    document.getElementById('lampiran-content').style.backgroundColor="white";
    document.getElementById('progres-kelas-content').style.backgroundColor="white";
    document.getElementById('aktifitas-selanjutnya-content').style.backgroundColor="white";
    
}

function dokumen(){
    document.getElementById('lampiran-content').style.backgroundColor="#0e3b72";
    document.getElementById('Lcolor').style.color="white";
    document.getElementById('SM').style.color="black";
    document.getElementById('PK').style.color="black";
    document.getElementById('AS').style.color="black";
    document.getElementById('main-color').style.backgroundColor="#0052b4";
    document.getElementById('progres-kelas-content').style.backgroundColor="white";
    document.getElementById('aktifitas-selanjutnya-content').style.backgroundColor="white";
    document.getElementById('aside').style.backgroundColor="white";
}