let toucheStockee = "Clic Gauche";
let bufferTouches = [];
const touches = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
    "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "\\", "|",
    "Clic Gauche",
    "Escape", "Tab", "CapsLock", "Shift", "ctrl", "Alt", "Enter", "Backspace", "Delete", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"
];

function clic() {
    let paragraphe = document.getElementById("argent");
    let valeurActuelle = parseInt(paragraphe.innerText);
    paragraphe.innerText = valeurActuelle + 1;
    toucheAleatoire();
}

document.getElementById("Clicker").addEventListener("click", function(event){
    if(toucheStockee === "Clic Gauche"){
        clic();
    }
});

function toucheAleatoire() {
    

    toucheStockee = touches[Math.floor(Math.random() * touches.length)];
    document.getElementById("clic").innerText = `Appuyez sur la touche : ${toucheStockee}`;
}

function getToucheStockee() {
    return toucheStockee;
}

document.addEventListener("keydown", function(event) {
    if (event.key === " ") return; // Exclure la touche Espace

    bufferTouches.push(event.key);

    console.log(`Touche appuyée : ${event.key}`);
    console.log(`Buffer actuel : ${bufferTouches.join("")}`);
    console.log(`Touche stockée : ${toucheStockee}`);

    // Vérification si la touche stockée existe dans le buffer
    if (toucheStockee.includes(":") || toucheStockee.includes(";") || toucheStockee.includes("^")) {
        console.log(`Vérification de l'émoticône ou combinaison : ${bufferTouches.join("")} === ${toucheStockee}`);
        if (bufferTouches.includes(toucheStockee)) {
            clic();
            bufferTouches = [];
        }
    } else {
        console.log(`Vérification de la touche simple : ${event.key} === ${toucheStockee}`);
        if (bufferTouches.includes(toucheStockee)) {
            clic();
            bufferTouches = [];
        }
    }

    if (bufferTouches.length > 3) {
        bufferTouches.shift();
    }
});
document.getElementById("bonus").addEventListener("click", function() {
    console.log("BONUS");
    let argent = document.getElementById("argent");
    let prix = document.getElementById("prix");
    let valeurArgent = parseInt(argent.innerText);
    let valeurPrix = parseInt(prix.innerText);

    if (valeurArgent >= valeurPrix) {
        const touchesFiltrees = touches.filter(touche => touche !== "Clic Gauche");
        const indexARetirer = Math.floor(Math.random() * touchesFiltrees.length);
        const toucheARetirer = touchesFiltrees[indexARetirer];
        const indexDansListe = touches.indexOf(toucheARetirer);
        if (indexDansListe !== -1) {
            touches.splice(indexDansListe, 1);
        }

        argent.innerText = valeurArgent - valeurPrix;
        prix.innerText = Math.ceil(valeurPrix * 1.2);

        console.log(`Touche retirée : ${toucheARetirer}`);
        console.log(`Touches restantes : ${touches}`);
    } else {
        console.log("Vous n'avez pas assez d'argent !");
    }
}); 
function createBubble() {
    
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

   
    bubble.style.left = Math.random() * 100 + "vw";

    
    const size = Math.random() * 40 + 10; 
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.animationDuration = Math.random() * 5 + 3 + "s"; 

   
    document.body.appendChild(bubble);

   
    setTimeout(() => {
      bubble.remove();
    }, 8000);
  }
  setInterval(createBubble, 500);
