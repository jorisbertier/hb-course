let blocs = document.querySelectorAll(".bloc"); // 84 blocs

function maj(){

    // FAIRE EN SORTE DE DESACTIVER LES ANCIENS BLOCS A CHAQUE NOUVELLE MINUTE
    blocs.forEach(function(bloc){
        bloc.innerHTML="";
        bloc.className = "bloc";
    });

    // INITIALISER LA DATE ACTUELLE
    let d = new Date();             // 12h47

    // RECUPERER LES HEURES ET LES MINUTES DANS 2 VARIABLES
    let heure = d.getHours();       // 12
    let minute = d.getMinutes();    // 47
    let seconde = d.getSeconds();    // 47

    // SELECTIONNER LE BLOC HEURE CORRESPONDANT A L'HEURE ACTUELLE PAR SON ID
    // ET LE MODIFIER EN AFFICHANT SON NUMERO D'HEURE
    let blocHeure = document.querySelector("#h"+heure);   // #h12
    blocHeure.innerHTML = heure;
    blocHeure.className = "bloc actif";

    // IDEM AVEC LES MINUTES
    let blocMinute= document.querySelector("#m"+minute);   // #m47
    blocMinute.innerHTML = minute;
    blocMinute.className = "bloc actif";

    // IDEM AVEC LES SECONDES
    let blocSeconde= document.querySelector("#s"+seconde);   // #m47
    blocSeconde.innerHTML = seconde;
    blocSeconde.className = "bloc actif";

}

// METTRE EN PLACE UN TIMER QUI MET A JOUR L'INTERFACE CHAQUE MINUTE
maj();
let timer = setInterval(maj,1000);

// EVENTUELLEMENT RENDRE CA PLUS JOLI