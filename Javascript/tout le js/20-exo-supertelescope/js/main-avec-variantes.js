let largeur = 200;
let posX = 200;
let posY = 50;

let conteneur = document.body;
// let conteneur = document.querySelector("#maDiv");
// let conteneur = document.getElementById("maDiv");

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

// COMMENT GROUPER 4 DONNEES POUR 4 IMAGES...

/*
// V1
//                  0                   1                   2                   3
let images = ["img/planete1.png","img/planete2.png","img/planete3.png","img/planete4.png"];
let largeurs = [100,200,300,400];
let posXs = [500,600,700,800];
let posYs = [900,1000,1200,1300];
images.forEach(function(image,i){
    console.log(image,largeurs[i],posXs[i],posYs[i]);
});

// v2
let image0 = ["img/planete1.png",100,500,900];
let image1 = ["img/planete2.png",200,600,1000];
let image2 = ["img/planete3.png",300,700,1200];
let image3 = ["img/planete4.png",400,800,1300];
let images = [image0,image1,image2,image3];
images.forEach(function(image,i){
    console.log(image[0],image[1],image[2],image[3]);
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
*/

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