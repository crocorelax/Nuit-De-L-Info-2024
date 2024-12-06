const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.getAttribute('data-item');
        const priceElement = button.parentNode.querySelector('.item-price');
        const price = parseInt(priceElement.textContent, 10);

        let currentScore = parseInt(localStorage.getItem('score') || '0', 10);

        if (currentScore >= price) {
            // On paie
            currentScore -= price;
            localStorage.setItem('score', currentScore);
            const scoreElement = document.getElementById('score');
            if (scoreElement) {
                scoreElement.textContent = currentScore;
            }

            // Appliquer l'effet de l'item acheté
            applyItemEffect(item);

        } else {
            alert("Vous n'avez pas assez de pièces !");
        }
    });
});

function applyItemEffect(item) {
    switch(item) {
        case 'filet':
            // Augmente fishPointBonus
            let fishPointBonus = parseInt(localStorage.getItem('fishPointBonus') || '0', 10);
            fishPointBonus += 1;
            localStorage.setItem('fishPointBonus', fishPointBonus);
            break;

        case 'guide':
            // Augmente rareBonus
            let rareBonus = parseInt(localStorage.getItem('rareBonus') || '0', 10);
            rareBonus += 1;
            localStorage.setItem('rareBonus', rareBonus);
            break;

        case 'depollution':
            // Dépollue une zone (jusqu’à 5)
            let depollutedAreas = parseInt(localStorage.getItem('depollutedAreas') || '0', 10);
            if (depollutedAreas < 5) {
                depollutedAreas += 1;
                localStorage.setItem('depollutedAreas', depollutedAreas);
            } else {
                alert('Toutes les zones sont déjà dépolluées !');
                window.location.href = "/path/to/credit.html";

            }
            // Met à jour l'affichage
            updateAchievementsDisplay(depollutedAreas);
            break;

        case 'radius':
            // Augmente le rayon
            let clickRadius = parseInt(localStorage.getItem('clickRadius') || '0', 10);
            clickRadius += 50; // par exemple on ajoute 50px à chaque achat
            localStorage.setItem('clickRadius', clickRadius);
            alert(`Le rayon de pêche est maintenant de ${clickRadius}px !`);
            break;
    }
}
