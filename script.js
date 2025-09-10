document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const confettiBtn = document.getElementById('confettiBtn');

    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    confettiBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent card from flipping back
        createConfetti();
    });

    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = Math.random() * -20 + 'vh'; // Start above screen
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`; // Random color
            document.body.appendChild(confetti);

            // Remove confetti after animation
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }
});