window.onload = function(e) {
  alert("There is now HTML displayed!");

  function outerFunction() {
    let a = 1;

    function innerFunction() {
      let b = 2;
      return a + b;
    }

    return innerFunction();
  }

  alert(outerFunction());

  alert(a);
  //Check your console, we can't access 'a' from here!
};
