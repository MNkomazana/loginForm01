const form = document.getElementById('resetPass');
const email = document.getElementsById('email');

resetPass.addEventListener('login', myFunction());

function myFunction(emailvalue, msgValue){
    const emailValue = email.value.trim();
    const msgValue = document.getElementsByClassName('resetMsge');
    if(emailValue === ''){
        // some message
    }else{
       // display the message in the small tag or the reset link message.
    }
}