//variabilie per il punteggio
let score = 0;

//numero da 1 a 6 del pc
let number_pc = Math.floor(Math.random()* (6 - 1) + 1);
    
//numero da 1 a 6 dell'utente
let number_user = Math.floor(Math.random()* (6 - 1) + 1);

//controlliamo chi ha vinto
if(number_user > number_pc){
    //siamo qui perchè il numero dell'utente è maggiore del numero del computer
    console.log('WIN!!!!');

}else{
    //siamo qui perchè il numero del computer era maggiore
    console.log('Lose!');
}
