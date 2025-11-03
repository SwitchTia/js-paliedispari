// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma (NON usare split, reverse e join)

const word = prompt("Insert your word");
//0123
//anna
function isPalindrome(word) {
    //let indexFirstLetter = word[0];
    //console.log(indexFirstLetter);

    //let indexLastLetter = word.at(-1)
    //console.log(indexLastLetter);

    let reversedWord = "";
    
    //we need to compare the word as it is with the same word but reversed
    //if ther are the same, return true
    //else false
    for(let j = word.length - 1; j >= 0; j--){
        let curLetterFromRight = word[j]
        reversedWord += curLetterFromRight;
    }
    console.log(reversedWord);
    if(word === reversedWord){
        return true;
    }
    else{
        return false;
    }
}

const result = isPalindrome(word);
console.log(result);
