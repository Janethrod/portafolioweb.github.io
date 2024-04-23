const temaOscuro = () => {
	document.querySelector("body").setAttribute("data-bs-theme", "dark");
	document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill")
}

const temaClaro = () => {
	document.querySelector("body").setAttribute("data-bs-theme", "light");
	document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill")
}

const cambiarTema = () => {
	document.querySelector("body").getAttribute("data-bs-theme") === "light"?
	temaOscuro() : temaClaro();
}


// Botón de desplazamiento hacia arriba.
document.addEventListener('DOMContentLoaded', function() {
    var toTopBtn = document.getElementById('toTopBtn');

    // Mostrar el botón cuando el usuario se desplace hacia abajo 20px desde la parte superior del documento
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            toTopBtn.style.display = "block";
        } else {
            toTopBtn.style.display = "none";
        }
    };

    // Al hacer clic en el botón, desplazar al inicio del documento
    toTopBtn.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
})