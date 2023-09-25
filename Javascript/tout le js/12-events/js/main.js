// v1
function clic(balise,couleur){
    console.log(balise);
    balise.style.color=couleur;
}

// v2
function clicE(e,couleur){
    console.log(e);
    let balise = e.target;
    balise.style.color=couleur;
}

// v3 
let h2 = document.querySelector("h2");

// v3.1 (fonction nommée)
// h2.onclick=clicE2;
// function clicE2(e){
//     console.log(e);
//     let balise = e.target;
//     balise.style.color="blue";
// }

// v3.2 (fonction anonyme)
// h2.onclick = function(e){
//     let balise = e.target;
//     balise.style.color="blue";
// }

// v3.3 (fonction fléchées)
// h2.onclick = (e) => {
//     let balise = e.target;
//     balise.style.color="blue";
// }

// v3.4
h2.addEventListener("click",clicE2);
function clicE2(e){
    let balise = e.target;
    balise.style.color="blue";
}