const mongoose = require("mongoose");
const DB_URI = "mongodb://localhost/RubberDucks";

mongoose
  .connect(DB_URI)
  .then((db) => console.log(`Connected to ${db.connection.name} `))
  .catch((err) => console.error(err));
