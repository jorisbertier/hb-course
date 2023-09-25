/*
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

*/


let signForm = document.querySelector('.signIn');
let small = document.querySelectorAll('small');

signForm.email.addEventListener('change', function() {
    validEmail(this);
})

// vérifier email
const validEmail = function(inputEmail) {
    let regExpEmail = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$', 'g');
    let smallOne = small[1];

    if(regExpEmail.test(inputEmail.value)) {
        smallOne.innerHTML = 'Email Valide';

    }else {
        smallOne.innerHTML = "Email non Valide";
    }
}


let nbrCaractere = document.querySelector('.info');

// nbrCaractere.addEventListener('on');

function reste(texte)
{
    
    let restants = 200-texte.length;
    nbrCaractere.innerHTML = restants;
    if(restants < 0){
        nbrCaractere.style.color = "red";
    } else {
        nbrCaractere.style.color = "green";
    }
}