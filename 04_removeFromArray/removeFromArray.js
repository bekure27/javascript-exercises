const removeFromArray = function(arrayElement,...value) {
const newArrayElement = arrayElement.filter(check);
function check(arrayElement){
    return !value.includes(arrayElement);
}



return newArrayElement;
// return console.log(newArrayElement)
};
// removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
