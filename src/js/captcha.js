document.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll(".tiles");
    const scoreElement = document.getElementById("score");
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    const popupBtn = document.getElementById("popup-btn");
    const startPopup = document.getElementById("start-popup");
    const startBtn = document.getElementById("start-btn");
    const testA = document.querySelector(".test"); // Utilisation de querySelector pour un seul élément

    let score = 0;
    const gameDuration = 15000;
    const requiredScore = 10;
    let gameRunning = false;

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

        boxImg.addEventListener("dragstart", (e) => e.preventDefault());
        randomTile.appendChild(boxImg);

        let position = 0;
        const interval = setInterval(() => {
            if (!gameRunning && position >= 100) {
                clearInterval(interval);
                randomTile.removeChild(boxImg);
                return;
            }

            position += 2;
            boxImg.style.top = position + "%";

            if (position >= 100) {
                clearInterval(interval);

                if (gameRunning) {
                    randomTile.removeChild(boxImg);
                    if (boxImg.dataset.type === "fish") {
                        score += 1;
                    } else {
                        score -= 1;
                    }
                    updateScore();
                }
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

    function startGame() {
        startPopup.style.display = "none";
        gameRunning = true;

        const gameInterval = setInterval(createImage, 1000);

        setTimeout(() => {
            clearInterval(gameInterval);
            gameRunning = false;
            setTimeout(() => {
                popup.classList.remove("hidden");
                popup.style.display = "block"; // Assurez-vous que le popup s'affiche
                if (score >= requiredScore) {
                    popupMessage.textContent = "Félicitations, vous avez réussi !";
                    popupBtn.textContent = "Continuer";
                    popupBtn.onclick = () => window.location.href = "success.html";
                } else {
                    popupMessage.textContent = "Échec, veuillez réessayer.";
                    popupBtn.textContent = "Recommencer";
                    popupBtn.onclick = () => location.reload();
                }
            }, 2000);
        }, gameDuration);
    }

    startBtn.addEventListener("click", startGame);
});
