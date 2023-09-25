/*

// pop up 1 bouton
alert('pop-up 1 bouton');




// console

console.log('hello world!')
console.info('hello world!')
console.error('hello world!')




document.body.innerHTML = "Hello, world";
document.body.innerHTML += " Bienvenue, monde";





//  pop up avec 2 boutton et mémorisation du choix
var confirmation = confirm("Confimez vous la suppression");
console.log(confirmation);

// si la variable vaut true
if(confirmation == true) {
    alert('Données supprimées');
} else {
    alert('Données conservées');
}




var age = Number(prompt("Quel age avez vous ?"));

if(age < 18) {
    alert("Vous êtes mineur");
} else {
    alert("Vous êtes majeur");
}
var ageSuivant = age+1;
console.log(ageSuivant);




//  opérateurs de calculs
var i = 0;
i = i + 1; // + - * %
i++; // --
i+=1; // -= += /= *=
console.log(i);

//var 
var nom = "toto";
var nom = "tata";
console.log(nom); // tata

//let
let nom ="toto";
let nom ="tata"; // erreur



if(true) {
    // var nom = "toto";       //portée globale
    // let nom = "toto";       //portée locale(limité)
}
console.log(nom);


//let
/*
let nom = "toto";
let nom = "tata"; //erreur (let déclaration non possible)


//const
const nom = "toto";
nom = "tata"; //erreur (const Déclaration et Réaffectation non possible)

// VAR : redéclaration possible, réaffectation possible, portée globale sauf si déclarée dans une fonction
// LET : redéclaration impossible, réaffectation possible, portée locale aux 1eres accolades où elle est déclarée
// CONST : redéclaration impossible, réaffectation impossible, portée locale aux 1eres accolades où elle est déclarée

// concatenation

let nom = "toto";

// cosole.log("bonjour" + nom);

//let saltation = "Bonjour" + nom // V1

//let salutation = "Bonjour";
// salutation += nom; // V2

let salutation = "Bonjour ${nom}"; // V3
(template strings -ES6) = altGr+7;



// numéro de jour de semaine
let numJour = 6;

switch(numJour){
    case 1:
        var jour = "lundi";
        break;
    case 2:
        var jour = "mardi";
        break;
    case 3:
        var jour = "mercredi";
        break;
    case 4:
        var jour = "jeudi";
        break;
    case 5:
        var jour = "vendredi";
        break;
    default:
        var jour = "week-end";
        break;
}

console.log(jour);





// BOUCLE FOR (pour i allant de 1 à 5 par pas de 1)
for(var i=1 ; i<=5 ; i++){
    console.log(i);
}

// BOUCLE WHILE (tant que i <= 5)
var i=1;
while(i<=5){
    console.log(i);
    i++;
}

// DO WHILE
var i=1;
do{
    console.log(i);
    i++;
} while(i<=5)

for(var i=1 ; i<=5 ; i++){
    // if(i==2) break; // break = sortie de la boucle
    if(i==2) continue; // continue = force l'itération suivante (prochaine boucle)
    console.log(i);

*/

// FONCTION SANS VALEUR DE RETOUR
// déclaration
function saluer(){
    console.log("Bonjour");
}
// utilisation (appel)
saluer();

// FONCTION AVEC VALEUR DE RETOUR
// déclaration
function getSalutation(){
    return "Bonjour";
}
// utilisation (appel)
// let salutation = getSalutation();
// console.log(salutation);         // ou bien directement : console.log(getSalutation());


// PASSAGE DE PARAMETRES / ARGUMENTS ET VALEURS PAR DEFAUT

// déclaration
function saluer(prenom,nom=""){                // valeur par défaut en ES6
    // if(nom == undefined) nom="";            // valeur par défaut en ES5
    console.log("Bonjour "+prenom+" "+nom);
}

// utilisation (appel)
saluer("Ali","HH");
saluer("Ilyes");


// PORTEE DES VARIABLES PAR RAPPORT AUX FONCTIONS
// si une variable (comme maVariableGlobale) est définie dans le prog. principal
// elle est également connue de chaque fonction
// si une variable (comme maVariableDeFonction) est définie dans une fonction
// elle est locale à celle-ci et non-connue du prog. principal

function maFonction(){
    console.log(maVariableGlobale);         // 1
    maVariableGlobaleDeFonction = 1;        // variable globale (à éviter, mauvaise pratique)
    var maVariableDeFonction = 1;           // variable locale à la fonction
    // console.log(maVariableDeFonction);   // 1
}

let maVariableGlobale = 1;
maFonction();
console.log(maVariableGlobale);             // 1
console.log(maVariableGlobaleDeFonction);   // 1
console.log(maVariableDeFonction);          // erreur


// FONCTIONS ANONYMES et FONCTIONS FLECHEES

function saluer(prenom){                  // v1 (fonction normale / nommée)
    console.log("Bonjour "+prenom); 
} 

let saluer = function(prenom){            // v2 (fonction anonyme)
    console.log("Bonjour "+prenom);
}

let saluer = (prenom) => {                // v3 (fonction fléchée - ES6)
    console.log("Bonjour "+prenom);
}

saluer("Yanis");