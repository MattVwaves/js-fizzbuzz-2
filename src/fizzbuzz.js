// TODO: Write your function in this file


function fizzBuzz(lowNum, highNum){
    numbers = []

    for (i = lowNum; i <= highNum; i++)

    if (i % 15 === 0){
        numbers.push("FizzBuzz")
    } else
    if (i % 3 === 0){
        numbers.push("Fizz")
    } else
    if (i % 5 === 0){
        numbers.push("Buzz")
    } else
        
    numbers.push(i)
    return numbers
}



console.log(fizzBuzz(1, 2))
console.log(fizzBuzz(51, 54))
console.log(fizzBuzz(1, 3))
console.log(fizzBuzz(9, 12))
console.log(fizzBuzz(4, 6))
console.log(fizzBuzz(13, 15))


// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
