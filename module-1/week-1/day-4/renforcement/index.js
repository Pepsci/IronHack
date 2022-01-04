console.log("hello")

function one() {
    alert("hello");
}
// one()


function hello() {
    let str = "hello"
    console.log(str)

}

const toto = "hello"
const tata = "hey"

function dummyReturn (p){
    return p
}

console.log(dummyReturn(toto))
var x = dummyReturn(tata)
console.log(x)

function foo(){
    return "bar"
}

console.log(foo())
var x = foo()
console.log(x)

function helloWho(nom){
    return `hello ${nom}` 
}

console.log(helloWho())
var x = helloWho()



