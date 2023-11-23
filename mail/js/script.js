let emails= ["example@gmail.com","example@libero.it","example@icloud.com","example@hotmail.com"];

let email = prompt('Inserisci l\'email');

//inizialissiamo una variabile che andiamo a controllare dopo il ciclo for 
let flag = false;
for (let i = 0; i < emails.length; i++) {
    //inizializziamo il for in modo da leggere ogni elemento dell'array
    //controllliamo se "i" elemento contiente l'email inserita dall'utente
    if(email == emails[i]){
        //siamo qui perchè l'email è presente nell'array
        console.log('La tua email è presente');
        flag = true;
    }
}

//controlliamo se il ciclo for non ha trovato nessun email
if(!flag){
    //se flag è false, significa che il ciclo for non ha trovato nessun email presente nell'array
    //quindi facciamo visualizzare il messaggio
    console.log('L\'email che hai inserito non è presente');
}