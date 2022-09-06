const removeFromArray = function(arrayElement,...value) {
      newArrayElement = [];
    for(let i=0; i<=arrayElement.length; i++){
        if(value.includes(arrayElement[i])){
         arrayElement.splice(i, value.length);
        }
}


return arrayElement;
// return console.log(arrayElement)
};
// removeFromArray([1, 2, 3, 4], 7, 2);
// Do not edit below this line
module.exports = removeFromArray;
