function submitForm() {
  event.preventDefault();

  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");

  const secretEmail = "test@test.co.za";
  const secretPassword = "password";
  const secretWord = "Bird";

  if (
    emailInput.value === secretEmail &&
    passwordInput.value === secretPassword
  ) {
    let userSecretWord = prompt("Please provide your secret word");
    if (userSecretWord === secretWord) {
      window.location.assign("./next.html");
    } else {
      alert("Secret word incorrect!");
    }
  } else {
    alert("Username or password incorrect!");
  }
}
