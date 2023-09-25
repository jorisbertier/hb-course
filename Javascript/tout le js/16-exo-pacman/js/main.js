// variables globales
let posX=0;
let posY=0;
let echelle = 1;    // 1 / -1
let rotation = 0;   // 0 / -90 / 90

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
        if(posX<0) posX=0;
        echelle=-1;
        rotation=0;
    }

    // en cas d'appui sur flèche droite
    if(e.key=="ArrowRight"){
        posX+=100;
        if(posX>window.innerWidth-pacman.width){
            posX=window.innerWidth-pacman.width;
        }
        echelle=1;
        rotation=0;
    }

    // en cas d'appui sur flèche haut
    if(e.key=="ArrowUp" && posY>=100){
        posY-=100;
        if(posY<0) posY=0;
        echelle=1;
        rotation=-90;
    }

    // en cas d'appui sur flèche bas
    if(e.key=="ArrowDown"){
        posY+=100;
        if(posY>window.innerHeight-pacman.height){
            posY=window.innerHeight-pacman.height;
        }
        echelle=1;
        rotation=90;
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
    pacman.style.transform=`scaleX(${echelle}) rotate(${rotation}deg)`;
}