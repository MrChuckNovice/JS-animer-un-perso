  
const resultDiv = document.getElementById("result");
const form = document.querySelector("form");
/**
//Version XHR   
//je créé un nouvel objet XHR
const xhr = new XMLHttpRequest();
//j'écoute sur la soumission de mon formulaire
form.addEventListener("submit", (e) => {
  //j'empêche l'action par défaut de l'événement, dans le cas de la soumission : un rechargement complet de la page, etc.
  e.preventDefault();
  //je créé une variable qui sera un ensemble de paires clé / valeur selon les inputs de mon formulaire
  const formData = new FormData(form);
  //j'ouvre une connexion avec le fichier PHP en méthode "POST"
  xhr.open("POST", "assets/php/ajax.php");
  //la connexion se fait et j'envoie mes données du formulaire (qui seront dans la superglobale $_POST dans mon fichier PHP)
  xhr.send(formData);
  //j'écoute sur le readystatechange de mon objet XHR : https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/readyState
  xhr.addEventListener("readystatechange", () => {
    //Si le readyState est à 4 et que le status est 200 (càd que tout est OK)
    if (xhr.readyState === 4 && xhr.status === 200) {
      //je récupère le JSON renvoyé dans une variable. Je parse le JSON afin d'obtenir un objet JavaScript
      const values = JSON.parse(xhr.response);
      console.log(values);
      //Je mets à jour le visuel avec les données reçues, syntaxe ES6 : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals
      resultDiv.innerHTML = `<p>Bonjour je m'appelle ${values.prénom} ${values.nom} et nous venons de faire l'asynchrone ! Et vous avez écrit dans texte : ${values.post.text} et dans texte2 : ${values.post.text2}</p>`;
      //je vide mon formulaire
      form.reset();
    }
  });
});
*/


//Version fetch
form.addEventListener("submit", (e) => {

  e.preventDefault();

  const formData = new FormData(form);

  //On communique avec le script passé en 1er argument sous forme de caractère
  fetch("assets/php/ajax.php", 
  //2ème argument de fetch, le corps de notre requête, dans notre cas on précise la méthode "POST" et le body (les données) soit le formData
  {
    method: "POST",
    body: formData
  })
  //Nous recevons une Response du serveur, nous retournons une Promise résolue qui contiendra les données parsées en JSON, soit un objet JS
  .then(response => response.json())
  //Nous recevons ENFIN nos données comme un objet JS
  .then(data => {
      //on manipule nos données
      console.log(data)

      resultDiv.innerHTML = `<p>Bonjour je m'appelle ${data.prénom} ${data.nom} et nous venons de faire l'asynchrone ! Et vous avez écrit dans texte : ${data.post.text} et dans texte2 : ${data.post.text2}</p>`;

      //je vide mon formulaire
      form.reset();
  })
  .catch(e => {
      console.error(e);
      resultDiv.innerHTML = `<p>Désolé, nous avons rencontré une erreur dans le système</p>`;
  });
});