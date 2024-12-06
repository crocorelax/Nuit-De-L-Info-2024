function scrollToContent() {
    document.querySelector('.intro').style.display = 'none';  // Masque l'ancre
    document.querySelector('.container').style.display = 'block';  // Affiche le contenu
    window.scrollTo({ top: 0, behavior: 'smooth' });  // Fait défiler la page vers le haut
}

document.addEventListener('click', function(event) {
    if (document.querySelector('.intro').style.display != 'none') {
        scrollToContent(event);
    }
});