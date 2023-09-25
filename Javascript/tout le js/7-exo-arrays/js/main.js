/*
// V1
let voiture0 = {marque:"Volvo",modele:"v40",couleur:"grise",prix:35000};
let voiture1 = {marque:"BMW",modele:"Z3",couleur:"noire",prix:55000};
let voiture2 = {marque:"Ferrari",modele:"F40",couleur:"rouge",prix:80000};
let voitures = [];
voitures[0]=voiture0;
voitures[1]=voiture1;
voitures[2]=voiture2;
console.table(voitures);

let total = 0;
voitures.forEach(function(voiture,i){
    console.log(voiture);
    document.body.innerHTML += "<h2>Voiture "+(i+1)+"</h2>";
    document.body.innerHTML += "<p>Marque : "+voiture.marque+"</p>";
    document.body.innerHTML += "<p>Modèle : "+voiture.modele+"</p>";
    document.body.innerHTML += "<p>Couleur : "+voiture.couleur+"</p>";
    document.body.innerHTML += "<p>Prix : "+voiture.prix+"€ </p>";
    total += voiture.prix;
});

// V2
let voitures = [
    {marque:"Volvo",modele:"v40",couleur:"grise",prix:35000},
    {marque:"BMW",modele:"Z3",couleur:"noire",prix:55000},
    {marque:"Ferrari",modele:"F40",couleur:"rouge",prix:80000}
];
console.table(voitures);

let total = 0;
let html = "";
voitures.forEach(function(voiture,i){
    html += "<h2>Voiture "+(i+1)+"</h2>";
    html += "<ul>";
    html += "<li>Marque : "+voiture.marque+"</li>";
    html += "<li>Modèle : "+voiture.modele+"</li>";
    html += "<li>Couleur : "+voiture.couleur+"</li>";
    html += "<li>Prix : "+voiture.prix+"€ </li>";
    html += "</ul>";
    total += voiture.prix;
});

html += "<h1>Total : "+total+"€ </h1>";

document.body.innerHTML = html;
*/

// v3
let voitures = [
    {marque:"Volvo",modele:"v40",couleur:"grise",prix:35000},
    {marque:"BMW",modele:"Z3",couleur:"noire",prix:55000},
    {marque:"Ferrari",modele:"F40",couleur:"rouge",prix:80000}
];
console.table(voitures);

let total = 0;
voitures.forEach(function(voiture,i){
    document.body.innerHTML += `<div class="voiture">
                                    <h2>Voiture ${i+1}</h2>
                                    <ul>
                                        <li>Marque : ${voiture.marque}</li>
                                        <li>Modèle : ${voiture.modele}</li>
                                        <li>Couleur : ${voiture.couleur}</li>
                                        <li>Prix : ${voiture.prix}€ </li>
                                    </ul>
                                </div>`;
    total += voiture.prix;
});

document.body.innerHTML += `<h1>Total : ${total}€ </h1>`;