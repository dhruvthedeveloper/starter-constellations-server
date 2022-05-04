const axios = require("axios");

const url = "http://localhost:5000/constellations";
axios
  .get(url)
  .then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });

  axios
    .get(url)
    .then((response) => {
        const result = response.data.filter((constellations) => {
            return constellations.starsWithPlanets < 10;
        });
        console.log(result);
    })
    .catch((error) => {
        console.log(error.message);
    });