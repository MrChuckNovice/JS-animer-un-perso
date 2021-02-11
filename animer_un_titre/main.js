const title = document.getElementById('title');
var count= 0;
function changeTitle(){
    switch (count){
    case "1";
    title.innerText = "je suis designer web";
    break;
    case "2";
    title.innerText = "je sais concevoir";
    break;
    case "3";
    title.innerText = "et développer";
    break;
    case "4";
    title.innerText = "des sites web";
    break;
    }
}

setInterval(changeTitle, 3000);