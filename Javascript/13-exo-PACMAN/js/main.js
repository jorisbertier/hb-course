window.onkeyup=function(e) {
console.log(e);
}


const mrgame = document.querySelector('img');

// mrgame.addEventListener('click', () => {
//     selectpop.style.visibility = "visible";
// });

// window.onkeydown=function(e) {
//     console.log(e.key);
//     if(e.key == "Enter"){
//         document.body.style.background ="yellow";
//    }
// }

let positionX = 0;
let positionY = 0;


window.onkeydown=function deplace(e) {
    if(e.key == "ArrowRight"){
    positionX += 100;
    mrgame.style.transform = "scaleX(1)";
    mrgame.style.left = positionX +"px";
    }if(e.key == "ArrowUp") {
    positionY -= 100;
        if(positionY <0){
            positionY = 0;
        }
    mrgame.style.transform = "scaleX(1)";
    mrgame.style.top = positionY +"px";
    }if(e.key == "ArrowLeft") {
        positionX -= 100;
        if(positionX <0){
            positionX = 0;
        }
    mrgame.style.left = positionX +"px";
    mrgame.style.transform = "scaleX(-1)";

    }if(e.key == "ArrowDown") {
        positionY += 100;
        if(positionY >200){
            positionY = 200;
        }
    mrgame.style.top = positionY +"px";
    mrgame.style.transform = "scaleY(-1)";
    }
    
}

//CORRECTION
// variables globales
let posX=0;
let posY=0;

// QU'EST CE QUI DOIT ETRE MODIFIE ICI ?
// on en déduit la sélection à faire
let pacman = document.querySelector("#pacman");

//position par défaut, au chargement
majPos();

// si une touche est appuyée
window.onkeyup=function(e){
    // console.log(e.key);

    // en cas d'appui sur flèche gauche
    if(e.key=="ArrowLeft"){
        posX-=100;
    }

    // en cas d'appui sur flèche droite
    if(e.key=="ArrowRight"){
        posX+=100;
    }

    // en cas d'appui sur flèche haut
    if(e.key=="ArrowUp"){
        posY-=100;
    }

    // en cas d'appui sur flèche bas
    if(e.key=="ArrowDown"){
        posY+=100;
    }

    // si l'une dès flèches à été appuyée
    if((e.key=="ArrowLeft") || (e.key=="ArrowRight") || (e.key=="ArrowUp") || (e.key=="ArrowDown")){
        majPos();
    }

}

// met à jour la position de pacman en utilisant les variables globales posX et posY
function majPos(){
    pacman.style.left=posX+"px";
    pacman.style.top=posY+"px";
}