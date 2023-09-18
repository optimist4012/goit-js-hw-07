import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const markup = createMarkup(galleryItems)
galleryList.insertAdjacentHTML('beforeend', markup);
galleryList.addEventListener('click', (handleGalleryClick));
function createMarkup (arr) {
    return arr.map(({preview, original, description }) => {
        return `<li data-preview="${preview}" class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/>
        </a>
        </li>`
    }).join('');
}
function handleGalleryClick (evt) {
    evt.preventDefault();
    if(evt.target.nodeName !== 'IMG') {
        return;
    }
    const gallerySource = evt.target.dataset.source;
    const galleryName = evt.target.alt;
const instance = basicLightbox.create(`
<div class="modal">
<img src="${gallerySource}" alt="${galleryName}" id="modalImg"/>
</div>
`, {
    onShow: (instance) => {document.addEventListener('keydown', onEscapePress)},
	onClose: (instance) => {document.removeEventListener('keydown', onEscapePress)}
});
    instance.show();
const modalImg = document.getElementById('modalImg');
modalImg.addEventListener('click', () => {
  instance.close();
});
    function onEscapePress(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        }
    }
};