function fetchData(searchString) {
  fetch(
    `https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=1070d254&s=${encodeURIComponent(
      searchString
    )}`,
    {
      mode: "cors",
      headers: {
        "access-control-allow-origin": "*",
        origin: "localhost"
      }
    }
  )
    .then(response => response.json())
    .then(function(movies) {
      console.log("RAW", movies);
      handleMovies(movies.Search);
    })
    .catch(function(error) {
      console.error(error);
    });
}

fetchData("Terminator");

function handleMovies(movies) {
  const names = [];
  for (const movie in movies) {
    names.push(movies[movie].Title);
  }
  alert(names);
}
