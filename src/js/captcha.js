document.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll(".tiles");
    const scoreElement = document.getElementById("score");
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    const popupBtn = document.getElementById("popup-btn");

    let score = 0;
    const gameDuration = 15000;
    const requiredScore = 10;

    const fishImages = [
        "fish1.png", "fish2.png", "fish3.png", "fish4.png", "fish5.png",
        "fish6.png","fish7.png","fish8.png"
    ];
    const trashImages = [
        "trash1.png", "trash2.png", "trash3.png", "trash4.png", "trash5.png",
        "trash6.png","trash7.png","trash8.png"
    ];

    function createImage() {
        
        const randomTile = tiles[Math.floor(Math.random() * tiles.length)];

        const isFish = Math.random() > 0.5;
        const imageSrc = isFish
            ? fishImages[Math.floor(Math.random() * fishImages.length)]
            : trashImages[Math.floor(Math.random() * trashImages.length)];

        const boxImg = document.createElement("img");
        boxImg.src = `src/assets/images/fish&&trash/${imageSrc}`;
        boxImg.className = "boxImg";
        boxImg.dataset.type = isFish ? "fish" : "trash";
        
        boxImg.style.position = "absolute";
        boxImg.style.top = "0"; 
        boxImg.style.left = "50%";
        boxImg.style.transform = "translateX(-50%)";
        boxImg.style.width = "80%";
        boxImg.style.height = "auto"; 
        boxImg.style.objectFit = "contain";
        randomTile.appendChild(boxImg);
            

        let position = 0;
        const interval = setInterval(() => {
            position += 2;
            boxImg.style.top = position + "%";

            if (position >= 100) {
                clearInterval(interval);
                randomTile.removeChild(boxImg);

                
                if (boxImg.dataset.type === "fish") {
                    score += 1;
                } else {
                    score -= 1;
                }
                updateScore();
            }
        }, 50);

        
        boxImg.addEventListener("click", () => {
            clearInterval(interval);
            randomTile.removeChild(boxImg);

            if (boxImg.dataset.type === "trash") {
                score += 2; 
            } else {
                score -= 1; 
            }
            updateScore();
        });
    }

    function updateScore() {
        scoreElement.textContent = score;
    }

    
    const gameInterval = setInterval(createImage, 1500);

    
    setTimeout(() => {
        clearInterval(gameInterval);
        document.querySelectorAll(".boxImg").forEach((img) => img.remove());

        popup.classList.remove("hidden");
        if (score >= requiredScore) {
            popupMessage.textContent = "Félicitations, vous avez réussi !";
            popupBtn.textContent = "Continuer";
            popupBtn.onclick = () => window.location.href = "success.html";
        } else {
            popupMessage.textContent = "Échec, veuillez réessayer.";
            popupBtn.textContent = "Recommencer";
            popupBtn.onclick = () => location.reload();
        }
    }, gameDuration);
});


function showPopup(success) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    const popupBtn = document.getElementById("popup-btn");

    popup.classList.remove("hidden");
    popup.style.display = "flex";

    if (success) {
        popupMessage.textContent = "Félicitations, vous avez réussi !";
        popupBtn.textContent = "Continuer";
        popupBtn.onclick = () => window.location.href = "success.html";
    } else {
        popupMessage.textContent = "Échec, veuillez réessayer.";
        popupBtn.textContent = "Recommencer";
        popupBtn.onclick = () => location.reload();
    }
}

