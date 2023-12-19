const card = document.querySelector('.card');

card.addEventListener('mouseenter', () => {
    card.style.transform = 'rotateY(-20deg)';
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(20deg)';
});

var audio = document.getElementById("myAudio");
document.addEventListener('click', function() {
    audio.play();
    audio.muted = false;
});