//create a function that will add the email entered to the append data here  element id='AppendDataHere'
function AddValueToDom() {
    let emailAddress = document.getElementById("email").value
    if (emailAddress === '') {
        emailAddress = 'Please type in the email address.'
    }
    let nodeToAppendTo = document.getElementById("AppendDataHere");
    nodeToAppendTo.insertAdjacentHTML("afterend", "<p>"+ emailAddress +"</p>");
}