//create a function that will add the email entered to the append data here  element id='AppendDataHere'
let listOfNames = ['OLIVIA' ,'RUBY' ,'EMILY' ,'GRACE' ,'JESSICA' ,'CHLOE' ,'SOPHIE' ,'LILY' ,'AMELIA' ,'EVIE' ,'MIA' ,'ELLA' ,'CHARLOTTE' ,'LUCY' ,'MEGAN']
function AddValuesToDom() {
    let nodeToAppendTo = document.getElementById("AppendDataHere");
    for (let index = 0; index < listOfNames.length; index++) {
        let name = listOfNames[index];
        nodeToAppendTo.insertAdjacentHTML("afterend", "<p>"+ name +"</p>");        
    }
}