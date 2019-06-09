fetch("http://www.omdbapi.com/?apikey=1070d254&s=Lion%20King", {
  mode: "cors", // no-cors, cors, *same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  headers: {
    "access-control-allow-headers": "application/json",
    // "access-control-allow-origin": "*",
    "Access-Control-Allow-Origin": "http://www.omdbapi.com"
  },
  redirect: "follow", // manual, *follow, error
  referrer: "no-referrer"
}) // Call the fetch function passing the url of the API as a parameter
  .then(resp => resp.json())
  .then(function(data) {
    console.log("Data", data);
    handleData(data.Search);
    // Your code for handling the data you get from the API
  })
  .catch(function() {
    console.log("boom");
    // This is where you run code if the server returns any errors
  });

const handleData = data => {
  const names = data.map(movie => movie.Title);
  console.log(names);
  alert(names.join(", "));
};
