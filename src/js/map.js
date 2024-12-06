// Fonction pour ouvrir la carte
function openMap() {
    const mapModal = document.getElementById('mapModal');
    
    // Vérifier si la carte est déjà ouverte
    if (mapModal.style.display === 'flex') {
        return; // Si la carte est déjà ouverte, ne rien faire
    }

    // Afficher la carte
    mapModal.style.display = 'flex';
}

// Fonction pour fermer la carte en cliquant en dehors du contenu
function closeMap(event) {
    const mapModal = document.getElementById('mapModal');
    
    // Vérifier si l'utilisateur a cliqué en dehors de la zone de contenu de la carte
    // Si l'élément cliqué n'est pas la carte (ni un de ses enfants), on ferme la modale
    if (!mapModal.contains(event.target)) {
        mapModal.style.display = 'none';
    }
}

// Ajouter un gestionnaire d'événements sur le document pour détecter les clics extérieurs
document.addEventListener('click', closeMap);

// Éviter que le clic sur la boussole ne ferme immédiatement la carte
document.querySelector('.compass-container').addEventListener('click', function(event) {
    // Empêcher la propagation de l'événement de clic pour que la fermeture ne se produise pas
    event.stopPropagation();
    openMap();
});
