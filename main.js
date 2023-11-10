// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// CONSIGLI:
// * Pensate prima in italiano. Scrivete i commenti!
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


// La funzione randomNumbers genera dei numeri casuali diversi tra loro e stampo in pagina
const numeri = randomNumbers(5, 1, 100);
console.log(numeri);

// Stampo array in DOM e utilizzo join per distanziare i numeri stampati
document.getElementById("message").innerHTML = numeri.join(" - ");





// Funzione che crea dei numeri casuali diversi tra loro. 
// 5 sta per la quantità di numeri che voglio generare
// min sta per il range minimo
// max sta per il range massimo 
function randomNumbers(quanti, min, max) {
    let numeri = [];

    while (numeri.length < quanti) {
        const nuovoNumero = getRndInteger(min, max);
        if (!numeri.includes(nuovoNumero)) {
            numeri.push(nuovoNumero)
        }
    }

    return numeri;
}

// Genera 5 numeri casuali con una funzione
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}