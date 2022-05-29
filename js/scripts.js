const ratingCard = document.querySelector('.rating');
const ratingSelectors = document.querySelectorAll('.rating__selector');
const submitBtn = document.getElementById("submitBtn");
const thankYouCard = document.querySelector('.thank-you');
const thankYouSpan = document.querySelector('.thank-you__selected-span');
let ratingNumber = 0;

document.addEventListener("DOMContentLoaded", () => {

    ratingSelectors.forEach(ratingSelector => {
        ratingSelector.addEventListener("click", selectRating);
    });

    submitBtn.setAttribute("disabled", "true");
    submitBtn.addEventListener("click", () => submitRating(ratingNumber));

});

function selectRating(e) {

    ratingSelectors.forEach(ratingSelector => {
        ratingSelector.classList.remove("rating__selector--selected");
    });

    e.target.classList.add("rating__selector--selected");

    ratingNumber = +e.target.dataset.number;
    submitBtn.removeAttribute("disabled");

}

function submitRating(rating) {

    thankYouSpan.textContent = rating;

    ratingCard.classList.add("rating--closed");

    setTimeout(() => {
        ratingCard.style.display = "none";
        thankYouCard.style.display = "block";

        setTimeout(() => {
            thankYouCard.classList.add("thank-you--open");
        }, 50);
    }, 450);

}