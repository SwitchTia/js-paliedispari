// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//First user input
const userInput = prompt("Even or odd?");
console.log(userInput);
//second user input
const userNumberStr = prompt("Insert a number from 1 to 5");
const userNumber = parseInt(userNumberStr);
console.log(userNumber);


//function that generates a random number given an argument of max limit of number x:
function generateRandomNumbers(x){
    const randomNumber = Math.floor(Math.random() * x) + 1;
    return randomNumber;
}
const pcNumber = parseInt(generateRandomNumbers(5));
console.log(pcNumber);

//function that calculates the sum of two integer numbers:
function sum(x, y){
    const result = x + y;
    return result;
}
const sumOfNumbers = sum(userNumber, pcNumber);
console.log(sumOfNumbers);

//fuction that returns true or false if a given as argument number x is even or odd:
function isEvenOrOdd(x){
    if(x % 2 === 0){
        result = "even";
    }
    else{
        result = "odd";
    }
    return result;
}

const evenOrOdd = isEvenOrOdd(sumOfNumbers);
console.log(evenOrOdd);


