const myBtn = document.getElementById("myBtn");
var result = document.getElementById("result");

myBtn.addEventListener("click", headsOrTails , console.log(headsOrTails));

function headsOrTails() {
    //récupération de l'entier aléatoire
var entier = entierAleatoire(1,10);
if (entier > 5) 
{
 result.innerHTML = "pile";
} else 
if(entier < 5) {
    result.innerHTML = "face";
}
console.log(entier);
}
//création entier Aléatoire
function entierAleatoire(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
//Math.random() renvoie un nombre flottant pseudo-aléatoire
//Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x
}