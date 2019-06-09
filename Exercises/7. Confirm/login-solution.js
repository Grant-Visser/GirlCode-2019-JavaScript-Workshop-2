function submitForm(event) {
    let mustContinue = confirm("Are you sure you want to login?")
    if (mustContinue === true) {
        window.location.href = "./next.html"
    } else  {
        event.preventDefault();
    }
}