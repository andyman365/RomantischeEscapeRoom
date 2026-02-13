// Landingpage: smooth scroll
const startBtn = document.querySelector('.btn');
const startSection = document.querySelector('#start');

if (startBtn && startSection) {
    startBtn.addEventListener('click', function(e){
        e.preventDefault();
        startSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Room page: letter interaction
const letterBtn = document.querySelector('.letter-btn');
const letterPopup = document.getElementById('letterPopup');
const closeLetter = document.getElementById('closeLetter');

if (letterBtn && letterPopup && closeLetter) {
    letterBtn.addEventListener('click', () => {
        letterPopup.style.display = 'block';
    });

    closeLetter.addEventListener('click', () => {
        letterPopup.style.display = 'none';
    });
}
