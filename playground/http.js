const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=821444e2e408a56f29f9ca16725627a3&query=50,%2030&units=f";

const response = http.request(url, (response) => {
  let data = "";

  response.on("data", (chank) => {
    data += chank.toString();
  });

  response.on("end", () => {
    console.log(data);
  });
});
response.end();
