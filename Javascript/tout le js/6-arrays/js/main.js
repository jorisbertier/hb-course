/*

    // TABLEAUX NUMERIQUES

    // déclaration
    let couleurs =  ["blue","red","green"]; // équivalent de : = new Array("blue","red","green");
    couleurs[3] = "purple";
    couleurs[couleurs.length] = "yellow";
    couleurs.push("cyan");

    // utilisation
    console.log(couleurs.length);   // nb de cases
    console.table(couleurs);        // OU console.log(couleurs);
    console.log(couleurs[0],couleurs[1],couleurs[2],couleurs[3],couleurs[4],couleurs[5]);

    // parcourt avec boucle for
    for(let i=0;i<couleurs.length;i++){
        // console.log(i,couleurs[i]);
    }

    // parcourt avec boucle for in
    for(let i in couleurs){
        // console.log(i,couleurs[i]);
    }

    // parcourt avec boucle for of
    for(let couleur of couleurs){
        // console.log(couleur);
    }

    // parcourt avec boucle forEach
    couleurs.forEach(function(v,i){ 
        console.log(i,v); 
    });

    
    // TABLEAUX A 2 DIMENSIONS
    
    // déclaration
    let personne0 = [];
    personne0[0] = "Alex";
    personne0[1] = "Beaugrand";
    
    let personne1 = [];
    personne1[0] = "Michael";
    personne1[1] = "Flannigan";
    
    let personnes = [];
    personnes[0]=personne0;
    personnes[1]=personne1;
    
    // utilisation
    console.log(personnes);
    console.table(personnes);
    console.log(personnes[0][0]);
    console.log(personnes[1][1]);
*/

// TABLEAUX D'OBJETS
    
// déclaration v1
// let personne0 = {prenom:"Alex",nom:"Beaugrand"};
// let personne1 = {prenom:"Michael",nom:"Flannigan"};
// let personnes = [];
// personnes[0]=personne0;
// personnes[1]=personne1;

// déclaration v2
let personnes = [
    {prenom:"Alex",nom:"Beaugrand"},    // objet de la case 0
    {prenom:"Michael",nom:"Flannigan"}  // objet de la case 1
];

// utilisation
console.log(personnes);
console.table(personnes);
console.log(personnes[0].prenom); // OU console.log(personnes[0]["prenom"]);