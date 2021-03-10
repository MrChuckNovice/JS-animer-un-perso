/*let test; //initialiser
let num = 10; //assigner
console.log(toString.call(test));
console.log(toString.call(num));



{
    var test = "giraffe";
    test = 10;
}

console.log(test);

erreur console.log
la porté de let est en bloc.

let age = 24;

if(age >= 65) //la condition est cequ'il y a entre les parenthèses
{ 
    console.log("Vous êtes retraité !");
} else if (age >= 18 && age <=65){
    //&& opérateur logique
    console.log("Vous êtes majeur !");
}else{
    console.log("Vous êtes mineur !")
}*/

/**
 * true && true ==> true
 * true && false ==> false
 * false && true ==> false
 * false && true ==> false
 * 
 * true || true ==> true
 * true || false ==>true
 * false || true ==> true
 * false || false ==> false
 * 
 * !false === true
 * !true === false
 */

 /*---------------------------------------------------case
/**let favoriteColor = "jaune";

 const favoriteColors = ["green", "black", "blue", "red"];
const index = favoriteColors.indexOf(favoriteColor)
 switch (favoriteColor) {// je vais évaluer ce qu'il y a entre les parenthèses
      
     case "green":
         console.log(`Votre couleur préférée est ${favoriteColor} soit vert en français ${index}`)
         break;
         case "black":
            console.log(`Votre couleur préférée est ${favoriteColor} soit noir en français ${index}`)
            break;

            case "blue":
         console.log(`Votre couleur préférée est ${favoriteColor} soit bleu en français ${index}`)
         break;

         case "red":
         console.log(`Votre couleur préférée est ${favoriteColor} soit rouge en français ${index}`)
         break;
        
         default:
        console.log(`Votre couleur préférée est ${favoriteColor} je sais pas traduire enculé ${index}`)
         break;
 }

 * La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.

fonction callback Une fonction de rappel (aussi appelée callback en anglais) est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action.
 forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.


let favoriteColor = "jaune";

const favoriteColors = ["green", "black", "blue", "red"];
*/ 
/*favoriteColors.forEach((valeurCourante, index, array) => {
    console.log(valeurCourante);//La valeur de l'élément du tableau en cours de traitement.
    console.log(index);//L'indice de l'élément du tableau en cours de traitement.
    console.log(array);//Le tableau sur lequel la méthode forEach est appliquée.
});
//for (let i = 0; i < favoriteColors.length; i++)
for (let i = favoriteColors.length - 1; i >=0; i--){
    console.log(i);
    const element = favoriteColors[i];
    console.log(element);
}
on utilise for quand on sais combien de fois on va utilser le for

let number = 2; //4%3 => 1 --> 4 = 3 * 1 + 1 4%2 ==> 0 

//on utilise while quand on sait pas combien de fois on va utiliser une  instruction
while(number%2 === 1) {
    console.log(number);
    number++;
    console.log(number);
}
let number2 = 2;
// pareil que while on utilise do While quand on sait pas combien de fois on va utiliser une  instruction mais qu'on veut l'utiliser au moins une fois
do{
    console.log(number2);
    number2++;
} while (number2 % 2 === 1);
//meme si la condition de départ est fausse le do while s'execute une fois
const index = favoriteColors.indexOf(favoriteColor)




//---------------------------------------------------------------
let a = 3;
let b = a;  // b va cloner a
let tmp;
tmp = a;
a = b;
b = tmp;
console.log("b = " + b)
console.log("a = " + a)

const arr1 = [1,2,3];
//const arr2 = arr1; arr2 va pointer se qu'il y a dans arr1
let variable = "je suis pas là";
const arr2 = [...variable];//Spread opérator syntaxe de décomposition, décompose tout elements que l'on veut parcourir
arr1.push(4)

console.log("arr1 = " + arr1);
console.log("arr2 = " +arr2);*/

//-------------------------------------------------function

//function evenOrOdd(number){ //  evenOrOdd(paramètre)
    /*if(number % 2 === 0){
       console.log("je suis pair")
        return true 
    }else {
        console.log("je suis impair")
        return false
    }
    return number % 2 === 0
}

evenOrOdd(8); //evenOrOdd(argument)
evenOrOdd(4);
evenOrOdd(5);



isEven = (number) => {

}

let test = isEven(5);
//console.log(test);

let jean = {
    nom: "Jean",
    bonjour: function() {
        setTimeout(function() {
            console.log(`Mon nom est ${this.nom}`);
        }, 1000);
        
    }
}

jean.bonjour();

const h1 = document.querySelectorAll(".test");

h1.forEach(element => {
   console.log(element)
   element.addEventListener("click", function () {
       element.classList.toggle("red")
       console.log(h1.classList)
   });
});*/

/*const bidule = document.getElementById("bidule");
console.log(bidule)

//pour bloquer le chargement d'une page//
let noLoad = document.querySelector("form")

noLoad.addEventListener("submit", function(event){
    event.preventDefault()
    console.log()
});
*/


//title.innerHTML= "<p>Mon super formulaire</p>" affichera Mon super formulaire
//title.innerText = "<P>Mon super formulaire</p>"  affichera <p>Mon super formulaire</p>
/**
const title = document.getElementById("title")
let pass1 = document.getElementById("password")
let confPass = document.getElementById("confirmPassword")
let checkform = document.querySelector("form") 
let feed = document.getElementById("feedback")

checkform.addEventListener("submit", function(e)
{
    e.preventDefault();
  let pass1Value= pass1.value;
  let confPassValue = confPass.value;

    if (pass1Value === confPassValue){
      feed.innerHTML = `<p style="color:green;"> GG well play tu viens d'envoyer un formulaire dans le vent </p>`
        console.log('allo s"est vide');
    }
    else {
       
     feed.innerHTML = `<p style="color:red;"> GG well play t'es null </p>`
    Form.reset();
    }
});

/**
* Empêchez la soumission du formulaire par défaut lorsque l'on clique sur Valider
* Comparez les 2 champs de mot de passe
* -> s'ils sont différents, affichez un message d'erreur "Vos mots de passe sont différents" en rouge dans la div d'id feedback
* -> s'ils sont identiques, affichez un message "C'est ok" en vert dans la div d'id feedback
*/
//C'est juste pour montrer textContent (ou innerText), rien de bien foufou dans ce code

/*const title = document.getElementById("title");
title.textContent = "Mon super formulaire";

/**
 * Empêchez la soumission du formulaire par défaut lorsque l'on clique sur Valider
 * Comparez les 2 champs de mot de passe
 * -> s'ils sont différents, affichez un message d'erreur "Vos mots de passe sont différents" en rouge dans la div d'id feedback
 * -> s'ils sont identiques, affichez un message "C'est ok" en vert dans la div d'id feedback
 * BONUS : "vider" le formulaire si c'est ok
 */

//Une correction possible

/*const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const feedbackDiv = document.getElementById("feedback");

form.addEventListener("submit", (e) => { //syntaxe de fonction fléchée
    //empêche l'action par défaut de l'événement (ici empêche la soumission du formulaire : refresh complet de la page, modification de l'URL si méthode GET, formulaire remis à 0, ...)
  e.preventDefault();
  //Si les valeurs dans nos inputs sont identiques
  // /!\ ne pas oublier .value, sinon on comparerait deux éléments HTML
  if (password.value === confirmPassword.value) {
    feedbackDiv.innerHTML = `<p style="color: green;">C'est ok</p>`;
    //remets le formulaire à 0
    form.reset();
  } else { //sinon
    feedbackDiv.innerHTML = `<p style="color: red;">Vos mots de passe sont différents</p>`;
  }
});*/
//C'est juste pour montrer textContent (ou innerText), rien de bien foufou dans ce code

const title = document.getElementById("title");
title.textContent = "Mon super formulaire";

/**
 * Empêchez la soumission du formulaire par défaut lorsque l'on clique sur Valider
 * Comparez les 2 champs de mot de passe
 * -> s'ils sont différents, affichez un message d'erreur "Vos mots de passe sont différents" en rouge dans la div d'id feedback
 * -> s'ils sont identiques, affichez un message "C'est ok" en vert dans la div d'id feedback
 * BONUS : "vider" le formulaire si c'est ok
 */

//Une correction possible

const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const feedbackDiv = document.getElementById("feedback");

form.addEventListener("submit", (e) => { //syntaxe de fonction fléchée
    //empêche l'action par défaut de l'événement (ici empêche la soumission du formulaire : refresh complet de la page, modification de l'URL si méthode GET, formulaire remis à 0, ...)
  e.preventDefault();
  //Si les valeurs dans nos inputs sont identiques
  // /!\ ne pas oublier .value, sinon on comparerait deux éléments HTML
  if (password.value === confirmPassword.value) {
    feedbackDiv.innerHTML = `<p style="color: green;">C'est ok</p>`;
    //remets le formulaire à 0
    form.reset();
  } else { //sinon
    feedbackDiv.innerHTML = `<p style="color: red;">Vos mots de passe sont différents</p>`;
  }
});