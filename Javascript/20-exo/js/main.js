// ETAPE 1 : créer une tableau d'images JS listant toutes les images du dossier img récupéré (sauf fond.jpg)
// ETAPE 2 : parcourir ce tableau afin d'afficher chacune des images à la suite dans la page
// ETAPE 3 : préciser en CSS que ces images sont positionnées en absolute afin de pouvoir utiliser left / top par la suite
// ETAPE 4 : ajouter a chacune des image des coordonnées aléatoires (axes X et Y) en leur ajoutant des propriétés CSS left et top
// ETAPE 5 : ajouter en CSS un fond à la page en utilisant l'image fond.jpg fournie

let imgSky = [
    "img/astre1.png",
    "img/astre2.png",
    "img/etoile1.png",
    "img/etoile2.png",
    "img/etoile3.png",
    "img/objet1.png",
    "img/objet2.png",
    "img/objet3.png",
    "img/objet4.png",
    "img/planete1.png",
    "img/planete2.png",
    "img/planete3.png",
    "img/planete4.png"
    
]
//ceation de donnée aléatoire
let random = Math.floor(Math.random()*250);
let positionX = random;
let positionY = random;

console.log(random);

let addImg = document.querySelector('.bloc');


for(let i = 0; i < imgSky.length; i++){
    addImg.innerHTML += `<img src="${imgSky[i]}" width="100px">`;
    addImg[i].style.top = Math.floor(Math.random()*250)+"px";
    addImg[i].style.left = Math.floor(Math.random()*250)+"px";
}



let largeur = 200;
let posX = 200;
let posY = 50;

let conteneur = document.body;
// let conteneur = document.querySelector("#maDiv");
// let conteneur = document.getElementById("maDiv");


//CORRECTION EXERCICE
/*
// V1
conteneur.innerHTML = `<img src="img/planete1.png" alt="planete 1" style="width:${largeur}px;left:${posX}px;top:${posY}px;">`;

// V2
let newImg = document.createElement("img");     // <img>
newImg.setAttribute("src","img/planete1.png");  // <img src="img/planete1.png">
newImg.setAttribute("alt","planete1 ");         // <img src="img/planete1.png" alt="planete 1">
newImg.style.width=largeur+"px";                // <img src="img/planete1.png" alt="planete 1" style="width:200px">
newImg.style.left=posX+"px";// <img src="img/planete1.png" alt="planete 1" style="width:200px;left:200px">
newImg.style.top=posY+"px"; // <img src="img/planete1.png" alt="planete 1" style="width:200px;left:200px;top:100px;">
conteneur.appendChild(newImg);
*/

//                  0                   1                   2                   3
let images = ["img/planete1.png","img/planete2.png","img/planete3.png","img/planete4.png"];
//              0   1   2   3
let largeurs = [100,200,300,400];
let posXs = [500,600,700,800];
let posYs = [900,1000,1200,1300];

images.forEach(function(image,i){
    console.log(image,largeurs[i],posXs[i],posYs[i]);
});

// v3.1
let image0 = {chemin:"img/planete1.png",largeur:100,posX:500,posY:900};
let image1 = {chemin:"img/planete2.png",largeur:200,posX:600,posY:1000};
let image2 = {chemin:"img/planete3.png",largeur:300,posX:700,posY:1200};
let image3 = {chemin:"img/planete4.png",largeur:400,posX:800,posY:1300};
let images = [image0,image1,image2,image3];
images.forEach(function(image,i){
    console.log(image.chemin,image.largeur,image.posX,image.posY);
});


// v3.2
let images = [
    {chemin:"img/planete1.png",largeur:100,posX:500,posY:900},
    {chemin:"img/planete2.png",largeur:200,posX:600,posY:1000},
    {chemin:"img/planete3.png",largeur:300,posX:700,posY:1200},
    {chemin:"img/planete4.png",largeur:400,posX:800,posY:1300}
];
images.forEach(function(image,i){
    console.log(image.chemin,image.largeur,image.posX,image.posY);
});
