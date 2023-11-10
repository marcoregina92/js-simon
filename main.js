// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// CONSIGLI:
// * Pensate prima in italiano. Scrivete i commenti!
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


// Genera 5 numeri casuali con una funzione 

let numeri = [];

while (numeri.length < 5) {
    const nuovoNumero = getRndInteger (1, 100);
    if(!numeri.includes(nuovoNumero)) {
        numeri.push (nuovoNumero )
    }
}
console.log (numeri);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }