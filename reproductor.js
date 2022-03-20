"use strict";
//todo: REPRODUCTOR DE VIDEO CUSTOM

window.addEventListener("load", function () {
    // ^ 1. Obtengo los videos
    var video1 = document.getElementById("videoPlayer");
    var video2 = document.getElementById("videoPlayer2");

    //^ 2. Obtengo todos los botones(controladores del reproductor)
    var TodosLosBotones = document.querySelectorAll(".boton");

    //^ 3. Aplico el evento click a todos los botones
    for (var boton of TodosLosBotones) {
        boton.addEventListener("click", function () {
            var nodoPadre = this.parentNode; // devuelve el elemento padre de este elemento

            //^ 4. Descubro a que video pertenese este boton para argumentar la función con el video correspondiente
            if (nodoPadre.classList.contains("video1")) {
                // hace referencia si el nodo padre de este elemento que cliqué tiene la clase video1
                var videoDescubierto = video1;
            } else {
                var videoDescubierto = video2;
            }

            //^ 5. Descubro que tipo de boton es, mediente su clase y aplico la función correspondiente para cada uno de los botones( controladores del reporductor )
            //classList.contains() averigua si exite la clase en el elemento
            if (this.classList.contains("playpause") == true) {
                playPause(videoDescubierto);
                //
            } else if (this.classList.contains("recarga") == true) {
                reload(videoDescubierto);
                //
            } else if (this.classList.contains("amplio") == true) {
                makeLarge(videoDescubierto);
                //
            } else if (this.classList.contains("minimo") == true) {
                makeSmall(videoDescubierto);
                //
            } else if (this.classList.contains("estandar") == true) {
                makeNormal(videoDescubierto);
            }
        });
    }
    //? funciones del reproductor
    function playPause(video) {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    function reload(video) {
        video.load();
    }
    function makeLarge(video) {
        video.width = 1000;
    }
    function makeSmall(video) {
        video.width = 250;
    }
    function makeNormal(video) {
        video.width = 500;
    }
});
