import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const createGalleryListMarkup = gallery =>
  gallery
    .map(
      ({ description, original, preview }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`
    )
    .join('');

const galleryItemsList = createGalleryListMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryItemsList);

const imageBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  animationSpeed: 250,
});
