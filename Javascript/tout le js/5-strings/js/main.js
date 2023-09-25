/*
let nom = "toto";
console.log(nom);
console.log(typeof nom);

let nom = "toto"; // équivalent de : let nom = new String("toto");
console.log(nom);
console.log(nom.length)
console.log(nom.charAt(0));
console.log(nom.toUpperCase());
console.log(nom.replace("o","a"));

console.log(Number.parseInt(1.123555));
let n = 3.14; // équivalent de : let n = new Number(3.14);
console.log(n);
console.log(n.toExponential());

// EXO 1 - Ecrire une fonction qui prend deux chaînes str1 et str2 et retourne TRUE si elles ont autant de caractères, sinon FALSE.
function ontAutantDeLettres(chaine1,chaine2){
    // v1
    // if(chaine1.length == chaine2.length)
    //     return true;
    // else
    //     return false;
    return chaine1.length == chaine2.length; // v2
}
console.log(ontAutantDeLettres("ABC","DEF"));   // true
console.log(ontAutantDeLettres("BOB","LACA"));  // false

// EXO 2 - Ecrire une fonction qui renvoie TRUE si une chaîne contient des espaces, sinon FALSE.
function containsSpace(chaine){
    
    // let espaceDetecte = false;
    // for(let i=0;i<=chaine.length-1;i++){
        //     if(chaine.charAt(i) == " "){
            //         espaceDetecte=true;
            //     }
            // }
    // return espaceDetecte;                // v1
    
    // return chaine.includes(" ");         // v2
    
    // if(chaine.indexOf(" ") == -1){
        //     return false;
        // }else{
            //     return true;
            // }                                    // v3
            
            return chaine.indexOf(" ") != -1;       // v4
            
        }
        // 0123456789
        console.log(containsSpace("Bonjour yo"));    // true
        console.log(containsSpace("Bonjour"));       // false
        
        // EXO 3 - Ecrire une fonction qui renvoie le nombre de mots d'une chaine.
        function nbMots(chaine){
            let nbEspaces = 0;
            chaine = chaine.trimStart().trimEnd();
            for(let i=0;i<=chaine.length-1;i++){
                if(chaine.charAt(i) == " "){
                    nbEspaces++;
                }
            }
            return nbEspaces+1;
        }
        console.log(nbMots("Bonjour ca va"));    // 3
        console.log(nbMots("Hello you"));        // 2
        
        // EXO 4 - Ecrire une fonction qui prend une chaine et retourne la chaine inversée.
function inverserChaine(chaine){
    
    // v1
    // let chaineInversee = "";
    // for(let i=chaine.length-1;i>=0;i--){
        //     chaineInversee += chaine.charAt(i);
        // }
        // return chaineInversee;
        
        // v2
        return chaine.split("").reverse().join("");
        
    }
console.log(inverserChaine("LAC")); // CAL

// EXO 5 - Écrire une fonction qui renvoie TRUE si une chaine est un palindrome. 
// Ex : BOB // true car se lit aussi à l'envers
function isPalindrome(chaine){
    return chaine == inverserChaine(chaine);
}
console.log(isPalindrome("BOB")); // true
console.log(isPalindrome("LAC")); // false

// EXO 1
// Ecrire une fonction qui prend un objet comme argument et renvoie une chaîne qui représente une personne. 
// Les attributs de la personne devront être extraits des trois propriétés de l’objet: nom / prenom / age.
// La chaîne doit avoir le format suivant: PRENOM NOM a AGE ans.
// ex : afficherPersonne({nom:"Dupont",prenom:"Thomas", age:"25"}) // retourne Thomas Dupont a 25 ans. 

// a
// class Personne{
    //     constructor(prenom_,nom_,age_){
        //         this.prenom=prenom_;
        //         this.nom=nom_;
        //         this.age=age_;
        //     }
        // }
        // let personne = new Personne("Thomas","Dupont","25");
        
        // b
        // function Personne(prenom_,nom_,age_){
            //     this.prenom=prenom_;
            //     this.nom=nom_;
            //     this.age=age_;
// }
// let personne = new Personne("Thomas","Dupont","25");

// c
let personne = {nom:"Dupont",prenom:"Thomas", age:"25"};

let phrase = afficherPersonne(personne);
console.log(phrase);

function afficherPersonne(personne){
    return `${personne.prenom} ${personne.nom} a ${personne.age} ans`;
}

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
*/

// EXO 3
// Écrire une fonction qui renvoie l’extension d'un nom de fichier passé en paramètre. Exemple : fichier.txt // retourne txt 

let fichier = "monfichier.txt";
console.log(getExtension(fichier)); // txt

function getExtension(nomFichier){
    let extension = "";
    let positionPoint = nomFichier.indexOf(".");
    extension = nomFichier.slice(positionPoint+1);
    return extension;
}