let signIn = document.querySelector('.signIn');
let small = document.querySelector('small');

// ETAPE 1 : PREPARER UN EMPLACEMENT POUR L'ICONE OU LA ZONE DE TEXTE
// ETAPE 1 : POSEZ VOUS LA QUESTION "QUAND REAGIR ?"
// ETAPE 2 : QUEST CE QUI VARIE ?
// ETAPE 3 : COMMENT CELA VARIE

// creer un addeventlistener
signIn.password.addEventListener('keyup', function() {
    validPassword(this);
})

// créer reg ex et faire la condition

const validPassword = function(inputPassword) {
    let testPassword = new RegExp ('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$', 'g');

    if(inputPassword.value.length <= 3){
        small.innerHTML = `MOT DE PASSE Faible <i class="bi bi-key"></i>`;  
        small.style.color = "red";

    }else if(inputPassword.value.length >= 4 && inputPassword.value.length < 7 ){
        small.innerHTML = 'MOT DE PASSE MOYEN';
        small.style.color = "orange";

    }else if(testPassword.test(inputPassword.value) && inputPassword.value.length >= 9){
        small.innerHTML = 'MOT DE PASSE TRES FORT';
        small.style.color = "purple";
    } 
    
    else if(inputPassword.value.length >= 7) {
        small.innerHTML = 'MOT DE PASSE FORT';
        small.style.color = "green";
    
    }
}


/* CORRECTION EXERCICE



// OBJECTIF : AFFICHER VIA UNE ICONE OU UN TEXTE LA FORCE DU MOT DE PASSE

// ETAPE 1 : PREPARER UN EMPLACEMENT POUR L'ICONE OU LA ZONE DE TEXTE
// ETAPE 2 : POSEZ VOUS LA QUESTION "QUAND REAGIR ?" (onkeyup)
// ETAPE 3 : QUEST CE QUI VARIE ? (i)
// ETAPE 4 : COMMENT CELA VARIE (selon la value de l'input)

// MOT DE PASSE FAIBLE (rouge): DE 0 a 3 caractères
// MOT DE PASSE MOYEN (orange): DE 4 a 6 caractères
// MOT DE PASSE FORT (vert): A PARTIR DE 7 caractères
// MOT DE PASSE TRES FORT (violet) : REGEXP https://ihateregex.io/expr/password

// ASTUCE : vous pouvez utiliser les icones de signal wifi
// https://icons.getbootstrap.com/icons/reception-1/

let icone = document.querySelector("i");
icone.className="bi bi-reception-1";
icone.style.color="red";

function majForce(balise){
    // faible
    icone.className="bi bi-reception-1";
    icone.style.color="red";
    if(balise.value.length>3 && balise.value.length <= 6){
        // moyen
        icone.className="bi bi-reception-2";
        icone.style.color="orange";
    }else if(balise.value.length > 6){
        if(isStrongPwd(balise.value)==true){
            // très fort
            icone.className="bi bi-reception-4";
            icone.style.color="purple";
        }else{
            // juste fort
            icone.className="bi bi-reception-3";
            icone.style.color="lime";
        }
    }
}

function isStrongPwd(chaine){
    let re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    return re.test(chaine);
}*/
