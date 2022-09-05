const reverseString = function(word) {
var reverseWord = "";
for(let i = word.length; i>=0; i--){
reverseWord = reverseWord.concat(word.charAt(i));
}
return reverseWord;
};
reverseString('hello');
// Do not edit below this line
module.exports = reverseString;
