function mostrarVideo() {
    document.getElementById("videoContainer").style.display = "block";
}

function mostrarFoto() {
    document.getElementById("fotoContainer").style.display = "block";
}

function crearCorazon() {
    const contenedor = document.querySelector(".corazones");

    const corazon = document.createElement("div");
    corazon.classList.add("corazon");

    corazon.innerHTML = "❤️";

    // Solo salen de los lados
    if (Math.random() < 0.5) {
        // lado izquierdo
        corazon.style.left = Math.random() * 15 + "%";
    } else {
        // lado derecho
        corazon.style.left = (85 + Math.random() * 15) + "%";
    }

    corazon.style.fontSize = Math.random() * 20 + 15 + "px";
    corazon.style.animationDuration = Math.random() * 5 + 6 + "s";

    contenedor.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 12000);
}

setInterval(crearCorazon, 350);

function mostrarCancion() {
    const seccion = document.getElementById("cancionContainer");
    const video = document.getElementById("videoCancion");

    seccion.style.display = "block";

    video.play();
}

function mostrarCancion() {
    let cancion = document.getElementById("cancionContainer");

    cancion.style.display = "block";

    let video = document.getElementById("videoCancion");
    video.play();
}