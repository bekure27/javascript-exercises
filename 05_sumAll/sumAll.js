const sumAll = function(num1,num2) {
if (num1 < 0 || num2 < 0){
    return 'ERROR';
    // return console.log('ERROR');
}
if ((typeof(num1) != 'number') || (typeof(num2) != 'number')){
    return 'ERROR';
    // return console.log('ERROR');
}
let lowerBound  = Math.min(num1,num2);
let upperBound = Math.max(num1,num2);
let numArray = [];
let sum = 0;
for(i=lowerBound;i<upperBound+1; i++){
    numArray.push(i);
}
for (let i in numArray){
    sum = sum + numArray[i];
}
  return sum;
//   return console.log(sum);
};    
sumAll(-10, 4);
// Do not edit below this line
module.exports = sumAll;
