//variabilie per il punteggio
let score = 0;

//chiediamo all'utente quanti round vuole giocare
let rounds = parseInt(prompt('Inserisci quanti round vuoi giocare'));

//ciclo for per far giocare i round scelti in precedenza
for(i=0; i <= rounds; i++){
    //numero da 1 a 6 del pc
    let number_pc = Math.floor(Math.random()* (6 - 1) + 1);
    
    //numero da 1 a 6 dell'utente
    let number_user = Math.floor(Math.random()* (6 - 1) + 1);
    
}