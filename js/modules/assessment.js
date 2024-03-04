export default class Assessment {
  constructor() {
    this.assessmentStarsContainer = document.querySelector('.assessment-stars');
  }

  async createStars(assessment) {
    const starSVG = await fetch('../assets/img/star-icon.svg')
      .then((response) => response.text())
      .then((svgData) => svgData);

    for (let i = 1; i <= 5; i += 1) {
      const star = document.createElement('span');
      star.classList.add('assessment-stars__star');
      if (i > assessment) {
        star.classList.add('assessment-stars__star--empty');
      }
      star.innerHTML = starSVG;
      this.assessmentStarsContainer.appendChild(star);
    }
  }
}
