function handleClick(){
    // Get the Email and Password elements
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");

    // Use "alert" to display their values
    alert("Email: " + emailInput.value);
    alert("Password: " + passwordInput.value);

    /* 
    When you are done, 
    click the "login" button on the HTML page to run this code
    */
   
    // Validate if the password given is longer than 3 characters
    if (passwordInput.value.length < 3) {
        alert("Sorry! That password is too short!")
    }
}