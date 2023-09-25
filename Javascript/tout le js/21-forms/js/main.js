function verif(form){

    // au début, on considère qu'il n'y a aucune erreur
    let erreurs = [];

    // on récupère une référence au conteneur d'erreurs et on le vide par défaut
    let affichageErreurs = document.querySelector(".affichageErreurs");
    affichageErreurs.innerHTML = "";

    // test 1 : nom est il renseigné ?
    if(form.nom.value == ""){
        erreurs.push("Merci de renseigner le nom.");
    }

    // test 2 : e-mail est il renseigné ?
    if(form.email.value == ""){
        erreurs.push("Merci de renseigner l'e-mail.");
    
    // test 3 : si l'e-mail est renseigné, est il au bon format ?
    }else if(isEmail(form.email.value)==false){
        erreurs.push("Merci de renseigner un e-mail au bon format.");
    }

    // test 4 : msg comprend il moins de 11 caractères ?
    if(form.msg.value.length>10){
        erreurs.push("Le message peut comporter seulement 10 caractères.");
    }

    // si le tableau d'erreurs a au moins une case
    if(erreurs.length>0){

        // on affiche les erreurs
        erreurs.forEach(function(erreur,i){
            affichageErreurs.innerHTML += `<p>${erreur}</p>`;
        })

        // bloque l'envoi des données
        return false;    
    // sinon, si aucune erreur n'a été détectée
    }else{
        // alors on laisse passer les données vers le serveur
        return true;        
    }

}


// retourne true si chaine est un email, autrement retourne false
function isEmail(chaine){
    let re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/; // OU new RegExp("toto");
    return re.test(chaine);
}

// QUAND DOIS JE REAGIR ?   => évènement
function updTexte(champ){
    let caracteresRestants = 10-champ.value.length;
    info.innerHTML=`${caracteresRestants} caractères restants`;
    // champ.value = champ.value.substr(0,10);
}

// QUEST CE QUI VARIE ?     => sélection
let info = document.querySelector(".info");

// COMMENT CELA VARIE T'IL ?    => contenu de la fonction liée à l'évènement

