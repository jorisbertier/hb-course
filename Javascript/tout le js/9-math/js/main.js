// Math.floor() -> arrondi en dessous
// Math.round() -> arrondi au plus proche
// Math.ceil() -> arrondi au dessus

// console.log(Math.round(3.14));      // 3
// console.log(Math.pow(2,2));         // 2² : 4
// console.log(Math.max(1,2,3,4,5));   // 5


let couleurs = ["cyan","yellow","magenta","lime"];

let proverbes = [
    "Pierre qui mousse n'avale pas mousse",         // 0
    "Le Coeur à ses Raisons que la Raison ignore",  // 1
    "Donner c'est donner reprendre c'est voler",    // 2
    "Faute avouée est à moitié pardonnée"           // 3
];

function maj(){
    let r = getRandomNumber(0,255);
    let g = getRandomNumber(0,255);
    let b = getRandomNumber(0,255);
    let p = getRandomNumber(0,3);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    document.body.innerHTML = `<h1 id='proverbe'>${proverbes[p]}</h1>`;
}

function getRandomNumber(min,max){
    return Math.max(min,Math.round(Math.random()*max));
}

let timer = setInterval(maj,3000);