/*
// v1
function clic(balise,couleur){
    console.log(balise);
    balise.style.color=couleur;
}
// v2
function clicE(e,couleur){
    console.log(e);
    let balise = e.target;
    balise.style.color=couleur;
}

// v3 
let h2 = document.querySelector("h2");

// v3.1 (fonction nommée)
// h2.onclick=clicE2;
// function clicE2(e){
//     console.log(e);
//     let balise = e.target;
//     balise.style.color="blue";
// }

// v3.2 (fonction anonyme)
// h2.onclick = function(e){
//     let balise = e.target;
//     balise.style.color="blue";
// }

// v3.3 (fonction fléchées)
// h2.onclick = (e) => {
//     let balise = e.target;
//     balise.style.color="blue";
// }

// v3.4
h2.addEventListener("click",clicE2);
function clicE2(e){
    let balise = e.target;
    balise.style.color="blue";
}
// /*
// */
// /** 
// *@param {PointerEvent} event
// */
/*
function onButtonClick(event) {
    console.log(event.currentTarget);
    // event.preventDefault()
}
// document.querySelector("button").forEach(button => {
//     button.addEventListener('click', onButtonClick)
// })

document.querySelector("div").addEventListener('click', () => {
    console.log('click div')
})*/
/*
window.onload=majFond;
window.onresize=majFond;

function majFond(e){
    console.log(window.innerWidth);
    // DE 0 à 500px -> lime
    if(window.innerWidth<=500){
        document.body.style.backgroundColor="lime";
    // DE 501 à 900px -> orange
    }else if(window.innerWidth<=900){
        document.body.style.backgroundColor="orange";
    // DES 901+ -> blanc
    }else{
        document.body.style.backgroundColor="white";
    }
};
*/
// document.querySelector('test');

//v2
function switchImg(l) {
    l.src = "./img/2.jpg";
}

function switchImg1(l) {
    l.src = "./img/1.jpg";
}


// V3
// function changerImg(balise,newSrc){
//     balise.setAttribute("src",newSrc);
// }

// V4
// function changerImg(e,newSrc){
//     let balise = e.target;
//     balise.setAttribute("src",newSrc);
// }

// V5
let imgs = document.querySelectorAll("img.survolable");
imgs.forEach(function(img){
    img.onmouseover = intervertir;
    img.onmouseout = intervertir;
});

// EQUIVAUT A :
// let img1 = document.querySelector("img");
// img1.onmouseover = intervertir;
// img1.onmouseout = intervertir;
// let img2 = document.querySelector("img:nth-of-type(2)");
// img2.onmouseover = intervertir;
// img2.onmouseout = intervertir;

function intervertir(e){
    let image = e.target;
    let src = image.getAttribute("src");
    let imgalt = image.getAttribute("data-imgalt");
    image.setAttribute("src",imgalt);
    image.setAttribute("data-imgalt",src);
}