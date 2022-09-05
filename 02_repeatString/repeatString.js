const repeatString = function(word , num) {
 let repeatWord = "";
 if(num <= -1){
    return 'ERROR';
 }
 
 
 while(num > 0){
    repeatWord+=word;
    num--;
    
 }
 return repeatWord;
 
};
repeatString('hey',3);
// Do not edit below this line
module.exports = repeatString;
