

function checkForm(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email==""){
         let strMsge = document.getElementById("emailErr");
         strMsge.innerHTML = "Field cannot be empty";
    }else{
       strMsge.innerHTML ="Details Successfully Captured";
    }
     if(password==""){
         let passMsge = document.getElementById("passwordErr");
         passMsge.innerHTML = "Password cannot be empty";
    }else{
        passMsge.innerHTML = "Success";
    }
}

const btn = document.getElementById("login");
btn.addEventListener("click",checkForm);