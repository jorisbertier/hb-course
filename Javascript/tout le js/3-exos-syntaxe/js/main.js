/*
    // EXO 1 - Ecrire une fonction qui prend un nombre 
    // et retourne "pair" ou "impair"

    // v1 (long mais plus détaillé)
    function estPair(nb){
        let resteDeLaDivisionDeNbPar2 = nb % 2;
        // console.log(resteDeLaDivisionDeNbPar2);
        if(resteDeLaDivisionDeNbPar2 == 0){
            return "pair";
        }else{
            return "impair";
        }
    }

    // v2 (court mais pas détaillé)
    function estPair(nb){
        if(nb % 2 == 0) return "pair";
        else return "impair";
    }

    // v3 (opérateur ternaire)
    function estPair(nb){
        return (nb % 2 == 0)? "pair":"impair";
    }
    console.log(estPair(18)); // pair
    console.log(estPair(17)); // impair

    // v4 (retourne true ou false)
    function estPair(nb){
        // return (nb % 2 == 0)? true:false;
        return nb % 2 == 0; // == === != < > <= >=
    }
    console.log(estPair(18)); // true
    console.log(estPair(17)); // false
    
// EXO 2 - Ecrire une fonction qui prend 3 entiers et retourne le plus grand
function max(a,b,c){
    let nbMax=a;
    if(nbMax<b) nbMax = b;
    if(nbMax<c) nbMax = c;
    return nbMax;
}
console.log(max(1,2,3)); // 3
console.log(max(1,3,2)); // 3
console.log(max(3,2,1)); // 3

// EXO 3 - Ecrire une fonction qui prend des heures, minutes, et secondes en paramètres, 
// et retourne le nombre total de secondes

// v1
// function convert2seconds(heures,minutes,secondes){
    //     let secondesTotales;
    //     secondesTotales = heures * 60 * 60;     // secondes issues des heures
    //     secondesTotales += minutes * 60;        // secondes issues des minutes
    //     secondesTotales += secondes;            // secondes précisées
    //     return secondesTotales;
    // }
    
    // v2
    function convert2seconds(heures,minutes,secondes){
    return heures * 3600 + minutes * 60 + secondes;
}

console.log(convert2seconds(2,30,30)); // 2*60*60 + 30*60 + 30 = 7200 + 1800 + 30 = 9030

// EXO 4 - créer une fonction calculerAireCercle() qui prend un rayon en paramètre 
// et qui affiche en console l'aire du cercle correspondant (Aire d'un cercle = 3.14 x Rayon x Rayon)

// v1
function calculerAireCercle(r){
    console.log(r*r*3.14);
}
calculerAireCercle(5);

// v2
function calculerAireCercle2(r){
    return r*r*3.14;
}
console.log(calculerAireCercle2(5));

// EXO 5 : Ecrire une fonction qui prend un certain nombre de vaches et d'oiseaux, 
// et retourne leur nombre de pattes.

// 1 - déclarer une fonction avec le nom approprié (imposé ou non suivant l'énoncé)
// 2 - regarder si la fonction fait une opération ou si elle retourne (prépare) une valeur
// et faire un appel en conséquence (est ce que l'appel se fait dans un console log par exemple ?)
// 3 - préciser les paramètres qu'attend la fonction, et lui transmettre lors de l'appel
// 4 - créer une variable à l'intérieur de la fonction qui décrit ce qu'elle doit préparer, et définir sa valeur 
// 5 - suivant l'énoncé, retourner la variable, ou effectuer l'action (comme un affichage en console de celle-ci)

function nbPattes(nbVaches,nbOiseaux){
    let nbTotalPattes = nbVaches*4 + nbOiseaux*2;
    return nbTotalPattes;
}

console.log(nbPattes(2,2)); // 12

// EXO 6 - Ecrire une fonction qui prend une base et une hauteur de triangle en paramètre, 
// et retourne sa surface (base x hauteur / 2)
function surfaceTriangle(base,hauteur){
    return base * hauteur / 2;
}
console.log(surfaceTriangle(10,20));

// EXO 7 - Ecrire une fonction qui renvoie TRUE si un entier passé est divisible par 5, sinon FALSE. 
// (utiliser par exemple modulo)
function estDivisiblePar5(nb){
    // v1
    // if(nb%5 == 0){
        //     return true;
        // }else{
            //     return false;
            // }
            
            // v2
            // return (nb%5==0) ? true : false;
            
    // v3
    return nb%5==0;
}
console.log(estDivisiblePar5(25)); // true
console.log(estDivisiblePar5(27)); // false

// EXO 8 - Ecrire une fonction qui prend 2 chaines et retourne une seule chaine en liant les 2.
function combinerChaines(chaine1,chaine2){
    return chaine1+chaine2;
}
console.log(combinerChaines("A","B")); // AB
*/

// EXO 9 - Ecrire une fonction qui prend un nom (XXX) et le genre (H/F), et qui salue en conséquence ( ex : Bonjour Monsieur XXX / Bonjour Madame XXX)

function saluer(nom,genre="H"){
    let civilite;
    if(genre=="H")
        civilite = "Monsieur";
    else if(genre == "F")
        civilite = "Madame";
    else 
        civilite="";
    console.log("Bonjour "+civilite+" "+nom);
}

saluer("XXX","H");
saluer("XXX","F");
saluer("XXX","X");
saluer("XXX");