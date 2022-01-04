const players = [
    {name: "Ellie", score: 10},
    {name: "Maxime", score: 5},
    {name: "Katrina", score: 50},
    {name: "Robynn", score: 100},
]

const fruits = ["apple", "banana", "mango", "pear", "peach"];

const toUpperCase = fruits.map((fruit) => {
    console.log("> ", fruit);
    return fruit.toUpperCase()
});


console.log(toUpperCase);
