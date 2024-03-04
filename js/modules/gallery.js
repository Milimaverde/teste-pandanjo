export default class Gallery {
  constructor(galleryContainer, primaryImageContainer) {
    this.galleryContainer = document.querySelectorAll(galleryContainer);
    this.primaryImageContainer = document.querySelector(primaryImageContainer);

    this.selectImage = (event) => {
      const selectedImage = event.target;

      this.galleryContainer.forEach((image) => {
        image.classList.remove('active');
      });
      event.target.parentElement.classList.add('active');

      const cloneImage = selectedImage.cloneNode(true);

      this.primaryImageContainer.innerHTML = '';
      this.primaryImageContainer.appendChild(cloneImage);
    };
  }

  init() {
    this.galleryContainer.forEach((image) => {
      image.addEventListener('click', this.selectImage);
    });

    const firstImage = this.galleryContainer[0].querySelector('img');
    firstImage.parentNode.classList.add('active');
    this.primaryImageContainer.appendChild(firstImage.cloneNode(true));
  }
}
