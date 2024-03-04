import Assessment from './modules/assessment';
import ClothesColors from './modules/clothes-colors';
import ClothesSizes from './modules/clothes-sizes';
import Accordion from './modules/accordion';
import Gallery from './modules/gallery';

const galleryContainer = new Gallery('.clothes-list li', '.clothes-primary-image');
galleryContainer.init();

const assessment = new Assessment();

assessment.createStars(4);

const colors = [
  { name: 'blue', hex: '#014188' },
  { name: 'orange', hex: '#9B4D04' },
  { name: 'purple', hex: '#811BBF' },
];

const cartButton = document.querySelector('.prices-cart-button');

const activeOptions = [null, null];

const handleDisabledButton = (option) => {
  if (option[0] && option[1]) {
    cartButton.classList.remove('disabled');
  }
};

const clothesColors = new ClothesColors(activeOptions, handleDisabledButton, colors);
clothesColors.createColors();

const clothesSizes = new ClothesSizes(activeOptions, handleDisabledButton, ['PP', 'P', 'M', 'G', 'GG']);
clothesSizes.createSizes();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();