// ETAPE 1 
// Créer un tableau qui contient les 4 chemins d'images

// ETAPE 2
// Parcourir le tableau avec une boucle afin d'ajouter lors 
// de chaque boucle une nouvelle petite image à la page (body)

let imageadd = document.querySelector('.survolable');
let parent = document.querySelector('#test');

let tableau = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg"
];

let tableauadd = "";
for(let i = 0; i< tableau.length; i++){
imageadd.innerHTML += `<img src="${tableau[i]}">`;
document.querySelector("#test").className = "test";


}

// CORRECTION

// OK - ETAPE 1 
// Créer un tableau qui contient les 4 chemins d'images
//                  0           1           2           3
let images = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];

// OK - ETAPE 2
// Parcourir le tableau avec une boucle afin d'ajouter lors 
// de chaque boucle une nouvelle petite image à la page (body)
images.forEach(function(image,i){
    
    // console.log(i,image);
   
    // AJOUT D'ELEMENT A LA PAGE, V1
    document.body.innerHTML+=`<img src="${images[i]}" width='300' onclick="console.log(event)">`;

    /*
    // AJOUT D'ELEMENT A LA PAGE, V2
    // préparation de la nouvelle balise dans l'espace mémoire
    let nouvelleBalise = document.createElement("img"); // <img>
    nouvelleBalise.setAttribute("src",images[i]);       // <img src="img/1.jpg">
    nouvelleBalise.setAttribute("width","300");         // <img src="img/1.jpg" width="300">
    nouvelleBalise.onclick=function(e){alert("clic");}
    // injection de la balise préparée dans le DOM
    document.body.appendChild(nouvelleBalise);
    */

});
