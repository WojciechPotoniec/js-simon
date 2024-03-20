/*Descrizione:
Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
Da lì parte un timer di 30 secondi.
Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// per generare 5 numeri mi serve un ciclo che genera per 5 volte un numero casuale


function genNumber(min, max){
  let List = []; // array di elementi vuoto
while(List.length < 5){ //condizione di uscita del ciclo
  let num = getRndInteger(min, max); //funzione che serve per generare numeri casuali
  if(!List.includes(num)){ // condizione di controllo se num non è compreso nella lista
    List.push(num); // funzione per aggiungere num alla lista
  }
}
return List; // mi ritornerà una lista di 5 elementi casuali diversi tra loro
}

const numList = genNumber(1, 100); // associo una variabile globale alla funzione genNumber()
console.log(numList);
