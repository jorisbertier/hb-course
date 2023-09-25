// timers
// let timer = setInterval(maFonction,1000);   // v1 : appel continu chaque seconde
// setTimeout(maFonction,1000);                // v2 : appel unique au bout d'une seconde
// function maFonction(){}

// window.location
// console.log(window.location);
// console.log(window.location.href);          // lecture de l'URL
// window.location.href = "https://google.fr"; // réécriture de l'URL

// ETAPE 1 : afficher un grand 5 sur la page, dans un conteneur (div par exemple) qui a un id
// ETAPE 2 : en JS, récupérer une référence à ce conteneur avec un querySelector pour pouvoir le modifier
// ETAPE 3 : faire en sorte en JS de réécrire le contenu du conteneur en changeant le 5 en 4
// ETAPE 4 : créer une fonction qui effectue cette modification, et l'appeler
// ETAPE 5 : appeler cette fonction en continu avec un timer
// ETAPE 6 : faire en sorte que l'appel multiple de cette fonction change le nombre en 5 4 3 2 1
// ETAPE 7 : faire une redirection avant d'écrire le 0
// ETAPE 8 : faire en sorte qu'un mouvement de souris détecté remette le compteur à 5 (onmousemove)


//SELECTEUR
let number = document.querySelector('.numero');
let temp = 5;

// TIMER
let timer = setInterval(compteur,1000);
let timerend = setTimeout(timetoend,5000);  

// REDIRECTION
function timetoend() {
    document.location.href ="file:///C:/Users/HB/Desktop/Cours%20HB/Javascript/17-exo-Redirection/index.html";
}
// MOUSEON COMPTEUR REMIS TEST


//APPEL COMPTEUR
compteur();
function compteur() {
    number.innerText = temp;
    if(temp <= 1) {
        timer.timetoend();
    }else {
        temp--;
    }

}


//CORRECTION

// timers
// let timer = setInterval(maFonction,1000);   // v1 : appel continu chaque seconde
// setTimeout(maFonction,1000);                // v2 : appel unique au bout d'une seconde
// function maFonction(){}

// window.location
console.log(window.location);
// console.log(window.location.href);          // lecture de l'URL
// window.location.href = "https://google.fr"; // réécriture de l'URL

// OK - ETAPE 6 : faire en sorte que l'appel multiple de cette fonction change le nombre en 5 4 3 2 1
let nb = 5;

// OK - ETAPE 1 : afficher un grand 5 sur la page, dans un conteneur (div par exemple) qui a un id

// OK - ETAPE 2 : en JS, récupérer une référence à ce conteneur avec un querySelector pour pouvoir le modifier
let compteur = document.querySelector("#compteur");

// OK - ETAPE 3 : faire en sorte en JS de réécrire le contenu du conteneur en changeant le 5 en 4
// OK - ETAPE 4 : créer une fonction qui effectue cette modification, et l'appeler
function decrementer(){
    console.log("decrementer")
    compteur.innerHTML = nb;
    nb--;
    // OK - ETAPE 7 : faire une redirection avant d'écrire le 0
    if(nb==0){
        clearInterval(timer);                       // on stoppe le timer
        location.href = "https://google.fr";        // réécriture de l'URL
    }
}

// OK - ETAPE 5 : appeler cette fonction en continu avec un timer
let timer = setInterval(decrementer,1000);   // appel continu chaque seconde

// OK - ETAPE 8 : faire en sorte qu'un mouvement de souris détecté remette le compteur à 5 (onmousemove)
window.onmousemove=function(e){
    nb=5;
}
