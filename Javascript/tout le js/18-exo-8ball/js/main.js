// OK - ETAPE 1 : faire la balle en HTML/CSS, qui est par exemple un div qui contient un input text

// ETAPE 5 : faire en sorte que chaque réponse soit aléatoire, par exemple en utilisant un tableau 
// et Math.random() et Math.round()
//                0           1              2          3        4
let reponses = ["NON","N'Y COMPTES PAS","PEUT-ETRE","SUREMENT","OUI"];

// OK - ETAPE 3 : répondez à la question : qu'est-ce qui doit être modifié dans l'interface ?
// déduisez-en la sélection à faire correspondant à l'élément que vous souhaiterez modifier
let balle = document.querySelector("#balle");

// OK - ETAPE 2 : répondez à la question : quand-est ce que l'interface doit être modifiée ?
// déduisez-en l'évènement à écouter et placer cet écouteur
window.onkeyup = function(e){
    console.log(e.key);

    if(e.key=="Enter"){

        // OK - ETAPE 4 : procéder à la modification de l'interface, au moment juste, et grâce à la sélection faite
        // votre but ici est d'afficher une réponse
        let i = Math.round(Math.random()*(reponses.length-1));
        balle.innerHTML=`<h2>${reponses[i]}</h2><p>appuyer sur espace pour poser une nouvelle question</p>`;

    }

    // ETAPE 6 : détection de la touche espace et rechargement de l'interface avec location.reload()
    if(e.key==" "){
        window.location.reload();
    }
}
