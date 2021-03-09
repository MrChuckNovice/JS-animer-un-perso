window.onscroll =  scrollIndicator ;

function scrollIndicator() { 
  //faire (a/b)*100
    let scrollBar = document.body.scrollTop || document.documentElement.scrollTop;
    //document.body = Retourne l'élément <body> ou <frameset> du document courant.
   console.log(document.body.scrollTop);
   //document.documentElement = Document.documentElementrenvoie l'Element qui est l'élément racine du document (par exemple, l'élément <html> pour les documents HTML).
   //Element.scrollTop = Définit ou obtient le nombre de pixels dont le contenu de l'élément a défilé vers le haut.
   console.log(document.documentElement.scrollTop)

   let height = document.documentElement.scrollHeight = document.documentElement.clientHeight;

   console.log(document.documentElement.scrollHeight)
   console.log(document.documentElement.clientHeight)
   //Element.scrollHeight = L'attribut en lecture seule element.scrollHeight est une mesure de la hauteur du contenu d'un élément qui inclut le contenu débordant et non visible à l'écran. La valeur scrollHeight est égale à la hauteur minimum dont l'élément aurait besoin pour que le contenu rentre dans le viewpoint sans utiliser de barre de défilement. Cela inclut les marges internes mais pas les marges externes.
    
   let scroll = (scrollBar/height)*100;
  document.getElementById("bar").style.width = scroll + "%";
}
//Déclarez une variable qui indique le nombre de pixels dont le contenu de l'élément <html> a défilé vers le haut ;
//Déclarez une autre variable dans laquelle vous récupérez la mesure de la hauteur du contenu de l'élément <html> (cette hauteur est constante tant que vous ne redimensionnez pas la fenêtre) ;
//Déclarez une variable qui renvoie la hauteur intérieure en pixels de l'élément <html> (cette hauteur est elle aussi constante tant que vous ne redimensionnez pas la fenêtre) ;
//Déclarez une variable qui contient une opération arithmétique : soustrayez la hauteur intérieure en pixels de l'élément <html> de la hauteur du contenu de l'élément <html>  afin d'obtenir la hauteur de votre écran ;
//Déclarez une variable qui contient le calcul du pourcentage de votre scroll  : le nombre de pixels dont le contenu de l'élément <html> a défilé vers le haut divisé par la hauteur de votre écran, et multipliez le résultat par 100 ;
//Appliquez la valeur obtenue à la width de la div qui a l'id « bar ».