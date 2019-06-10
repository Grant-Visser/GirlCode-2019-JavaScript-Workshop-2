//create a login function that will redirect to the correct page after checking username and password
//use the bellow user object to test 
//use this to redirect  document.location = "Success.html";

let userObject ={
    email : 'user@test.com',
    password:'password'
} 

function submitForm(){
    event.preventDefault()
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    
    if(email === userObject.email && password === userObject.password){
        document.location = "Success.html";
    }
    else{
        document.getElementById("validation").innerHTML = "<div class=\"message-body\">username or password is incorect</div>"        
    }
}
