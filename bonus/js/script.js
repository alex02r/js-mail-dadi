//SCRIPT FOR MAIL
let emails= ["example@gmail.com", "example@libero.it", "example@icloud.com", "example@hotmail.com"];

let content_email = document.getElementById("content-email");
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
    }
})

