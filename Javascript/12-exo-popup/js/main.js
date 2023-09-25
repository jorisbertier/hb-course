

// SELECTIONNE SELECTEUR
let selectpop = document.querySelector(".popup");
let pop1 = document.querySelector("a");
let close = document.querySelector('.close');
let pop2 = document.querySelector("a:nth-child(2)");

//

function mafonction(){

    pop1.addEventListener('click', () => {
        selectpop.style.visibility = "visible";
    });
}
mafonction();

pop2.addEventListener('click', () => {
    selectpop.style.visibility = "visible";
})

close.addEventListener('click', () => {
    selectpop.style.visibility ="hidden";

});

//CORRECTION
/*
// v2
let bt = document.querySelector("a");
bt.onclick=function(e){
    afficherPopup('popup1');
};

// v1 ou v2
function afficherPopup(idPopup){
    let popup = document.querySelector("#"+idPopup);
    // ex si idPopup = "popup1" =>  let popup = document.querySelector("#popup1");
    popup.style.display="block";
}

function fermerPopup(btClose){
    let popup = btClose.parentNode;
    popup.style.display="none";
}
*/
