function submitForm() {
    event.preventDefault();

    let mustContinue = ''//Create your confirmation function call here!
  
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
  
    if (mustContinue === true) {
      if (
        emailInput.value === "test@test.co.za" &&
        passwordInput.value === "password"
      ) {
        window.location.assign("./next.html");
      } else {
        alert("Username or password incorrect!");
      }
    }
  }
  