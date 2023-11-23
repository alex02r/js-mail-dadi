//SCRIPT FOR MAIL
let emails= ["example@gmail.com","example@libero.it","example@icloud.com","example@hotmail.com"];

let email = document.getElementById('email').value;
let accedi = document.getElementById('accedi');

let flag = false;


for (let i = 0; i < emails.length; i++) {
    
    if(email == emails[i]){
        console.log('La tua email è presente');
        flag = true;
    }
}

if(!flag){
    console.log('L\'email che hai inserito non è presente');
}