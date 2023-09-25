/*

// pop-up 1 bouton
alert("hello, world");

// console
console.log("hello, world");
console.warn("hello, world");
console.info("hello, world");
console.error("hello, world");

// affichage dans la page
// document.body.innerHTML="Hello, world"+"Bienvenue, monde";   // v1

document.body.innerHTML = "<h1>Hello, world</h1>";              // v2
document.body.innerHTML += "<h1>Bienvenue, monde</h1>";

// popup avec 2 boutons, et mémorisation du choix dans une variable
var confirmation = confirm("Confirmez-vous la suppression ?");
console.log(confirmation);

// si la variable = true
if(confirmation == true){ // == != < > <= >= && (et) || (ou) !
    alert("Données supprimées");
}else{
    // sinon
    alert("Données non-supprimées");
}


// pop-up avec champ de texte
var age = prompt("Quel age avez-vous ?");
age = Number(age);
// équivaut à : var age = Number(prompt("Quel age avez-vous ?"));

// si l'age est inférieur à 18
if(age<18){
    console.log("MINEUR");
    //autrement
}else{
    console.log("MAJEUR");
}

console.log(typeof age);

// age de l'année suivante
var ageSuivant = age + 1;
console.log(ageSuivant);

// opérateurs de calculs
var i = 0;
i = i + 1;  //  + - * / %
i++;        // --
i+=1;       // -= += /= *=
console.log(++i);
console.log(i);

// var
var nom = "toto";
var nom = "tata";
console.log(nom); // tata

// let
let nom = "toto";
let nom = "tata"; // erreur

if(true){
    // var nom = "toto";    // portée globale
    let nom = "toto";       // portée locale (limitée)
}
console.log(nom);

// const
const nom = "toto";
if(true){
    // const nom = "tata";
    console.log(nom);
}
console.log(nom);
// nom = "tata";       // erreur

// VAR : redéclaration possible, réaffectation possible, portée globale sauf si déclarée dans une fonction
// LET : redéclaration impossible, réaffectation possible, portée locale aux 1eres accolades où elle est déclarée
// CONST : redéclaration impossible, réaffectation impossible, portée locale aux 1eres accolades où elle est déclarée

// CONCATENATIONS

let nom = "toto";
// let salutation = "Bonjour" + nom; // v1
// let salutation = "Bonjour ";
// salutation += nom;                  // v2
let salutation = `Bonjour ${nom}`;      // v3 (template strings - ES6)` = altGr+7
console.log(salutation); 


// CONDITION IF / ELSE

let age = Number(prompt("Votre age svp ?"));

// v1
// if(age >= 18){
    //     var message = "Accès autorisé";
    // }else{
        //     var message = "Accès non-autorisé";
        // }
        
// v2
// if(age >= 18)
//     var message = "Accès autorisé";
// else
//     var message = "Accès non-autorisé";

// v3 (opérateur ternaire) 
// pratique dans le cas où on souhaite initialiser une variable à 2 valeurs possibles
var message = (age >= 18) ? "Accès autorisé" : "Accès non-autorisé";

console.log(message);

// un nombre positif ou négatif passé à if est converti en true, mais 0 est converti en false
// un undefined passé à un if est converti en false
// une chaine contenant au moins 1 caractère est convertie en vrai, sinon c'est converti en false

// si il y a des erreurs
if(1){
    // si l'expression du if est évaluée à true
    console.log("VRAI");
}else{
    // si l'expression du if est évaluée à false
    console.log("FAUX");
}

// CONDITION SWITCH

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
}
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