let chiffre;
let chaine ="";
let Age = 0;


const startButton = document.querySelector('#startButton');
const imageContainer = document.querySelector('.boite');
let positionX = 0; 
let angle = 0;
let duration = 800;
let animationActive = false;     

function genererAleatoire() {

    chiffre = Math.floor(Math.random() * 26) + 1;

    document.getElementById("randomD20").style.display = "flex";
    document.getElementById("d20").style.display = "flex";
    document.getElementById("b2g1").style.display = "flex";
    document.getElementById("b3g1").style.display = "flex";
    document.getElementById("b4g1").style.display = "flex";

    document.getElementById("randomD20").innerText = chiffre;
    lancerAnimation();
}
function AjouterLettre(){
    if(chiffre){
        const lettre = String.fromCharCode(96 + chiffre);
        chaine += lettre;
        document.getElementById("Chaine").innerText = chaine;

        //rechange la lettre pour enquiquinner l'utilisateur
        chiffre = Math.floor(Math.random() * 26) + 1;
        document.getElementById("randomD20").innerText = chiffre;
        lancerAnimation();
    }
    
}
function supprimerLettre() {
    chaine = chaine.slice(1);
    document.getElementById("Chaine").innerText = chaine;
    console.log(chaine);
}
function cacherbouttonsG1(){

    document.getElementById("randomD20").style.display = "none";
    document.getElementById("d20").style.display = "none";
    document.getElementById("b2g1").style.display = "none";
    document.getElementById("b3g1").style.display = "none";
    document.getElementById("b4g1").style.display = "none";
}
function add1(){
    Age++;
    document.getElementById("Age").innerText = Age;
}
function sous1(){
    Age--;
    document.getElementById("Age").innerText = Age;
}
function add10(){
    Age+=10;
    document.getElementById("Age").innerText = Age;
}
function sous10(){
    Age-=10;
    document.getElementById("Age").innerText = Age;
}
function valider(){
    if(Age<4380){
        alert("VOUS DEVEZ AVOIR AU MOINS PLUS DE 4380 JOURS POUR CONTINUER");
        chaine ="";
        Age = 0;
        document.getElementById("Age").innerText = Age;
        document.getElementById("Chaine").innerText = chaine;

    }
    else if(chaine.length<6){
        alert("Votre pseudo est trop court ;)");
        chaine ="";
        Age = 0;
        document.getElementById("Age").innerText = Age;
        document.getElementById("Chaine").innerText = chaine;
    }
    else{
        localStorage.setItem("Pseudo", chaine);
        localStorage.setItem("Age", Age);
        alert("felicitation, vous avez rentrez des données")
    }
}
function animerImage() {
    if (!animationActive) return;
    const sound = document.getElementById('soundEffect');
    sound.play();
    
    positionX += 5;

    angle += 7.2;
    if (angle >= 360) {
      angle = 0;
    }

   
    imageContainer.style.transform = `translateX(${positionX}px) rotate(${angle}deg)`;

   
    requestAnimationFrame(animerImage);
  }

  function lancerAnimation() {
 
    positionX = 0;
    angle = 0;
    animationActive = true;

   
    setTimeout(() => {
      animationActive = false;
      imageContainer.style.transform = `translateX(${positionX}px) rotate(${0}deg)`;

    }, duration);

   
    animerImage();
  }
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
