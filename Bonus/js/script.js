// Bonus:
// Creare una funzione che data una frase restituisce questa frase, 
// capitalizzano tutte le parole

//"pippo studia sviluppo web" --->  "Pippo Studia Sviluppo Web"
//console.log("hello");





const input = prompt("Insert your sentence: ") //string

//function to transform the sentence into an array of characters:
function stringToArray(string) {
    const inputArray = [];

    for (let i = 0; i < input.length; i++) {
        let currentLetter = input[i];
        inputArray.push(currentLetter);
    }
    return inputArray;
}
const inputArray = stringToArray(input);
console.log(inputArray);


//function that capitalises each word of a sentence:
function capitalizeSentence(sentence) {
    //capitalize the first letter first word of the sentence:
    inputArray[0] = inputArray[0].toUpperCase();

    //find whitespaces and capitalize every letter that comes after a white space:
    for (let i = 0; i < inputArray.length; i++) {
        let currentLetter = inputArray[i];

        if (currentLetter === " ") { // needs controlls if there are no double spaces etc
            inputArray[i + 1] = inputArray[i + 1].toLocaleUpperCase();
        }
    }
    return inputArray.join("");
}
const result = capitalizeSentence(inputArray);
console.log(result);







//Extra bonus independent exercise
//Scrivi un programma per invertire una stringa
const word = prompt("Insert you word");
let reversedWord = "";

function reverseString (){
    for(let i = word.length - 1; i >= 0; i--){
        let curLetterFromRight = word[i]
        reversedWord += curLetterFromRight;
    }
    return reversedWord;
}
const res = reverseString(word);
console.log(`The reverse of word ${word} is ${res}`);
