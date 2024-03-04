export default class Assessment {
  constructor() {
    this.assessmentStarsContainer = document.querySelector('.assessment-stars');
  }

  async createStars(assessment) {
    for (let i = 1; i <= 5; i += 1) {
      const star = document.createElement('span');
      star.classList.add('assessment-stars__star');
      if (i > assessment) {
        star.classList.add('assessment-stars__star--empty');
      }
      star.innerHTML = `
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.14286 0L9.97104 5.62658H15.8872L11.1009 9.10399L12.9291 14.7306L8.14286 11.2532L3.35661 14.7306L5.18479 9.10399L0.39854 5.62658H6.31467L8.14286 0Z" fill="#7A306C"/>
      </svg>`;
      this.assessmentStarsContainer.appendChild(star);
    }
  }
}
