// Suppose que "score" = monnaie actuelle du joueur.
// Si vous voulez une autre ressource, créez par exemple :
// let money = 0;
// if (localStorage.getItem('money')) {
//    money = parseInt(localStorage.getItem('money'), 10);
//    moneyElement.textContent = money;
// }

const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.getAttribute('data-item');
        const priceElement = button.parentNode.querySelector('.item-price');
        const price = parseInt(priceElement.textContent, 10);

        if (score >= price) {
            // L'utilisateur peut acheter
            updateScore(-price); // On décrémente le score de ce prix
            applyItemEffect(item);
            alert('Achat réussi !');
        } else {
            alert("Vous n'avez pas assez de pièces !");
        }
    });
});

function applyItemEffect(item) {
    switch(item) {
        case 'filet':
            // Par exemple, augmenter les points par poisson de +1
            // On peut stocker une variable globale "fishPointBonus" et la sauvegarder.
            if (!localStorage.getItem('fishPointBonus')) {
                localStorage.setItem('fishPointBonus', 0);
            }
            let currentBonus = parseInt(localStorage.getItem('fishPointBonus'), 10);
            currentBonus += 1;
            localStorage.setItem('fishPointBonus', currentBonus);
            alert('Vos poissons rapportent maintenant plus de points !');
            break;

        case 'guide':
            // Augmenter la chance des poissons rares.
            // Vous pouvez ajuster les poids dans fishTypes en fonction d’un bonus.
            if (!localStorage.getItem('rareBonus')) {
                localStorage.setItem('rareBonus', 0);
            }
            let rareBonus = parseInt(localStorage.getItem('rareBonus'), 10);
            rareBonus += 1;
            localStorage.setItem('rareBonus', rareBonus);
            alert('Vous avez plus de chance d\'avoir des poissons rares !');
            break;

        case 'depollution':
            // Dépolluer une zone : par exemple débloquer une zone, ou diminuer l’opacité d’un élément sur la carte
            // Vous pouvez stocker un état "depollutedAreas" dans le localStorage
            if (!localStorage.getItem('depollutedAreas')) {
                localStorage.setItem('depollutedAreas', 0);
            }
            let depollutedAreas = parseInt(localStorage.getItem('depollutedAreas'), 10);
            depollutedAreas += 1;
            localStorage.setItem('depollutedAreas', depollutedAreas);
            alert('Une zone a été dépolluée, la biodiversité revient peu à peu !');
            break;
    }
}


