// script.js

// Fonction pour ouvrir la carte
function openMap() {
    document.getElementById('mapModal').style.display = 'flex';
}

// Fonction pour fermer la carte en cliquant en dehors du contenu
function closeMap(event) {
    // Vérifier si l'utilisateur a cliqué en dehors de la zone de contenu de la carte
    if (event.target === document.getElementById('mapModal')) {
        document.getElementById('mapModal').style.display = 'none';
    }
}

document.addEventListener('click', function(event) {
    closeMap(event);
});