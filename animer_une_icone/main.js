var kunio = document.getElementById('kunio')
 var change = setInterval(balanceScale, 500);
 var image1 = 'url("img/kunio1")';
 var image2 = 'url("img/kunio2")';
function balanceScale(){
  if (kunio == true) {
      kunio.innerHTML = image1;
  }else if (image1 == true) {
      kunio.innerHTML = image2;
  } else {
      
  }
   
   
}
balanceScale();

 function stopFunction(){
     clearInterval(myVar);
 }
/* count = ++count;
   switch(count){
     case(count=1):
       kunio.style.backgroundImage= 'url("img/kunio2.png")';
       console.log(kunio);
      break;
      case(count=2):
       kunio.style.backgroundImage= 'url("img/kunio3.png")';
      break;  
      case(count=3):
       kunio.style.backgroundImage= 'url("img/kunio4.png")';
      break; 
      case(count=4):
       kunio.style.backgroundImage= 'url("img/kunio5.png")';
      break; 
      case(count=5):
       kunio.style.backgroundImage= 'url("img/kunio6.png")';
      break; 
      case(count=6):
       kunio.style.backgroundImage= 'url("img/kunio5.png")';
      break; 
      case(count=7):
       kunio.style.backgroundImage= 'url("img/kunio4.png")';
      break; 
      case(count=8):
       kunio.style.backgroundImage= 'url("img/kunio3.png")';
      break; 
      case(count=9):
       kunio.style.backgroundImage= 'url("img/kunio2.png")';
      break; 
      case(count=10):
       kunio.style.backgroundImage= 'url("img/kunio1.png")';
      break; 
 }
}*/