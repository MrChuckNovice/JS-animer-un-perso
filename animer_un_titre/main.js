const title = document.getElementById('title');
 var count= 0;
 if(count <5){changeTitle()}
function changeTitle(){
   count= ++count ;
  switch(count){
    case (count=1):
     title.innerText = "je suis designer web";
     break;
    case (count=2):
     title.innerText = "je sais concevoir";
    break;
    case (count=3):
     title.innerText = "et développer";
    break;
    case (count=4):
     title.innerText = "des sites web";
     console.log(count);
    break;
    } 
    
}



setInterval(changeTitle, 3000);