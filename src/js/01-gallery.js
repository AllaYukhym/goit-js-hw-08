// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryContainerRef = document.querySelector('.gallery');
const gallaryMarkup = createGallaryMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', gallaryMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});

function createGallaryMarkup(imgs) {
  return imgs
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join('');
}
