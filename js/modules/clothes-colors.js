const defaultColors = [
  { name: 'blue', hex: '#014188' },
  { name: 'orange', hex: '#9B4D04' },
  { name: 'purple', hex: '#811BBF' },
];

export default class ClothesColors {
  constructor(activeOptions, handleDisabledButton, colors = defaultColors) {
    this.colors = colors;
    this.activeOptions = activeOptions;
    this.colorsContainer = document.querySelector('.select-colors-buttons');
    this.selectColor = (color) => {
      this.colorsContainer.querySelectorAll('.select-colors-buttons__color').forEach((colorButton) => {
        colorButton.classList.remove('selected');
      });
      this.activeOptions[1] = color.getAttribute('data-color');
      color.classList.add('selected');
      handleDisabledButton(this.activeOptions);
    };
  }

  createColors() {
    this.colors.forEach((color) => {
      const colorButton = document.createElement('button');
      colorButton.classList.add('select-colors-buttons__color');
      colorButton.setAttribute('data-color', color.name);
      colorButton.style.backgroundColor = color.hex;
      colorButton.addEventListener('click', () => {
        this.selectColor(colorButton);
      });
      this.colorsContainer.appendChild(colorButton);
    });
  }
}
