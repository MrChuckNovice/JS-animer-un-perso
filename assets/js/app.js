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
//console.log(test);*/

let jean = {
    nom: "Jean",
    bonjour: function() {
        setTimeout(function() {
            console.log(`Mon nom est ${this.nom}`);
        }, 1000);
        
    }
}

jean.bonjour();

