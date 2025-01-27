let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");
let jokeTextEl = document.getElementById("jokeText");

function getLocalStorageJoke() {
  spinnerEl.classList.remove("d-none");
  jokeTextEl.classList.add("d-none");


  let options = {
    method: "GET",
  };
  let url = "https://apis.ccbp.in/jokes/random";

  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      spinnerEl.classList.add("d-none");
      jokeTextEl.classList.remove("d-none");


      let randomJoke = jsonData.value;
      jokeTextEl.textContent = randomJoke;
    });
}

jokeBtnEl.addEventListener("click", getLocalStorageJoke);
