function court(){
    console.log("VITE VITE");
}

/*
// DECLARATION D'OBJET v1
let superman = new Object();
// propriétés / attributs / caractéristiques / variables liées à un objet
superman.prenom = "Clark";
superman.nom = "Kent";
superman.genre = "Homme";
// méthodes / actions / fonctions liées à un objet
superman.voler = function(){ 
    console.log("VERS L'INFINIIIIII"); 
};
superman.courir = court;

// DECLARATION D'OBJET v2 (JSON : JavaScript Object Notation)
let superman = {
    prenom:"Clark",
    nom:"Kent",
    genre:"Homme",
    voler:function(){
        console.log("VERS L'INFINIIIIII"); 
    },
    courir:court
};

// DECLARATION D'OBJET v3 (avec une fonction)
// usine à Kryptonien
function Kryptonien(prenom_,nom_,genre_){
    this.prenom = prenom_;
    this.nom = nom_;
    this.genre = genre_;
    this.voler = function(){
        console.log("VERS L'INFINIIIIII"); 
    };
    this.courir = court;
}
// on instancie superman et superman2, de type Kryptonien (on passe commande à l'usine)
let superman =  new Kryptonien("Clark","Kent","Homme");
let superman2 =  new Kryptonien("Janett","Kent","Femme");
*/

// DECLARATION D'OBJET v4 (avec class - ES6)
class Extraterrestre{
    constructor(planete_,ville_){
        this.planete = planete_;
        this.ville = ville_;
    }
}

class Kryptonien extends Extraterrestre {
    constructor(prenom_,nom_,genre_){
        super("Krypton","Kryptonville");
        this.prenom = prenom_;
        this.nom = nom_;
        this.genre = genre_;
    }
    voler(){
        console.log("VERS L'INFINIIIIII"); 
    }
    courir(){
        console.log("VITE VITE"); 
    }
}

let superman = new Kryptonien("Clark","Kent","Homme");
let superman2 = new Kryptonien("Janett","Kent","Femme");

// UTILISATION
console.table(superman);
console.log(superman2); // à activer que pour v3 et v4
console.log(superman.prenom);
 
console.log("Il s'agit de "+superman.prenom+" "+superman.nom);
superman.voler();
superman.courir();