require("../config/dbConifg");

const Duck = require("../models/RubberDuck.model");

const ducks = [
  {
    name: "LazyOne",
    color: "Yellow",
    material: "gold",
    age: 12,
    picture:
      "https://amsterdamduckstore.com/wp-content/uploads/2021/01/Wellness-rubber-duck-front-Amsterdam-Duck-Store-400x400.jpg",
  },
  {
    name: "DarkDuck",
    color: "black",
    material: "plastic",
    age: 90,
    picture:
      "https://amsterdamduckstore.com/wp-content/uploads/2016/09/black-star-rubber-duck-front-510x510.jpg",
  },
  {
    name: "Rocky",
    color: "red",
    material: "wood",
    age: 24,
    picture:
      "https://amsterdamduckstore.com/wp-content/uploads/2016/11/Fitness-Rubber-Duck-front-Amsterdam-Duck-Store-2-510x510.jpg",
  },
];

(async function () {
  try {
    await Duck.deleteMany();
    const createdDucks = await Duck.create(ducks);
    console.log(`just create ${createdDucks.length}`);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit();
  }
})();
