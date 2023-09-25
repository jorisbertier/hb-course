let images = [
    {chemin:"img/planete1.png",largeur:100,posX:100,posY:200},
    {chemin:"img/planete2.png",largeur:200,posX:600,posY:300},
    {chemin:"img/planete3.png",largeur:150,posX:700,posY:50},
    {chemin:"img/planete4.png",largeur:180,posX:200,posY:300},

    {chemin:"img/objet1.png",largeur:200,posX:800,posY:400},
    {chemin:"img/objet2.png",largeur:100,posX:1050,posY:340},
    {chemin:"img/objet3.png",largeur:200,posX:770,posY:500},
    {chemin:"img/objet4.png",largeur:200,posX:900,posY:800},

    {chemin:"img/etoile1.png",largeur:250,posX:50,posY:500},
    {chemin:"img/etoile2.png",largeur:150,posX:100,posY:350},
    {chemin:"img/etoile3.png",largeur:170,posX:280,posY:450},

    {chemin:"img/astre1.png",largeur:150,posX:900,posY:100},
    {chemin:"img/astre2.png",largeur:100,posX:1100,posY:200},
];

function getRandomNumber(min,max){
    return Math.max(min,Math.round(Math.random()*max));
}

function genererImage(chemin,largeur,posX,posY){
    let newImg = document.createElement("img");     // <img>
    newImg.setAttribute("src",chemin);              // <img src="img/planete1.png">
    newImg.setAttribute("alt","image ");            // <img src="img/planete1.png" alt="planete 1">
    newImg.style.width=largeur+"px";                // <img src="img/planete1.png" alt="planete 1" style="width:200px">
    newImg.style.left=posX+"px";    // <img src="img/planete1.png" alt="planete 1" style="width:200px;left:200px">
    newImg.style.top=posY+"px";     // <img src="img/planete1.png" alt="planete 1" style="width:200px;left:200px;top:100px;">
    document.body.appendChild(newImg);
}

images.forEach(function(image,i){
    console.log(image.chemin,image.largeur,image.posX,image.posY);
    genererImage(image.chemin,image.largeur,image.posX,image.posY);
});

