let canvas = document.getElementById('c1');
let ctx =canvas.getContext('2d');


ctx.fillStyle = '#4444CC';
//nuance de bleu pour le réctangle
ctx.fillRect(50, 25, 200, 100);
//création d'un réctangle vide avec strokeRect
// creation d'un réctangle plein avec fillRect

ctx.fillStyle = '#DDDD44';
//Nuance de jaune
ctx.fillRect(350, 25, 200, 100);

ctx.strokeStyle = 'purple';
//Violet
ctx.strokeRect(50, 175, 200, 100);

ctx.strokeRect(350, 175, 200, 100);

ctx.clearRect(150, 75, 300, 150);
//On va également pouvoir effacer une zone rectangulaire dans notre élément canvas en utilisant cette fois-ci la méthode clearRect().