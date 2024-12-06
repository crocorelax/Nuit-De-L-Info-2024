document.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll(".tiles");
    const scoreElement = document.getElementById("score");
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    const popupBtn = document.getElementById("popup-btn");
    const startPopup = document.getElementById("start-popup");
    const startBtn = document.getElementById("start-btn");

    let score = 0;
    const gameDuration = 15000;
    const requiredScore = 10;
    let gameRunning = false;

    // Tableau pour stocker les noms des images manquées
    const missedImages = [];

    const fishImages = [
        "fish1.png", "fish2.png", "fish3.png", "fish4.png", "fish5.png",
        "fish6.png", "fish7.png", "fish8.png"
    ];
    const trashImages = [
        "trash1.png", "trash2.png", "trash3.png", "trash4.png", "trash5.png",
        "trash6.png", "trash7.png", "trash8.png"
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
        boxImg.dataset.name = imageSrc; // Stocker le nom de l'image

        boxImg.addEventListener("dragstart", (e) => e.preventDefault());
        randomTile.appendChild(boxImg);

        let position = 0;
        const interval = setInterval(() => {
            position += 2;
            boxImg.style.top = position + "%";

            // Si l'image atteint le bas (position >= 100)
            if (position >= 100) {
                clearInterval(interval);

                // Ajouter le nom de l'image dans le tableau des images manquées
                missedImages.push(boxImg.dataset.name);

                // Vérifier si le jeu est encore en cours
                if (gameRunning) {
                    randomTile.removeChild(boxImg);
                    if (boxImg.dataset.type === "fish") {
                        score += 1;
                    } else {
                        score -= 1;
                    }
                    updateScore();
                } else {
                    // Si le jeu est fini, laisser l'image intacte
                    randomTile.removeChild(boxImg);
                }
            }
        }, 50);

        // Si l'image est cliquée
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

    function startGame() {
        startPopup.style.display = "none";
        gameRunning = true;

        const gameInterval = setInterval(createImage, 1000);

        setTimeout(() => {
            clearInterval(gameInterval);
            gameRunning = false;

            // Laisser les images restantes descendre et enregistrer leur nom
            document.querySelectorAll(".boxImg").forEach((img) => {
                missedImages.push(img.dataset.name);
            });

            setTimeout(() => {
                popup.classList.remove("hidden");
                popup.style.display = "block";

                // Afficher les résultats
                if (score >= requiredScore) {
                    popupMessage.textContent = "Félicitations, vous avez réussi !";
                    popupBtn.textContent = "Continuer";
                    console.log("Images manquées :", missedImages);
                    popupBtn.onclick = () => {
                        window.location.href = "ergonomie.html";
                    };
                } else {
                    popupMessage.textContent = `Échec, veuillez réessayer.\nImages manquées : ${missedImages.length}`;
                    missedImages.forEach((imageName) => {
                        const missedImgElement = document.createElement("p");
                        missedImgElement.textContent = imageName; // Afficher le nom
                        popup.appendChild(missedImgElement);
                    });
                    popupBtn.textContent = "Recommencer";
                    popupBtn.onclick = () => location.reload();
                }
            }, 2000);
        }, gameDuration);
    }

    startBtn.addEventListener("click", startGame);
});

