

function checkForm(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email==""){
         let strMsge = document.getElementById("emailErr");
         strMsge.innerHTML = "Email/username cannot be empty";
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
// Login button uses the function checkform to validate fields
const btn = document.getElementById("login");
btn.addEventListener("click",checkForm);
// code ends here for the button


// this function will be used in the validation of the form to create an account
function createAcc(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let strEmail = document.getElementById("email1").value;
    let strPass = document.getElementById("password1").value;
    let strPassConfirm = document.getElementById("passwordConfirm").value;

    if(strPassConfirm != strPass){
        console.log("Meluleki Nkomz u r the best");
    }

}
//function ends here

const btnSubmit = document.getElementById("submit").value;
btnSubmit.addEventListener("click", createAcc);