// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100; 
//I numeri non possono essere duplicati.
var numBombe = [];
function bombe(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;   
}

while (numBombe.length < 16) {
    var numeroBomba = bombe(1, 100);
    if(numBombe.includes(numeroBomba) == false) {
      numBombe.push(numeroBomba);
    }
}

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100; 
//L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
var numeriGiocati = [];

while (numeriGiocati.length < 84) {
    
    var numero = parseInt(prompt("inserire un numero da 1 a 100; BUONA FORTUNA!"));
    if (numeriGiocati.includes(numero) == false) {
        if (numBombe.includes(numero) == false) {
            numeriGiocati.push(numero);
        } 
        else {
            break
        }
    }   
}

console.log("SEI ESPLOSO!")
console.log("Il tuo punteggio e di: " + numeriGiocati.length) + 1;
console.log("I tuoi numeri vincenti sono: " + numeriGiocati);
console.log("i numeri bomba sono: " + numBombe);


// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50



//grafica
function creaRecinto (celle) {
    
    for (let i = 1; i <= 100; i++) {
        let cella= `
            <div data-cella="${i}" class="cella"></div>
        `;

        let templateCella = document.createElement("div");
        templateCella.classList.add("square");
        templateCella.innerHTML = cella;
        document.getElementById("recinto").appendChild(templateCella);
    }   
}

creaRecinto(100);