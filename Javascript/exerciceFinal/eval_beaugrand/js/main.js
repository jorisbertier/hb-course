let posX = 0;
let posY = 0;
let pas = 20;
let police = "Arial";
let images = ["img/can_bleue.png","img/can_jaune.png","img/can_rouge.png","img/can_verte.png"];
let zone1 = document.querySelector("#zone1");
zone1.style.background="white url(img/can_bleue.png) no-repeat center center";

let choixCouleurs = document.querySelector("#choixCouleurs");
let zoneTexte = document.querySelector("#zoneTexte");
let ligne = document.querySelector("#ligne");

images.forEach(function(image,i){
    let vignetteCanette = document.createElement("img");    // <img>
    vignetteCanette.setAttribute("src",image);              // <img src="img/can_bleue.png">
    vignetteCanette.setAttribute("width","100");            // <img src="img/can_bleue.png" width="100">
    vignetteCanette.onclick=function(e){
        let balise = e.target;
        let cheminBalise = balise.getAttribute("src");
        zone1.style.background=`white url(${cheminBalise}) no-repeat center center`;
    };
    choixCouleurs.appendChild(vignetteCanette);
})

// on appelle majTexte() si le texte de ligne evolue
ligne.onkeyup=function(e){
    majTexte();
};

function majTexte(){
    zoneTexte.innerHTML=ligne.value;
    zoneTexte.style.left=posX+"px";
    zoneTexte.style.top=posY+"px";
    zoneTexte.style.fontFamily=police;
}

// on appelle majTexte() au chargement
majTexte();

// GESTION DE LA POSITION
function aGauche(e){
    posX-=pas;
    majTexte();
}
function aDroite(e){
    posX+=pas;
    majTexte();
}
function enHaut(e){
    posY-=pas;
    majTexte();
}
function enBas(e){
    posY+=pas;
    majTexte();
}


// GESTION DES POLICES

function arial(e){
    police="Arial";
    majTexte();
}
function verdana(e){
    police="Verdana";
    majTexte();
}
function courrier(e){
    police="Courrier";
    majTexte();
}