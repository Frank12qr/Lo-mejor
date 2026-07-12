console.log("Script cargado correctamente");

function mostrarVideo() {
    document.getElementById("videoContainer").style.display = "block";
}

function mostrarCancion() {
    document.getElementById("cancionContainer").style.display = "block";
}

function mostrarVideoMolly() {
    document.getElementById("videoMolly").style.display = "block";
}

function mostrarVideo2() {
    document.getElementById("videopanchito").style.display = "block";
}

function crearCorazon() {
    const contenedor = document.querySelector(".corazones");

    const corazon = document.createElement("div");
    corazon.classList.add("corazon");

    corazon.innerHTML = "❤️";

    // Corazones solamente en los lados
    if (Math.random() < 0.5) {
        // lado izquierdo
        corazon.style.left = Math.random() * 15 + "%";
    } else {
        // lado derecho
        corazon.style.left = (85 + Math.random() * 15) + "%";
    }

    corazon.style.fontSize = Math.random() * 20 + 15 + "px";

    corazon.style.animationDuration =
        Math.random() * 5 + 6 + "s";

    contenedor.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 12000);
}

setInterval(crearCorazon, 350);
