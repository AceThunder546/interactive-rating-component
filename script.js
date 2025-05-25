function updateRating(rating, event) {
    if (event) event.preventDefault();
    const ratings = document.querySelectorAll('.rate');

    console.log(typeof ratings);

    ratings.forEach(rating => {
        if (rating.classList.contains('active-rating')) {
            rating.classList.remove('active-rating');
        }
    });

    ratings.forEach(element => {
        console.log(element);
    });

    ratings[rating-1].classList.add('active-rating');
}

function submitRating(event) {
    if (event) event.preventDefault();
    let selectedRating = null;
    const ratings = document.querySelectorAll('.rate');
    const container = document.getElementById('container');
    const submitted = document.querySelector('.submitted');
    const displayRating = document.querySelector('.submitted span');

    ratings.forEach((btn, index) => {
        if (btn.classList.contains('active-rating')) {
            selectedRating = btn.textContent;
        }
    });

    if (selectedRating) {
        displayRating.innerHTML = selectedRating;
        container.style.display = "none";
        submitted.style.display = "block";
    }
}