console.log("hi there");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  const url = `http://api.weatherstack.com/current?access_key=821444e2e408a56f29f9ca16725627a3&query=${location}`;
  messageOne.textContent = "Loading...";
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error.info;
        console.log("Unable to find location.");
        return;
      }
      messageOne.textContent = data.location.country;
      messageTwo.textContent = data.current.weather_descriptions[0];
      console.log(data);
    });
  });

  console.log(location);
});
