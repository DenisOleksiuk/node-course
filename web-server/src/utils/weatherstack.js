const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=821444e2e408a56f29f9ca16725627a3&query=kiev";

const weatherRequest = request(url, (error, response, body) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  }
});

module.exports = weatherRequest;
