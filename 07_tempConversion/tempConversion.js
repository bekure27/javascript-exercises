const ftoc = function(ftemp) {
  let c = (ftemp - 32)*(5/9);
   c = Math.round(c*10)/10;
   return c;
};

const ctof = function(ctemp) {
let f = ctemp*(9/5) + 32;
// f = f.toFixed(1);
f = Math.round(f*10)/10;
return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
