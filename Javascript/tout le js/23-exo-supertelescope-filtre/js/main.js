let images = [
    {chemin:"img/planete1.png",largeur:100,posX:100,posY:200,type:"planetes"},
    {chemin:"img/planete2.png",largeur:200,posX:600,posY:300,type:"planetes"},
    {chemin:"img/planete3.png",largeur:150,posX:700,posY:50,type:"planetes"},
    {chemin:"img/planete4.png",largeur:180,posX:200,posY:300,type:"planetes"},

    {chemin:"img/objet1.png",largeur:200,posX:800,posY:400,type:"objets"},
    {chemin:"img/objet2.png",largeur:100,posX:1050,posY:340,type:"objets"},
    {chemin:"img/objet3.png",largeur:200,posX:770,posY:500,type:"objets"},
    {chemin:"img/objet4.png",largeur:200,posX:900,posY:800,type:"objets"},

    {chemin:"img/etoile1.png",largeur:250,posX:50,posY:500,type:"etoiles"},
    {chemin:"img/etoile2.png",largeur:150,posX:100,posY:350,type:"etoiles"},
    {chemin:"img/etoile3.png",largeur:170,posX:280,posY:450,type:"etoiles"},

    {chemin:"img/astre1.png",largeur:150,posX:900,posY:100,type:"astres"},
    {chemin:"img/astre2.png",largeur:100,posX:1100,posY:200,type:"astres"},
];

function genererImage(chemin,largeur,posX,posY,type){
    let newImg = document.createElement("img");     // <img>
    newImg.setAttribute("src",chemin);              // <img src="img/planete1.png">
    newImg.setAttribute("alt","image ");            // <img src="img/planete1.png" alt="planete 1">
    newImg.style.width=largeur+"px";                // <img src="img/planete1.png" alt="planete 1" style="width:200px">
    newImg.style.left=posX+"px";    // <img src="img/planete1.png" alt="planete 1" style="width:200px;left:200px">
    newImg.style.top=posY+"px";     // <img src="img/planete1.png" alt="planete 1" style="width:200px;left:200px;top:100px;">
    newImg.className="spaceElement "+type;          // <img class="spaceElement planetes" src="img/planete1.png" alt="planete 1" style="width:200px;left:200px;top:100px;">
    document.body.appendChild(newImg);
}

images.forEach(function(image,i){
    genererImage(image.chemin,image.largeur,image.posX,image.posY,image.type);
});

function majFiltre(select){

    let typeChoisi = select.value;

    // d'abord, on cache tous les éléments
    let tousLesElements = document.querySelectorAll(".spaceElement");
    cacherElements(tousLesElements);

    // ensuite, on affiche les éléments qui ont la classe correspondant au typeChoisi
    let elementsChoisis = document.querySelectorAll("."+typeChoisi);
    afficherElements(elementsChoisis);

}

function cacherElements(elements){
    elements.forEach(function(element,i){
        element.style.display="none";
    });
}

function afficherElements(elements){
    elements.forEach(function(element,i){
        element.style.display="block";
    });
}