const scoreElementId = 'score';
let score = 0;

const scoreElement = document.getElementById(scoreElementId);
if (localStorage.getItem('score')) {
    score = parseInt(localStorage.getItem('score'), 10);
    scoreElement.textContent = score;
}

function updateScore(value) {
    score += value;
    scoreElement.textContent = score;
    localStorage.setItem('score', score);
}

// Récupération des améliorations et achievements
let fishPointBonus = parseInt(localStorage.getItem('fishPointBonus') || '0', 10);
let rareBonus = parseInt(localStorage.getItem('rareBonus') || '0', 10);
let depollutedAreas = parseInt(localStorage.getItem('depollutedAreas') || '0', 10);

// On met à jour l'affichage des achievements (badges)
updateAchievementsDisplay(depollutedAreas);

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
});

const baseFishTypes = [
    { src: 'src/assets/images/poisson/poisson_commun.png',     points: 1, weight: 50 },
    { src: 'src/assets/images/poisson/poisson_rare.png',       points: 2, weight: 25 },
    { src: 'src/assets/images/poisson/poisson_epique.png',     points: 5, weight: 15 },
    { src: 'src/assets/images/poisson/poisson_legendaire.png', points: 10, weight: 5 },
    { src: 'src/assets/images/poisson/poisson_mythique.png',   points: 20, weight: 2 }
];

/**
 * Ajuste les poids en fonction du rareBonus.
 * Par exemple, pour chaque niveau de rareBonus, on augmente un peu le poids 
 * des poissons rares (epique, legendaire, mythique).
 * Vous pouvez ajuster la logique comme vous le souhaitez.
 */
function getAdjustedFishTypes() {
    // Copie profonde
    const fishTypes = JSON.parse(JSON.stringify(baseFishTypes));

    if (rareBonus > 0) {
        // On va augmenter le poids des poissons plus rares (epique, legendaire, mythique)
        // en fonction du rareBonus.
        // Par exemple, + (rareBonus * 2) sur les trois derniers types :
        fishTypes[2].weight += rareBonus * 2; // epique
        fishTypes[3].weight += rareBonus * 2; // legendaire
        fishTypes[4].weight += rareBonus * 2; // mythique
    }
    return fishTypes;
}

function getRandomFishType() {
    const fishTypes = getAdjustedFishTypes();
    const totalWeight = fishTypes.reduce((sum, fish) => sum + fish.weight, 0);
    let random = Math.random() * totalWeight;
    for (const fish of fishTypes) {
        if (random < fish.weight) return fish;
        random -= fish.weight;
    }
    return fishTypes[0];
}

function createFish() {
    const fishData = getRandomFishType();
    const fish = document.createElement('img');
    fish.src = fishData.src;
    fish.classList.add('fish');

    const fishLayer = document.querySelector('.fish-layer');

    const randomHeight = Math.floor(Math.random() * (windowHeight - 150)) + 50;
    fish.style.top = randomHeight + 'px';

    const directionLeftToRight = Math.random() > 0.5;
    if (directionLeftToRight) {
        // De gauche vers la droite
        fish.style.left = '-150px';
        fish.style.transform = 'scaleX(-1)';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                fish.style.transform = `scaleX(-1) translateX(-${windowWidth + 300}px)`;
            });
        });
    } else {
        // De droite vers la gauche
        fish.style.left = (windowWidth + 150) + 'px';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                fish.style.transform = `scaleX(-1) translateX(-${windowWidth + 300}px)`;
            });
        });
    }

    fish.addEventListener('click', () => {
        // On ajoute les points du poisson + le bonus de points
        let finalPoints = fishData.points + fishPointBonus;
        updateScore(finalPoints);
        fish.remove();
    });

    fish.addEventListener('transitionend', () => {
        if (fish.parentNode) fish.remove();
    });

    fishLayer.appendChild(fish);
}

function startFishGeneration() {
    const interval = Math.random() * 1000 + 1000;
    setTimeout(() => {
        createFish();
        startFishGeneration();
    }, interval);
}

startFishGeneration();

/**
 * Met à jour l'affichage des achievements de dépollution.
 * On suppose que vous avez 5 badges, par exemple :
 * <div class="achievements">
 *   <img src="badge1.png" class="badge badge-1" data-id="1">
 *   <img src="badge2.png" class="badge badge-2" data-id="2">
 *   ...
 * </div>
 * 
 * Chaque badge est en noir et blanc par défaut (CSS : filter: grayscale(100%))
 * Quand depollutedAreas >= numéro du badge, on enlève le grayscale.
 */
function updateAchievementsDisplay(depollutedCount) {
    // Sélectionnez vos badges. Ici, on suppose qu'ils ont une classe .badge-X pour X = 1 à 5.
    for (let i = 1; i <= 5; i++) {
        const badge = document.querySelector(`.badge-${i}`);
        if (badge) {
            if (depollutedCount >= i) {
                // L'utilisateur possède ce badge
                badge.classList.add('unlocked'); // Dans votre CSS, .unlocked enlèvera le grayscale
            } else {
                badge.classList.remove('unlocked');
            }
        }
    }
}
