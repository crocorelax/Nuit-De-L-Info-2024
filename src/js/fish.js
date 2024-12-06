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

// Ajout du radius pour le clic de zone
let radius = parseInt(localStorage.getItem('clickRadius') || '0', 10);

updateAchievementsDisplay(depollutedAreas);

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
});

const baseFishTypes = [
    { src: 'src/assets/images/poisson/poisson_commun.png',     points: 1,  weight: 50 },
    { src: 'src/assets/images/poisson/poisson_rare.png',       points: 2,  weight: 25 },
    { src: 'src/assets/images/poisson/poisson_epique.png',     points: 5,  weight: 15 },
    { src: 'src/assets/images/poisson/poisson_legendaire.png', points: 10, weight: 5 },
    { src: 'src/assets/images/poisson/poisson_mythique.png',   points: 20, weight: 2 }
];

/**
 * Ajuste les poids en fonction du rareBonus.
 */
function getAdjustedFishTypes() {
    const fishTypes = JSON.parse(JSON.stringify(baseFishTypes));
    if (rareBonus > 0) {
        // Augmente le poids des rares
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

    // Calcul des points finaux du poisson en tenant compte du bonus
    let finalPoints = fishData.points + fishPointBonus;
    fish.dataset.points = finalPoints; // On stocke les points dans le dataset

    const fishLayer = document.querySelector('.fish-layer');

    const randomHeight = Math.floor(Math.random() * (windowHeight - 150)) + 50;
    fish.style.top = randomHeight + 'px';

    const directionLeftToRight = Math.random() > 0.5;

    if (directionLeftToRight) {
        // Poisson part de la gauche vers la droite
        // On suppose que le poisson de base regarde vers la droite, donc pas besoin de le retourner
        fish.style.left = '-150px';
        
        fish.style.transform = 'scaleX(-1)';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                fish.style.transform = `scaleX(-1) translateX(-${windowWidth + 300}px)`;
            });
        });
    } else {
        // Poisson part de la droite vers la gauche
        // On retourne le poisson s'il regarde par défaut à droite
        fish.style.left = (windowWidth + 150) + 'px';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                fish.style.transform = `translateX(-${windowWidth + 300}px)`;
            });
        });
    }

    fish.addEventListener('click', () => {
        // Clic direct sur le poisson => pas de cooldown
        const pts = parseInt(fish.dataset.points, 10);
        updateScore(pts);
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
 */
function updateAchievementsDisplay(depollutedCount) {
    for (let i = 1; i <= 5; i++) {
        const badge = document.querySelector(`.badge-${i}`);
        if (badge) {
            if (depollutedCount >= i) {
                badge.classList.add('unlocked');
            } else {
                badge.classList.remove('unlocked');
            }
        }
    }
}

// Système de rayon (radius)
// Cooldown de 5 secondes
let lastRadiusUse = 0;
const COOLDOWN = 5000;

document.querySelector('.fish-layer').addEventListener('click', (e) => {
    
    console.log(radius);
    // Si on clique sur la fish-layer, mais pas sur un poisson, et qu'on a un radius > 0, on active le rayon
    if (!e.target.classList.contains('fish') && radius > 0) {
        const now = Date.now();
        if (now - lastRadiusUse < COOLDOWN) {
            alert("Vous devez attendre 5s avant de réutiliser le rayon de pêche !");
            return;
        }
        lastRadiusUse = now;

        const fishes = document.querySelectorAll('.fish');
        const clickX = e.clientX;
        const clickY = e.clientY;
        let totalPoints = 0;

        fishes.forEach((fishElem) => {
            const rect = fishElem.getBoundingClientRect();
            const fishCenterX = rect.left + rect.width / 2;
            const fishCenterY = rect.top + rect.height / 2;
            const dist = Math.sqrt((fishCenterX - clickX) ** 2 + (fishCenterY - clickY) ** 2);
            if (dist <= radius) {
                const fishPoints = parseInt(fishElem.dataset.points, 10);
                totalPoints += fishPoints;
                fishElem.remove();
            }
        });

        if (totalPoints > 0) {
            updateScore(totalPoints);
        }
    }
});
