const loading = document.getElementById("loadingAnimation");
const content = document.getElementById("displayContent");

window.onload = setTimeout(showContent, 3000);

function showContent(){
   content.style.display = "block"
}