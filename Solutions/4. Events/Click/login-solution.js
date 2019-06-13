//Create a function that will show the email address on the click of the button
//add the click event to the button

function clickTheButton() {
    let emailAddress = document.getElementById("email").value
    if (emailAddress === '') {
        emailAddress = 'Please type in the email address.'
    }
    alert(emailAddress);
}

//<button type="button" class="btn btn-primary" onclick="clickTheButton()">Login</button>