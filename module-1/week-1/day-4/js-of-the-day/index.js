const numbers1 = [188, -10, 88, 123, 42, -1234];
const numbers2 = [3, -100, 8, 0.23, 42 / 2, -3000]

function findSmallestNumber(numbers) {
    if (!Array.isArray(numbers))
    throw new TypeError("numbers should be a array");

    let smallest = numbers[0];

    for (let index = 1; index < numbers.length; index++) {
        if (numbers[index] < smallest) {
            console.log("we found a number that is smaller that smallest")
            smallest = numbers[index]
        }
    }
    return smallest
}
    try {
      let res1 =  findSmallestNumber(numbers1);
      let res2 =  findSmallestNumber(numbers2);
      console.log( "smallest numbers >", res1, res2)
    } catch (error) {
        console.log(error)
    }
    

const sum = (a, b) => a + b;

function sumLong(a, b) {
    return a+b;
}

console.log(sum(1+1));
console.log(sumLong(1+1));