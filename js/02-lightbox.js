import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryLis = document.querySelector('.gallery');
const markup = createMarkup(galleryItems)
galleryLis.insertAdjacentHTML('beforeend', markup);
function createMarkup (arr) {
    return arr.map(({preview, original, description }) => {
        return `<li  class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>`
    }).join('');
};
    const lightbox = new SimpleLightbox('.gallery a', {
        caption: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
