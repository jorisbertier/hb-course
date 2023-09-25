/*

let image = document.querySelectorAll('img');
let image1 = document.querySelector('img:nth-child(1)');
let image2 = document.querySelector('img:nth-child(2)');
let image3 = document.querySelector('img:nth-child(3)');
let image4 = document.querySelector('img:nth-child(4)');
let zone1Background = document.querySelector('.zone1');




image1.addEventListener('click', function(){
    zone1Background.style.background = "url(./img/can_bleue.png) no-repeat";
    zone1Background.style.backgroundSize = "contain";
    zone1Background.style.backgroundPosition = "center";

})
image2.addEventListener('click', function(){
    zone1Background.style.background = "url(./img/can_jaune.png) no-repeat";
    zone1Background.style.backgroundSize = "contain";
    zone1Background.style.backgroundPosition = "center";

})
image3.addEventListener('click', function(){
    zone1Background.style.background = "url(./img/can_rouge.png) no-repeat";
    zone1Background.style.backgroundSize = "contain";
    zone1Background.style.backgroundPosition = "center";

})
image4.addEventListener('click', function(){
    zone1Background.style.background = "url(./img/can_verte.png) no-repeat";
    zone1Background.style.backgroundSize = "contain";
    zone1Background.style.backgroundPosition = "center";

})
//PARTIE 2 TEXTE

let zoneText = document.querySelector('#zoneTexte');
let ligneText = document.querySelector('#ligne');



ligneText.addEventListener('keyup', function() {
    console.log(ligneText.value);
    zoneText.innerHTML = ligneText.value;
    zoneText.style.left = posX +"px";
    zoneText.style.top = posY +"px";
})


// PARTIE 3

// let posX = 0;
// let posY = 0;
// let pos = 9;
// let posHaut = document.querySelector('#posHaut');

// posHaut.addEventListener('click', function() {
//     positionX += 100;
    
// })
// zoneText.style.left -= 10- posX + "px";

//PARTIE 4

let btsPolices = document.querySelectorAll(".data-police");

console.log(btsPolices);
btsPolices.forEach(function(btPolice) {
    btPolice.addEventListener("click", function() {
        let police = btPolice.getAttribute("data-police");
        zoneText.style.fontFamily = "arial";
    })
    
})

// for (let i = 0; i < btsPolices.length; i++) {
//     console.log(btsPolices);
// }

//PARTIE 5 COULEUR

let colornoir = document.querySelector('.color1');

colornoir.addEventListener('click', function() {
    zoneText.style.color = "black";
})*/










// Exercicde refait


//PARTIE 1 choix couleur

let zone1 = document.querySelector(".zone1");
let choixCouleurs = document.querySelector("#choixCouleurs");
let image1 = document.querySelector('img:nth-child(1)');
let image2 = document.querySelector('img:nth-child(2)');
let image3 = document.querySelector('img:nth-child(3)');
let image4 = document.querySelector('img:nth-child(4)');


image1.onclick = function() {
    zone1.style.background = "url(./img/can_bleue.png) no-repeat center center";
}
image2.onclick = function() {
    zone1.style.background = "url(./img/can_jaune.png) no-repeat center center";
}
image3.onclick = function() {
    zone1.style.background = "url(./img/can_rouge.png) no-repeat center center";
}
image4.addEventListener('click', function(){
    zone1.style.background = "url(./img/can_verte.png) no-repeat center center";
})

// VERSION REFACTORISE
/*
const zone1 = document.querySelector(".zone1");
const choixCouleurs = document.querySelector("#choixCouleurs");
const images = document.querySelectorAll("img");

function changeBackground(imageUrl) {
  zone1.style.background = `url(${imageUrl}) no-repeat center center`;
}

images.forEach((image) => {
  image.addEventListener("click", () => {
    const imageUrl = image.getAttribute("src");
    changeBackground(imageUrl);
  });
});
*/

//PARTIE 2 ECRIRE TEXTE A REFAIRE

let zoneText = document.querySelector("#zoneTexte");
let choixText = document.querySelector("#ligne");


choixText.addEventListener('keyup', function() {
    zoneText.innerHTML = choixText.value;
})


/*
let zoneText = document.querySelector('#zoneTexte');
let ligneText = document.querySelector('#ligne');



ligneText.addEventListener('keyup', function() {
    console.log(ligneText.value);
    zoneText.innerHTML = ligneText.value;

})
*/

// PARTIE 3 ECRIRE POSITION       !!!! attention a la balise a ou atre qui recharge la page est fait bugé 


let gauche = document.querySelector('#posGauche');
let droite = document.querySelector('#posDroite');
let haut = document.querySelector('#posHaut');
let bas = document.querySelector('#posBas');
let restart = document.querySelector('#restart');
let posX = 0;
let posY = 0;
let deplacement = 10;
/*
gauche.onclick = function() {
    posX -= deplacement;
    zoneTexte.style.left = posX+"px";
}

droite.addEventListener('click', function() {
    posX += deplacement;
    zoneTexte.style.left = posX +"px";
})
haut.onclick = function() {
    posY -= deplacement;
    zoneTexte.style.top = posY+"px";
}

bas.addEventListener('click', function() {
    posY += deplacement;
    zoneTexte.style.top = posY +"px";
})*/

gauche.addEventListener('click', function() {
    posX -= deplacement;
    zoneText.style.left = posX+"px";
})


// PARTIE 4 POLICE

let policeArial = document.querySelector(".arial");
let policeVerdana = document.querySelector(".verdana");
let policeCourrier = document.querySelector(".courrier");

policeArial.addEventListener('click', function() {
    zoneTexte.style.fontFamily = "Arial";
})

policeVerdana.onclick = function() {
    zoneTexte.style.fontFamily = "Verdana";
}
policeCourrier.onclick = function() {
    zoneTexte.style.fontFamily = "Courrier";
}

//PARTIE 5 COULEUR

let colorBlanc = document.querySelector('.blanc');
let colorBlack = document.querySelector('.noir');

colorBlanc.onclick = function() {
    zoneTexte.style.color = "white";
}
colorBlack.onclick = function() {
    zoneTexte.style.color = "black";
}