const ratingCard = document.getElementById('rating-card');
const thankYouCard = document.getElementById('thank-you-card');
const submitButton = document.getElementById('submit-button');
const rateSelectorButtons = document.querySelectorAll('.rate-selector__button');
const ratingValue = document.getElementById('rating-value');

document.addEventListener('DOMContentLoaded', () => {
  initApp();  
});

const initApp = () => {
  rateSelectorButtons.forEach(button => {
    button.addEventListener("click", handleSelectRate);
  });

  submitButton.disabled = true;
  submitButton.addEventListener("click", handleSubmit);
}

const handleSelectRate = (e) => {
  const rating = e.target.dataset.value;
  ratingValue.textContent = rating;

  rateSelectorButtons.forEach(button => {
    button.classList.remove('rate-selector__button--active');
  });

  e.target.classList.add('rate-selector__button--active');  

  submitButton.disabled = false;
}

const handleSubmit = () => {
  ratingCard.style.display = 'none';
  thankYouCard.style.display = 'block';
}
