const players = [
    {name: "Ellie", score: 10},
    {name: "Maxime", score: 5},
    {name: "Katrina", score: 50},
    {name: "Robynn", score: 100},
]

// players.forEach((el) => console.log(el.score));

// console.log("--------------")

// players.forEach(function (el){
//     console.log(el.score);
// })
// console.log("--------------")

const fruits = ["apple", "banana", "mango", "pear", "peach"]

const fruitsStartingWithP = fruits.filter(function (fruit, i, arr){
    return fruit.startsWith("p")
})

const fruitsStartingWithP2 = fruits.filter((fruit) => fruit.startsWith("p"));

console.log("_______")
console.log(fruitsStartingWithP)
console.log(fruitsStartingWithP2)
console.log("_______")

function myFilter(player){
    return player.score >= 10;
}

const playWithHighScore = players.filter((player) => player.score >= 10)

const playWithHighScore2 = players.filter(myFilter)


console.log(playWithHighScore)
console.log("______")
console.log(playWithHighScore2)