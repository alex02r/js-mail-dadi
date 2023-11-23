//variabilie per il punteggio
let score = 0;

//chiediamo all'utente quanti round vuole giocare
let rounds = parseInt(prompt('Inserisci quanti round vuoi giocare'));

//ciclo for per far giocare i round scelti in precedenza
for(i=1; i <= rounds; i++){
    //numero da 1 a 6 del pc
    let number_pc = Math.floor(Math.random()* (6 - 1) + 1);
    
    //numero da 1 a 6 dell'utente
    let number_user = Math.floor(Math.random()* (6 - 1) + 1);

    //controlliamo chi ha vinto
    if(number_user > number_pc){
        //siamo qui perchè il numero dell'utente è maggiore del numero del computer
        //quindi ha vinto l'utente e incrementiamo il punteggio
        score += 1;
        console.log('WIN!!!! round n',i);

    }else{
        //siamo qui perchè il numero del computer era maggiore
        console.log('Lose! round n', i);
    }
}
console.log('Il tuo punteggio totale è ', score,'su ', rounds);