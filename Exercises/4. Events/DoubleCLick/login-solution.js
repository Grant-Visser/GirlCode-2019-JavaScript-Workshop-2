//Create a function that will show the email address on the double click of the button
//add the double event to the button

function doubleCLickTheButton() {
    let emailAddress = document.getElementById("email").value
    if (emailAddress === '') {
        emailAddress = 'Please type in the email address.'
    }
    alert(emailAddress);
}

//<button type="button" class="btn btn-primary" ondblclick="doubleCLickTheButton()">Login</button>