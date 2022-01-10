const express = require("express");
const hbs = require("hbs");
require("./config/dbConifg");
const app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "public"));
hbs.registerPartials(__dirname + "views/partials");

// const indexRouter = require('./routes/indexRouter.js');
// app.use('/', indexRouter)
app.use("/", require("./rootes/indexRouter.js"));
app.use("/ducks", require("./rootes/ducksRouter.js"));

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
