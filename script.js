// Helper untuk set style lebih cepat
function setStyles(el, styles) {
    Object.assign(el.style, styles);
}

// Grup elemen yang sering dipakai
const bg     = document.getElementById("bg-color");
const rd    = document.getElementById("RD");
const nav    = document.getElementById("nav-color");
const input    = document.getElementById("input-color");
const main   = document.getElementById("main-color");
const aside  = document.getElementById("aside");
const progres = document.getElementById("progres-kelas-content");
const aktif  = document.getElementById("aktifitas-selanjutnya-content");
const lampiran = document.getElementById("lampiran-content");

const selamat = document.getElementById("selamat");
const SM = document.getElementById("SM");
const PK = document.getElementById("PK");
const AS = document.getElementById("AS");
const Lcolor = document.getElementById("Lcolor");

// Audio backsound
const audio = new Audio("Assets/backsound.ogg");
audio.preload = "auto";
let isPlaying = false;

// Theme Manager
function clearTheme() {
    // Reset warna default
    setStyles(main, { backgroundColor: "#0052b4", border: "", boxShadow: "" });
    setStyles(aside, { backgroundColor: "white", border: "", boxShadow: "" });
    setStyles(progres, { backgroundColor: "white", border: "", boxShadow: "" });
    setStyles(aktif, { backgroundColor: "white", border: "", boxShadow: "" });
    setStyles(lampiran, { backgroundColor: "white", border: "", boxShadow: "" });

    SM.style.color = "black";
    PK.style.color = "black";
    AS.style.color = "black";
    Lcolor.style.color = "black";
}

document.querySelectorAll(".nav").forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.backgroundColor = "#0e3b72";
        link.style.border = "2px solid #0fe3ff";
        link.style.boxShadow = "0 0 10px #0fe3ff";
        link.style.transition = "0.2s";
    });

    link.addEventListener("mouseleave", () => {
        link.style.backgroundColor = "";
        link.style.border = "";
        link.style.boxShadow = "";
    });
});

// DARK MODE
function activateDarkMode() {
    // background utama
    setStyles(bg, {
        backgroundColor: "#0b1014"
    });
    
    setStyles(rd, {
            textShadow: "0 0 3px #0fe3ff"
        });
        
    setStyles(input, {
            backgroundColor: "#0e3b72",
            border: "2px solid #0fe3ff",
            boxShadow: "0 0 10px #0fe3ff"
        });
    
    setStyles(main, {
            backgroundColor: "#0e3b72",
            border: "2px solid #0fe3ff",
            boxShadow: "0 0 10px #0fe3ff"
        });
        
    setStyles(nav, {
            backgroundColor: "#0e3b72",
            border: "2px solid #0fe3ff",
            boxShadow: "0 0 10px #0fe3ff"
        });
        
    setStyles(aktif, {
            backgroundColor: "#0e3b72",
            border: "2px solid #0fe3ff",
            boxShadow: "0 0 10px #0fe3ff"
        });
    setStyles(progres, {
            backgroundColor: "#0e3b72",
            border: "2px solid #0fe3ff",
            boxShadow: "0 0 10px #0fe3ff"
        });

        PK.style.color = "white";
        AS.style.color = "white";
        
        
    setStyles(aside, {
            backgroundColor: "#0e3b72",
            border: "2px solid #0fe3ff",
            boxShadow: "0 0 10px #0fe3ff"
        });
        SM.style.color = "white";


    setStyles(lampiran, {
            backgroundColor: "#0e3b72",
            border: "2px solid #0fe3ff",
            boxShadow: "0 0 10px #0fe3ff"
        });
        Lcolor.style.color = "white";

}

// Daftar tema
const THEMES = {
    home: () => {
        selamat.innerHTML = "Selamat Datang, Nama Mahasiswa<br>Kelas OO-OO";
        clearTheme();
        setStyles(main, {
            backgroundColor: "#0e3b72",
            border: "2px solid #0fe3ff",
            boxShadow: "0 0 10px #0fe3ff"
        });
    },

    mahasiswa: () => {
        selamat.innerHTML = "Selamat Datang, Dermawan Syahputra Gulo";
        clearTheme();
        setStyles(main, {
            backgroundColor: "#0e3b72",
            border: "2px solid #0fe3ff",
            boxShadow: "0 0 10px #0fe3ff"
        });
    },

    kelas: () => {
        selamat.innerHTML = "Selamat Datang, Dermawan Syahputra Gulo Kelas SI-3D";
        clearTheme();
        setStyles(main, {
            backgroundColor: "#0e3b72",
            border: "2px solid #0fe3ff",
            boxShadow: "0 0 10px #0fe3ff"
        });
    },

    aktifitas: () => {
        clearTheme();
        setStyles(aktif, {
            backgroundColor: "#0e3b72",
            border: "2px solid #0fe3ff",
            boxShadow: "0 0 10px #0fe3ff"
        });
        setStyles(progres, {
            backgroundColor: "#0e3b72",
            border: "2px solid #0fe3ff",
            boxShadow: "0 0 10px #0fe3ff"
        });

        PK.style.color = "white";
        AS.style.color = "white";
    },

    statistik: () => {
        clearTheme();
        setStyles(aside, {
            backgroundColor: "#0e3b72",
            border: "2px solid #0fe3ff",
            boxShadow: "0 0 10px #0fe3ff"
        });
        SM.style.color = "white";
    },

    dokumen: () => {
        clearTheme();
        setStyles(lampiran, {
            backgroundColor: "#0e3b72",
            border: "2px solid #0fe3ff",
            boxShadow: "0 0 10px #0fe3ff"
        });
        Lcolor.style.color = "white";
    }
};

// Fungsi utama untuk terapkan tema
function applyTheme(name) {
    if (THEMES[name]) THEMES[name]();
}

// Event Listener Menu
document.getElementById("menu-home").addEventListener("click", e => {
    e.preventDefault();
    applyTheme("home");
});

document.getElementById("menu-mahasiswa").addEventListener("click", e => {
    e.preventDefault();
    applyTheme("mahasiswa");
});

document.getElementById("menu-kelas").addEventListener("click", e => {
    e.preventDefault();
    applyTheme("kelas");
});

document.getElementById("menu-aktifitas").addEventListener("click", e => {
    e.preventDefault();
    applyTheme("aktifitas");
});

document.getElementById("menu-statistik").addEventListener("click", e => {
    e.preventDefault();
    applyTheme("statistik");
});

document.getElementById("menu-dokumen").addEventListener("click", e => {
    e.preventDefault();
    applyTheme("dokumen");
});

// Music handler
document.getElementById("playbacksound").addEventListener("click", e => {
    e.preventDefault();
    clearTheme();
    
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    } else {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
    }
    setTimeout(() => {
    activateDarkMode();
}, 2850);
});

// Reload
document.getElementById("reload").addEventListener("click", e => {
    e.preventDefault();
    location.reload();
});

// Signout = reload saja
document.getElementById("signout").addEventListener("click", e => {
    e.preventDefault();
    location.reload();
});


// Splash Screen with Loading Bar
document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash");

    // Durasi splash = 1.2 detik (1 detik animasi + sedikit jeda)
    setTimeout(() => {
        splash.classList.add("fade-out");

        setTimeout(() => {
            splash.remove();
        }, 600);

    }, 1200);
});