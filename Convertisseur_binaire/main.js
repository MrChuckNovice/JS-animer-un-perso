const convert = document.getElementById("convert");

//recup une fois pour plusieur clique, 
let outputCrypted= document.getElementById("crypted");
//fonction Fléché 
//e=event cela passe l'Evenement qui 
convert.addEventListener("click", (e)=>{
    let inputCode= document.getElementById("msgToCode").value;
    console.log(toString.call(outputCrypted));
    outputCrypted.value="";
           for (var i= 0; i < inputCode.length; i++) {
        outputCrypted.value += inputCode[i].charCodeAt(0).toString(2) + " ";
      }   
    outputCrypted.innerHTML = outputCrypted.value;
    console.log(outputCrypted.value);
});
  
//charCodeAt = sa renvoie le code ASCII;
//toString(2) = renvoi le code  en Binaire;
