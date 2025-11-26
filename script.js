const items = document.querySelectorAll('.item');
const popup = document.getElementById('popup');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

// === Texte au survol ===
items.forEach(item => {
  item.addEventListener('mouseenter', e => {
    const info = item.dataset.info;
    if (info) {
      popup.textContent = info;
      popup.style.display = 'block';
      popup.style.left = e.pageX + 'px';
      popup.style.top = (e.pageY - 40) + 'px';
    }
  });

  item.addEventListener('mousemove', e => {
    popup.style.left = e.pageX + 'px';
    popup.style.top = (e.pageY - 40) + 'px';
  });

  item.addEventListener('mouseleave', () => {
    popup.style.display = 'none';
  });

  // === Ouverture de la modale ===
  item.addEventListener('click', () => {
    if (['cv', 'github', 'photos'].includes(item.id)) return;
    const modalId = item.dataset.modal;
    if (modalId) document.getElementById(modalId).style.display = 'block';
  });
});

// === Fermeture modales ===
closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = 'none';
  });
});

// === Galerie Photos ===
const galleryModal = document.getElementById('modal-gallery');
const galleryGrid = document.querySelector('.gallery-grid');
const photoViewer = document.getElementById('photo-viewer');
const photoViewerImg = document.getElementById('photo-viewer-img');

// tableau des chemins des photos
const galleryPhotos = [
  'photographie/1.jpg', 'photographie/2.jpg', 'photographie/3.jpg',
  'photographie/4.jpg', 'photographie/5.jpg', 'photographie/6.jpg',
  'photographie/25.jpg', 'photographie/8.jpg', 'photographie/9.jpg',
  'photographie/10.jpg', 'photographie/11.jpg', 'photographie/12.jpg',
  'photographie/13.jpg', 'photographie/14.jpg', 'photographie/15.jpg',
  'photographie/16.jpg', 'photographie/17.jpg', 'photographie/18.jpg',
  'photographie/19.jpg', 'photographie/20.jpg', 'photographie/21.jpg',
  'photographie/22.jpg', 'photographie/23.jpg', 'photographie/24.jpg', 
];

// génération auto des miniatures
function createGallery() {
  galleryGrid.innerHTML = '';
  galleryPhotos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Photo';
    img.addEventListener('click', () => openPhotoViewer(src));
    galleryGrid.appendChild(img);
  });
}

function openPhotoViewer(src) {
  photoViewerImg.src = src;
  photoViewer.classList.add('show');
}

function closePhotoViewer() {
  photoViewer.classList.remove('show');
}

// clic caméra → ouvre la galerie
document.getElementById('photos').addEventListener('click', () => {
  createGallery();
  galleryModal.style.display = 'block';
});

// ferme la modale principale
galleryModal.querySelector('.close').addEventListener('click', () => {
  galleryModal.style.display = 'none';
  closePhotoViewer();
});

// ferme la photo agrandie en cliquant à l’extérieur
photoViewer.addEventListener('click', e => {
  if (e.target === photoViewer) closePhotoViewer();
});

// ferme tout si clic hors modale
window.addEventListener('click', e => {
  if (e.target === galleryModal) galleryModal.style.display = 'none';
});



// === BOUTON MODE JOUR / NUIT ===
const toggleButton = document.getElementById("mode-toggle");
const background = document.querySelector(".background");

let darkMode = false;

toggleButton.addEventListener("click", () => {
  darkMode = !darkMode;

  if (darkMode) {
    // passe au mode nuit
    background.src = "images/background_dark.png";
    toggleButton.textContent = "☀️"; // change l’emoji
  } else {
    // repasse au mode jour
    background.src = "images/background.png";
    toggleButton.textContent = "🌙";
  }
});
