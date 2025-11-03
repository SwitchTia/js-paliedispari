// Bonus:
// Creare una funzione che data una frase restituisce questa frase, 
// capitalizzano tutte le parole

//"pippo studia sviluppo web" --->  "Pippo Studia Sviluppo Web"
console.log("hello");

const input = prompt("Insert your sentence: ") //string

const inputArray = [];

for (let i = 0; i < input.length; i++) {
    let currentLetter = input[i];
    inputArray.push(currentLetter);
}
console.log(inputArray);


let firstLetter = "";
let firstWordLetter = "";



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