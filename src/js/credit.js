document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.slider .item');
    const condition = document.querySelector('.condition');

    // Fonction pour vérifier si la souris est sur la div .condition
    let overCondition = false;
    condition.addEventListener('mouseenter', () => {
        overCondition = true;
        console.log('Cursor entered .condition');
    });
    condition.addEventListener('mouseleave', () => {
        overCondition = false;
        console.log('Cursor left .condition');
    });

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Vérifie si la souris est sur la div .condition aussi
            console.log(`Mouse entered item with position: ${item.style.getPropertyValue('--position')}`);
            if (overCondition) {
                slider.style.animationPlayState = 'paused';
                console.log('Animation paused because cursor is on both an item and .condition');
            }
        });

        item.addEventListener('mouseleave', () => {
            console.log(`Mouse left item with position: ${item.style.getPropertyValue('--position')}`);
            if (overCondition) {
                slider.style.animationPlayState = 'running';
                console.log('Animation resumed because cursor left an item but is still on .condition');
            }
        });
    });

    // Ajouter des écouteurs pour la div .condition
    condition.addEventListener('mouseenter', () => {
        // Vérifie si un des items du slider est aussi sous le curseur
        const hoveredItem = Array.from(items).find(item => item.matches(':hover'));
        if (hoveredItem) {
            slider.style.animationPlayState = 'paused';
            console.log(`Animation paused because cursor is on .condition and hovered item is: ${hoveredItem.style.getPropertyValue('--position')}`);
        }
    });

    condition.addEventListener('mouseleave', () => {
        slider.style.animationPlayState = 'running';
        console.log('Animation resumed because cursor left .condition');
    });
});





