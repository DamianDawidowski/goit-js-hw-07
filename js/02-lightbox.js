import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) =>
      `<a class=gallery__item href=${image.original}>
      <img class="gallery__image" src=${image.preview} alt="${image.description}" />
      </a>`
  )

  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", imageClick);

function imageClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

 
    let galleryBox = new SimpleLightbox('.gallery a');
    galleryBox.on('show.simplelightbox', function () {	// do something…

        `<img src="${event.target.dataset.source}" width='800' height='800'>`
    }
    
    );
}

 
