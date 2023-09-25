// V1
// function changerImg(balise,newSrc){
//     balise.setAttribute("src",newSrc);
// }

// V2
// function changerImg(e,newSrc){
//     let balise = e.target;
//     balise.setAttribute("src",newSrc);
// }

// V4
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