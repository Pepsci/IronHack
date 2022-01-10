const router = require("express").Router();
const Ducks = require("../models/RubberDuck.model");

router.get("/", (req, res) => {
  Ducks.find()
    .then((dBResponse) => {
      res.render("ducks/duckList.hbs", {
        ducks: dBResponse,
      });
    })
    .catch((e) => console.error(e));
});

module.exports = router;
