// écrire une fonction qui prend 
// 3entier et retourne le plus grand

/*var maxi = function maximum(nbr1, nbr2, nbr3) {
    return Math.max(maximum);
};

/*
function max(nbr1, nbr2, nbr3) {
    return Math.max(nbr1, nbr2, nbr3);
};

console.log(max(40, 80, 30));

*/

//ecrire function qui prend des heures, minutes et secondes en parametres et retourner le nombre total en seconde
/*
function totalSeconde(mois,semaine, heure, minute, seconde) {
    let moisS = mois * 2628002.88;
    let semaineS = semaine * 604800;
    let heureS = heure * 3600;
    let minuteS = minute * 60;
    let secondeS = seconde;
    let total = moisS + semaineS + heureS + minuteS + secondeS;
    return total;
}

console.log(totalSeconde(1, 1, 1, 0, 35));
*/

// EXO 4 - créer une fonction calculerAireCercle() qui prend un rayon en paramètre 
// et qui affiche en console l'aire du cercle correspondant (Aire d'un cercle = 3.14 x Rayon x Rayon)
/*
function calculerAireCercle(rayon) {
    let Airecercle = 3.14 * rayon * rayon;
    return 3.14 * rayon * rayon;
}

console.log(calculerAireCercle(2))*/

// EXO 5 : Ecrire une fonction qui prend un certain nombre de vaches et d'oiseaux, 
// et retourne leur nombre de pattes.
/*
function totalPatte(vache, oiseau) {
    return vache * 4 + oiseau * 2;
}

console.log(totalPatte(3,1));*/


// EXO 6 - Ecrire une fonction qui prend une base et une hauteur de triangle en paramètre, 
// et retourne sa surface (base x hauteur / 2)

/*function triangle(base, hauteur) {

    return (base * hauteur) /2;
}

console.log(triangle(10, 10))*/

// EXO 7 - Ecrire une fonction qui renvoie TRUE si un entier passé est divisible par 5, sinon FALSE. 
// (utiliser par exemple modulo)
/*
function test(nbr) {
    if(nbr % 2 == 0) {
        return true;
    }else {
        return false;
    }
}

console.log(test(11));*/

// EXO 8 - Ecrire une fonction qui prend 2 chaines et retourne une seule chaine en liant les 2.

/*function combinerChaine(chaine1, chaine2) {
    return chaine1 + chaine2;
}

console.log(combinerChaine("A", "B"));*/

// EXO 9 - Ecrire une fonction qui prend un nom (XXX) et le genre (H/F), et qui salue en conséquence 
// ( ex : Bonjour Monsieur XXX / Bonjour Madame XXX)

/*
function identite(nom, genre) {
    if(genre == "madame" || genre == "monsieur") {
        let message = "Bonjour "+ genre + " " + nom;
        return message;
    } else {
        return "Genre nom valide, écrivez madame ou monsieur";
    }

}

console.log(identite("tibi", "monsieu"));*/