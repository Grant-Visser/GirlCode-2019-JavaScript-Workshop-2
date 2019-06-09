//Create a function that will show the email address on the on mouse douwn and mouse up
//add the them to the button

function mouseDownButton() {
    let emailAddress = document.getElementById("email").value
    if (emailAddress === '') {
        emailAddress = 'Please type in the email address.'
    }
    console.log('Mouse Down ' + emailAddress);
}

function mouseUPButton() {
    let emailAddress = document.getElementById("email").value
    if (emailAddress === '') {
        emailAddress = 'Please type in the email address.'
    }
    console.log('Mouse up ' + emailAddress);
}