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