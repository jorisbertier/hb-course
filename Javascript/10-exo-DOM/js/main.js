// INITIALISER LA DATE ACTUELLE

// RECUPERER LES HEURES ET LES MINUTES DANS 2 VARIABLES

// SELECTIONNER LE BLOC HEURE CORRESPONDANT A L'HEURE ACTUELLE PAR SON ID
// ET LE MODIFIER EN AFFICHANT SON NUMERO D'HEURE

// IDEM AVEC LES MINUTES

// METTRE EN PLACE UN TIMER QUI MET A JOUR L'INTERFACE CHAQUE MINUTE

// FAIRE EN SORTE DE DESACTIVER LES ANCIENS BLOCS A CHAQUE NOUVELLE MINUTE

// EVENTUELLEMENT AJOUTER DES SECONDES

// EVENTUELLEMENT RENDRE CA PLUS JOLI
/*
function majHorloge() {

    let date = new Date();
    let heure = date.getHours();
    let minute = date.getSeconds();
    let minute1 = date.getSeconds()-1;
    let u = date.getSeconds(59);
    let h = document.querySelector("#h"+heure); //#h12
    let m = document.querySelector("#m"+minute); //#m47
    let m1 = document.querySelector("#m"+minute1);
    h.innerHTML = heure;
    m.innerHTML = minute;
    m1.innerHTML = "";
    u.innerHTML = "";



}


console.log(majHorloge);

majHorloge();
let timer = setInterval(majHorloge,1000);

*/
majHorloge();
function majHorloge() {
    let date = new Date();
    let heure = date.getHours();
    let seconde = date.getSeconds();
    let clear = date.getSeconds()-1;
    let affichage = document.querySelector("#h"+heure);
    let affichage1 = document.querySelector("#m"+seconde);
    let clear1 = document.querySelector("#m"+clear);
    clear1.innerHTML = "";
    affichage.innerHTML = heure;
    affichage1.innerHTML = seconde;

}



let timer = setInterval(majHorloge, 1000);