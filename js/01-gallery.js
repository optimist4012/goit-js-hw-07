import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGallery = createListGallery(galleryItems);
const container = document.querySelector("ul.gallery");
container.insertAdjacentHTML("afterbegin", createGallery);
container.addEventListener("click", openModalClick);
function  openModalClick(event) {
  if(event.target.nodeName !== "IMG"){
    return;
   }
   event.preventDefault();
   const instance = basicLightbox.create(`
      <div class="modal">
       <img src="${event.target.dataset.source}" alt="${event.target.alt}"/>
       </div>
     `, {
      onShow: (instance) => {
      document.addEventListener('keydown', closeModal)
     },
      onClose: (instance) => {
        document.removeEventListener('keydown', closeModal)
      }
     })
     instance.show()
     function closeModal(e) {
      if (e.code === 'Escape') {
        instance.close()
       }
      }
};
function createListGallery(images)  { 
    return images.map(({preview, description, original}) => {
        return `
        <li class="gallery__item ">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    }).join('');
    }; 
    console.log(createGallery)