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