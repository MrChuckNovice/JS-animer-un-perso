const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;







document.addEventListener('keydown', function (event) {
    //déplacer
    if (event.code == 'ArrowUp') {
        playerWalk = playerWalk + 1;
        if (playerWalk % 2 == 1) {
            player.style.backgroundImage = 'url("img/link-walkingback.png")';
        } else {
            player.style.backgroundImage = 'url("img/link-walkingback2.png")';
        }
        if (player.offsetTop > 0) {
            player.style.top = (player.offsetTop - moveSize) + "px";
        }
    } else if (event.code == 'ArrowRight') {

        playerWalk = playerWalk + 1;
        if (playerWalk % 2 == 1) {
            player.style.backgroundImage = "url('img/link-walkingright.png')";
        } else {
            player.style.backgroundImage = "url('img/link-walkingright2.png')";
        }
        player.style.left = (player.offsetLeft + moveSize) + "px";
    } else if (event.code == 'ArrowDown') {
        playerWalk = playerWalk + 1;
        if (playerWalk % 2 == 1) {
            player.style.backgroundImage = "url('img/link-walkfront2.png')";
        } else {
            player.style.backgroundImage = "url('"
        }
        
        if(player.offsetTop ){
          player.style.top = (player.offsetTop + moveSize) + "px";  
        }
    } else if (event.code == 'ArrowLeft') {
        playerWalk = playerWalk + 1;
        player.style.backgroundImage = "url('img/link-walkingleft.png')";
        if (player.offsetLeft > 0) {
        player.style.left = (player.offsetLeft - moveSize) + "px";
        ccdvf
    }
}});