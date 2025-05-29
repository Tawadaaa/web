console.log("¡JavaScript cargado correctamente!");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") { 
        cerrarModal();
    }
});

function cerrarModal() {
    let modal = document.getElementById("modal"); 
    if (modal) {
        modal.style.display = "none";
    }
}

document.querySelectorAll(".imagen img").forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
};

document.body.classList.add("modal-abierto"); 
document.body.classList.remove("modal-abierto"); 

function abrirModal(src) {
    let modal = document.getElementById("modal");
    let imagenModal = document.getElementById("imagen-modal");

    imagenModal.src = src;
    modal.style.display = "flex"; 
}

function cerrarModal() {
    modal.style.display = "none";
}

const form = document.getElementById('form');
  const mensaje = document.getElementById('mensajeExito');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        mensaje.style.display = 'block';
        setTimeout(() => mensaje.style.display = 'none', 5000); // Oculta luego de 5s
      } else {
        alert('Hubo un error al enviar el mensaje. Inténtalo más tarde.');
      }
    });
  });