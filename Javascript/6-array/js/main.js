// TABLEAUX NUMERIQUES
/*
//déclaration
let couleurs = ["blue", "red", "green"]; // équivaut de : = new Array("blue", "red", "green");
couleurs[3] = "purple";
couleurs.push("cyan");


//utilisation
console.log(couleurs.length);
console.log(couleurs);
console.table(couleurs);
console.log(couleurs[1]);
console.log(couleurs[3]);


// parcourt avec boucle for
for(let i = 0;  i < couleurs.length; i++) {
    console.log(i, couleurs[i]);
}

//parcourt avec boucle for in

for( let i in couleurs) {
    console.log(i, couleurs[i]);
}

//parcourt avec boucle for of

for( let couleur of couleurs) {
    console.log(couleur);
}

//parcourt avec boucle foreach

couleurs.forEach(function(i, v){
    console.log(i, v);
});
// TABLEAUX A 2 DIMENSIONS

let personne0 = [];
personne0[0] = "Alex";
personne0[1] = "Beaugrand";

let personne1 = [];
personne1[0] = "Michael";
personne1[1] = "Flannigan";

let personnes = [];
personnes[0] = personne0;
personnes[1] = personne1;

//utilisation
console.log(personnes);
console.table(personnes);
console.log(personnes[0][0]);
console.log(personnes[1][1]);

// TABLEAUX D'OBJET

// déclaration v1
let personne0 = {prenom:"Alex", nom:"Beaugrand"};
let personne1 = {prenom:"Michael", nom:"Flannigan"};


let personnes = [];
personnes[0]=personne0;
personnes[1]=personne1;

// utilisation
console.log(personnes);
console.log(personnes[0].prenom);
console.log(personnes[0]["prenom"]);
console.table(personnes);
// déclaration v2
let personnes = [
    {prenom:"Alex", nom:"Beaugrand"},
    {prenom:"Michael", nom:"Flannigan"}
];



/// EXERCICE VOITURE 
// v1


let voiture = [
    {marque:"Volvo", modele:"v40", couleur:"grise", prix:"35000"},
    {marque:"BMW", modele:"Z3", couleur:"noire", prix:"55000"},
    {marque:"Ferrari", modele:"F40", couleur:"rouge", prix:"80000"}
];


// console.log(voiture)
voiture.forEach(function(i, v){
    console.log(i, v);
  });


  
  
  for(let i = 0; i < voiture.length ; i++) {
      document.body.innerHTML +=  "<div class=yo><div class=voit>Voiture " + (i+1) + "</div><br></div>";
      document.body.innerHTML +=  "<div class=yo><div class=v>" + voiture[i].marque + "<br>" + "</div></div>";
      document.body.innerHTML +=  "<div class=yo><div class=v>" + voiture[i].modele + "<br>"+ "</div></div>";
      document.body.innerHTML +=  "<div class=yo><div class=v>" + voiture[i].couleur + "<br>"+ "</div></div>";
      document.body.innerHTML +=  "<div class=yo><div class=v>" + voiture[i].prix + " € </div></div>" + "<br>"+ "<br>";
}

document.body.innerHTML +=  "<div class=tt>Total " + (Number(voiture[0].prix) + Number(voiture[1].prix) + Number(voiture[2].prix)) + " €</div>" ;

// document.body.innerHTML = "Total" + (Number(voiture[0].prix) + Number(voiture[1].prix) + Number(voiture[2].prix));

//console.log(Number(voiture[0].prix) + Number(voiture[1].prix) + Number(voiture[2].prix));

// document.body.innerHTML = "pp" + voiture[i];

// // += (pour cumuler les infos)

// V2
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

document.body.innerHTML += "<h1>Total : "+total+"€ </h1>";



// V3
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

// v4 ES6
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
