let tableauImg = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg"
];
let index = 0;
let carouselImg = document.querySelector("img");

// Initialiser l'image avec la première image du tableau
carouselImg.src = tableauImg[index];

//TIMER
setInterval(timechange,4000);
carouselImg.classList.add("active");

/* CODE DU DEBUT RATTACHER A L EV CLICK
function timechange() {
    carouselImg.addEventListener('click', function() {
        // Incrémenter l'index pour passer à l'image suivante
        index++;
        // Si l'index est supérieur ou égal à la longueur du tableau, réinitialiser l'index à 0
        if (index >= tableauImg.length) {
            index = 0;
        }
        // Changer la source de l'image à l'index actuel
        carouselImg.src = tableauImg[index];
    });
}*/

function timechange() {
    // Incrémenter l'index pour passer à l'image suivante
    carouselImg.classList.remove("active");

    index++;
    // Si l'index est supérieur ou égal à la longueur du tableau, réinitialiser l'index à 0
    if (index >= tableauImg.length) {
        index = 0;
    }
    // Changer la source de l'image à l'index actuel
    carouselImg.src = tableauImg[index];
    carouselImg.classList.add("active");

}


let image1 = document.querySelector('.image1');
let image2 = document.querySelector('.image2');
let image3 = document.querySelector('.image3');
let image4 = document.querySelector('.image4');

let previousImage = null;

image1.onclick = function() {
    carouselImg.src = "./img/1.jpg";
    setBackground(image1);
}
image2.onclick = function() {
    carouselImg.src = "./img/2.jpg";
    setBackground(image2);
}
image3.onclick = function() {
    carouselImg.src = "./img/3.jpg";
    setBackground(image3);
}
image4.onclick = function() {
    carouselImg.src = "./img/4.jpg";
    setBackground(image4);
}

function setBackground(currentImage) {
    if (previousImage !== null) {
        previousImage.style.backgroundColor = previousImageColor;
    }
    previousImageColor = currentImage.style.backgroundColor;
    currentImage.style.backgroundColor = "black";
    previousImage = currentImage;
}

//BOUTON PLAY

let bouton = document.querySelector(".btn");
let toggle = 0;
bouton.onclick = function() {
    if(toggle == 0) {
        bouton.innerHTML = '<i class="fa-solid fa-pause"></i>';
        toggle++;
    } else {
        bouton.innerHTML= `<i class="fa-solid fa-play"></i>`;
        toggle--;
    }
    
}

