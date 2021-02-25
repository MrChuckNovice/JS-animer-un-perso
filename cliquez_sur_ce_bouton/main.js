const myBtn = document.getElementById('myBtn');
const cntClic = document.getElementById('cntClic');

var nbClic = 0; 

myBtn.addEventListener('click', function()
{
    ++ nbClic;
    cntClic.innerHTML = 'tu as cliquez ' +nbClic+ ' fois';
    console.log(nbClic);
});
