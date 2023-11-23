//SCRIPT FOR MAIL
let emails= ["example@gmail.com", "example@libero.it", "example@icloud.com", "example@hotmail.com"];

let content_email = document.getElementById("content-email");
let dadi = document.getElementById("col-8");

let accedi = document.getElementById('accedi');

let flag = false;

accedi.addEventListener('click', function(){

    let email = document.getElementById('email').value;
    for (let i = 0; i < emails.length; i++) {
        if(email == emails[i]){
            flag = true;
        }
    }
    
    if(flag == false){
        document.getElementById("email").value = "";
        console.log('L\'email che hai inserito non è presente');
        console.log(email);
    }else{
        console.log('La tua email è presente');
        content_email.classList.add('d-none');
        dadi.classList.remove('d-none');
        dadi.classList.add('d-flex');
    }
});


let play = document.getElementById("play");

play.addEventListener('click', function(){

    let round_form = document.getElementById("round-form");
    round_form.classList.add("d-none");

    let game = document.getElementById("game");
    game.classList.remove("d-none");
    game.classList.add("d-block");

    let score = 0;
    let rounds = document.getElementById("rounds").value;
    
    
    for(i=1; i <= rounds; i++){
        let number_pc = Math.floor(Math.random()* (6 - 1) + 1);
        let number_user = Math.floor(Math.random()* (6 - 1) + 1);

        if(number_user > number_pc){
            score += 1;
            //messaggio nell html che abbiamo bitno il round n "i"
    
        }else{
            //messaggio che abbiamo perso il round n "i"
        }
    }
   //messaggio punteggio totale
});
