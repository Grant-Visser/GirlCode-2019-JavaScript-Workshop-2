//build validation for the form to add validation to the form if the password is bellow 6 charecters
//use function document.getElementById("~elemmtid~").innerHTML
function ValidatePassword(){
    let password = document.getElementById("password").value;
    let passwordLength = 6;
    let isEmailAddressInvalid = false;
    if (password.length < passwordLength) {
        isEmailAddressInvalid = true;
    }
    if(isEmailAddressInvalid){        
        document.getElementById("validation").innerHTML = "<div class=\"message-body\">password is to short.</div>"        
    }
}