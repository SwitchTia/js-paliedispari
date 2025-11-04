// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma (NON usare split, reverse e join)


//0123
//anna

//we need to compare the word as it is with the same word but reversed
//if ther are the same, return true
//else false

function isPalindrome(word) {

    let reversedWord = "";
    
    for(let j = word.length - 1; j >= 0; j--){
        let curLetterFromRight = word[j]
        reversedWord += curLetterFromRight;
    }
    console.log(reversedWord);
    return word === reversedWord;
}


const word = prompt("Insert your word");

const result = isPalindrome(word);
console.log(result);
