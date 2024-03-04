const defaultSizes = ['PP', 'P', 'M', 'G', 'GG'];

export default class ClothesSizes {
  constructor(activeOptions, handleDisabledButton, sizes = defaultSizes) {
    this.sizes = sizes;
    this.sizesContainer = document.querySelector('.select-sizes-buttons');
    this.activeOptions = activeOptions;
    this.selectSize = (size) => {
      this.sizesContainer.querySelectorAll('.select-sizes-buttons__size').forEach((sizeButton) => {
        sizeButton.classList.remove('selected');
      });

      const selectedSize = size.innerHTML;
      this.activeOptions[0] = selectedSize;
      size.classList.add('selected');
      handleDisabledButton(this.activeOptions);
    };
  }

  createSizes() {
    this.sizes.forEach((size) => {
      const sizeButton = document.createElement('button');
      sizeButton.classList.add('select-sizes-buttons__size');
      sizeButton.innerHTML = size;
      sizeButton.addEventListener('click', () => {
        this.selectSize(sizeButton);
      });
      this.sizesContainer.appendChild(sizeButton);
    });
  }
}
