/*
let nom = "toto";
console.log(nom);
console.log(typeof nom);
*/

/*
let nom = new String("toto");
console.log(nom);
console.log(nom.lenght);
console.log(nom.charAt(0));
console.log(nom.toUpperCase());
console.log(nom.replace("o", "a"));

*/

// exo 1 ecrire une fonction qui prend 2 chaine str1 et str2 et retourne TRUE
// si elles ont autant de caractères, sinon FALSE
/*
function memeNbr(string1, string2) {

    if(string1.length == string2.length){
        return true;
    } else {
        return false;
    }
}

console.log(memeNbr("salut", "salut"));
console.log(memeNbr("salut", "totot"));
console.log(memeNbr("salu", "salut"));
*/
// EXO 2 - Ecrire une fonction qui renvoie TRUE si une chaîne contient des espaces, sinon FALSE.
/*
function espace(string1) {
    if(string1.includes(" ")) {
        return true;
    }else {
        return false;
    }
}

console.log(espace("yo"));
console.log(espace("yo "));
console.log(espace("yodddddd"));
console.log(espace("yodddddd  "));
*/
// EXO 3 - Ecrire une fonction qui renvoie le nombre de mots d'une chaine.
/*
function nbrmot(chaine1) {
    return chaine1.split(" ").length;

}
console.log(nbrmot("salut toit toi"));
console.log(nbrmot("salut toit toi toi"));
*/

// EXO 4 - Ecrire une fonction qui prend une chaine et retourne la chaine inversée.
/*
function inverser(chaine) {
    return chaine.split('').reverse('');
}

console.log(inverser("salutt"));
*/

/*
function inverser(chaine) {
    let chain1 = "";
    for (i = chaine.length-1; i >= 0; i--) {
        chain1 = chain1 + chaine[i];
      }
      return chain1;
}


console.log(inverser("salut"));
console.log(inverser("bobob"));*/
// Expected output: "012345678"

// EXO 5 - Écrire une fonction qui renvoie TRUE si une chaine est un palindrome. 
// Ex : BOB // true car se lit aussi à l'envers
/*
function palindrome(chaine1, chaine2) {
    if(chaine1 == chaine2) {
        return true;
    }else {
        return false;
    }
}

console.log(palindrome("kayak", "kayak"));
console.log(palindrome("kayak", "kaya"));
*/
/*
function checkPalindrom (chaine) {
    if (chaine == chaine.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
  }

  console.log(checkPalindrom("kayak"));
  console.log(checkPalindrom("kaya"));
  */
/*
  function palindrome(chaine) {
    if(chaine == chaine.split("").reverse("")) {
        return true;
    }else {
        return false;
    }
  }
  console.log(palindrome("kayak"));
  console.log(palindrome("kaya"));*/

// Dans une page HTML5 réaliser un script permettant d’afficher les
// nombres de 20 à 0 avec décrémentation d’une pas égal à 2 exmeple: 20 – 18 – 16…..
/*let nbr = 20;
    for(let i = 0; i <= nbr-i; i++) {
        let resultat = nbr - i- i;
        console.log(resultat);
    }*/

/*
    for(let i = 0; i <= 100; i++) {
        if(i % 5 == 0) {
            console.log(i);
        }else {
            continue;
        }
    }*//*
function random(aleatoire) {
    let i = 0;
    while (i <= aleatoire) {
        console.log(i);
        i++;
    }
}

console.log(random(10));*/

// creer un algo qui va demander a l user de chosiir un nombre entre 0 et 10, affiher tout les numeros en dessous

// for(initialisation conditions, incrémentation)

/*
let nbr = 9;

    if(nbr <= 10){
        for(let i = 0; i < nbr; i++){
            let nbrafficher = nbr-i;
            console.log(nbrafficher);
        }

    }else {
        console.log("Chiffre non compris entre 0 et 10")
    }*/
    // user doit deviner un nbr et celui si est 8 on dit
    // bravo tu as gagner ds cas contraire redemander
    //un nbr
    /*let guess = 8;
    let chiffreUser;
    let chiffreUser = prompt("Choissisez un chiffre entre 0 et 10")* 1;

    while(chiffreUser !== guess) {
        chiffreUser = prompt("Choissisez un chiffre?")*1;
        if(chiffreUser !== guess) {
            console.log("Vous avez perdu");
        }else {
            console.log("bravo");
            break;
        }
    }*/

    // code qui permet d'afficher seulemtn nombre impair entre 1 et 10
/*
    for(let i = 0; i <=10; i++) {
        if(i % 2 !== 0) {
            console.log(i);
        } else {
            continue;
        }
    }
    
*/

    //boucle qui permet de calculer puissance d'un nombre
    /*
let nombre = 5;
let puissance =3;
let result = 1;
for( let i =0; i < puissance; i++) {
    result = result * nombre;
    
}

console.log(result);*/

//exercice qui resort plus grande valeur du tab
/*
let tab = [-5, 10, 50, 20, 60];

for( let i = 0; i < tab.length; i++) {

}

console.log(Math.max(tab[i]));*/


// EXO 1
// Ecrire une fonction qui prend un objet comme argument et renvoie une chaîne qui représente une personne. 
// Les attributs de la personne devront être extraits des trois propriétés de l’objet: nom / prenom / age.
// La chaîne doit avoir le format suivant: PRENOM NOM a AGE ans.
// ex : afficherPersonne({nom:"Dupont",prenom:"Thomas", age:"25"}) // retourne Thomas Dupont a 25 ans. (modifié)
// [16:55]
function personnage(prenom ,nom ,age){
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    return `Il s'agit de ${this.prenom} ${this.nom}, il a ${this.age} ans`;
}
// on instancie superman et superman2, de type Kryptonien (on passe commande à l'usine)
let personnageUn =  new personnage("Thomas","Dupont", "25");
let personnagedeux =  new personnage("henry","Dupont", "25");

console.log(personnage("Thomas","Dupont", "25"));
console.log(personnagedeux);

// console.log(`Il s'agit de ${personnageUn.prenom} ${personnageUn.nom}, il a ${personnageUn.age} ans`);

// EXO 2 
// Ecrire une fonction qui convertit du snake_case en camelCase. Exemple : gros_serpent -> grosSerpent
let mot = "bonjour_tout_le_monde";
console.log(conversionCamel(mot)); // bonjourToutLeMonde

function conversionCamel(motSnake){
    let motCamel="";
    let underscoreDetected=false;
    for(let i=0;i<motSnake.length;i++){
        let lettre = motSnake.charAt(i);
        if(lettre != "_"){
            if(underscoreDetected){
                motCamel += lettre.toUpperCase();
                underscoreDetected=false;
            }else{
                motCamel += lettre;
            }
        }else{
            underscoreDetected=true;
        }
    }
    return motCamel;
}

// EXO 3
// Écrire une fonction qui renvoie l’extension d'un nom de fichier passé en paramètre. Exemple : fichier.txt // retourne txt (modifié)

// Envoyer un message dans #javascript
let fichier = "monfichier.txt";
console.log(getExtension(fichier)); // txt

function getExtension(nomFichier){
    let extension = "";
    let positionPoint = nomFichier.indexOf(".");
    extension = nomFichier.slice(positionPoint+1);
    return extension;
}