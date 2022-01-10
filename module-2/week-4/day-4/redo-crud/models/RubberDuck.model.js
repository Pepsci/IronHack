const { model, Schema, trusted } = require("mongoose");

const duckSchema = new Schema({
  name: {
    type: String,
    required: trusted,
  },
  color: String,
  material: {
    type: String,
    enum: ["plastic", "gold", "wood"],
  },
  age: Number,
  picture: String,
});

const Duck = model("Ducks", duckSchema);

module.exports = Duck;
