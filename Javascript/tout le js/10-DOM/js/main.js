/*
// SELECTIONS DE NOEUDS
// l'objectif est de récupérer un ou plusieurs noeuds en vue
// de pouvoir les lire ou les modifier

// CAS 1 : sélection d'un seul noeud
let n = document.querySelector(".titre");   // ici, par classe
console.log(n);

// CAS 2 : sélection d'une liste de noeuds (NodeList)
let liste = document.querySelectorAll("h1"); // ici, par balise
liste.forEach(function(n,i){
    console.log(i,n);
});
*/

// LECTURE ET MODIFICATIONS DE NOEUDS

// sélection préalable
let n = document.querySelector("#t1"); // ici, par id
console.log(n);

// au niveau du contenu
console.log(n.innerHTML);   // lecture
n.innerHTML = "Hello !";    // écriture

// au niveau des id
console.log(n.id);          // lecture
n.id="titre";               // écriture

// au niveau des classes
console.log(n.className);   // lecture sous forme de chaine
console.log(n.classList);   // lecture sous forme de tableau
n.className = "titre";      // écriture sous forme de chaine
n.classList.add("gros");    // ajout au tableau de classes
n.classList.remove("gros"); // suppression du tableau de classes
n.classList.toggle("gros"); // ajout/suppression du tableau de classes

// au niveau des styles
// n.style.cssText = "color:blue;background-color:yellow"; // écriture des css
n.style.color = "blue";                             // écriture de la propriété color
n.style.backgroundColor = "yellow";                 // écriture de la propriété background-color
console.log(n.style.color);                         // lecture de la propriété color 
const cssObj = window.getComputedStyle(n,null);     // récup. de la valeur d'une prop dans l'absolu
console.log(cssObj.getPropertyValue("display"));    // récup. de la valeur d'une prop dans l'absolu

// au niveau des attributs (hormis id / class / style)
n.setAttribute("title","infobulle");        // écriture
console.log(n.getAttribute("title"));       // lecture