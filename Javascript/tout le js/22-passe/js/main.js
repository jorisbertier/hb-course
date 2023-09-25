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
}