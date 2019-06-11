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

// fetchData("Lego");

function navigateToIMDB(imdbId) {
  window.location.assign(`https://www.imdb.com/title/${imdbId}`);
}

function handleMovies(movies) {
  let nodeToAppendTo = document.getElementById("column-container");
  for (let index = 0; index < movies.length; index++) {
    let movie = movies[index];
    nodeToAppendTo.insertAdjacentHTML(
      "afterbegin",
      `<div class="column is-one-fifth is-centered" onclick="navigateToIMDB('${
        movie.imdbID
      }')">
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by4">
              <img
                src="${movie.Poster}"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">${movie.Title}</p>
                <p class="subtitle is-6">Type: ${movie.Type}</p>
              </div>
            </div>
            <div class="content">
              <time datetime="2016-1-1">${movie.Year}</time>
            </div>
          </div>
        </div>
      </div>`
    );
  }
}

function findMovie() {
  event.preventDefault();
  let searchBoxInput = document.getElementById("searchbox");
  fetchData(searchBoxInput.value);
}
