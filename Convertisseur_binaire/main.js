const convert = document.getElementById("convert");

convert.addEventListener("click", function(){
    let inputCode= document.getElementById("msgToCode").value;
    let outputCrypted= document.getElementById("crypted");
     outputCrypted.value="";
           for (var i= 0; i < inputCode.length; i++) {
        outputCrypted.value += inputCode[i].charCodeAt(0).toString(2) + " ";
        console.log(outputCrypted.value);
       
}
});
  
//charCodeAt = sa renvoie le code ASCII;
//toString(2) = renvoi le code  en Binaire;
