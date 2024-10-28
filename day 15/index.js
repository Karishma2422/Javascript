var word = "ABCKCBA";
function CheckPalindrome(word){
    for (let i = 0; i < Math.floor(word.length/ 2); i++) {
        //console.log(i, word.length - 1 -i );
        //console.log (word[i], word.lenght - 1 - i);
        if (word[i] !== word[word.length - 1 - i]){
            return "word ABCKCBA is not a Palindrone.";
        }
    }
    return "word  ABCKCBA is Palindrone";
}
console.log(CheckPalindrome(word));


console.log("+++++++++++++++++++++++++++++++++")


var word = "karishma";
function newPalindrome(word){
    for (let i = 0; i < Math.floor(word.length/ 2); i++) {
        //console.log(i, word.length - 1 -i );
        //console.log (word[i], word.lenght - 1 - i);
        if (word[i] !== word[word.length - 1 - i]){
            return  " new word karishm is not a Palindrone.";
        }
    }
    return  " new word  karishma is Palindrone";
}
console.log(newPalindrome(word));