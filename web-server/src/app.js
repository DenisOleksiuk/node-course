const path = require("path");
const express = require("express");
const hbs = require("hbs");
const request = require("postman-request");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);

hbs.registerPartials(partialPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Main page",
    name: "Denis Oleksuik",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Denis Oleksuik",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    name: "Denis Oleksuik",
  });
});

app.get("/weather", (req, res) => {
  const { address } = req.query;
  if (!address) {
    return res.send({
      error: "You must provide an address",
    });
  }
  const url = `http://api.weatherstack.com/current?access_key=821444e2e408a56f29f9ca16725627a3&query=${address}`;

  request(url, (error, response, body) => {
    if (error) {
      console.log("Unable to connect to weather service!");
    }

    const data = JSON.parse(body);

    /**
     * @param {{current: object}} data;
     * @param {{weather_descriptions: array}} current;
     **/

    res.send({
      descriptions: data.current.weather_descriptions[0],
      location: data.location.country,
      address,
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Error page",
    errorMessage: "Help article not found",
    name: "Created by Denis Oleksiuk",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Error page",
    errorMessage: "Page not found",
    name: "Created by Denis Oleksiuk",
  });
});

app.listen(3000, () => {
  console.log("server started on port 3000.");
});
