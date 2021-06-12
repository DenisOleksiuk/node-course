const request = require("request");
const geocode = require("./utils/geocode");

const url =
  "http://api.weatherstack.com/current?access_key=821444e2e408a56f29f9ca16725627a3&query=New%20York";

request({ url: url, json: true }, (error, response) => {
  console.log(response.body);
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    console.log(
      response.body.daily.data[0].summary +
        " It is currently " +
        response.body.currently.temperature +
        " degrees out. There is a " +
        response.body.currently.precipProbability +
        "% chance of rain."
    );
  }
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1";

// request({ url: geocodeURL, json: true }, (error, response) => {
//   console.log(response.body);
// if (error) {
//     console.log('Unable to connect to location services!')
// } else if (response.body.features.length === 0) {
//     console.log('Unable to find location. Try another search.')
// } else {
//     const latitude = response.body.features[0].center[0]
//     const longitude = response.body.features[0].center[1]
//     console.log(latitude, longitude)
// }
// });

// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })
