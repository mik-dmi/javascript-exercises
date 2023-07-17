const add = function(firstNum, secondNum) {
  return (+firstNum + +secondNum)
	
};

const subtract = function(firstNum, secondNum) {
	return (+firstNum - +secondNum)
};

const sum = function(arr) {
  let sum = 0;
  if(arr.length === 0){
    return sum;
  }
  else{
    for( let i = 0; i < arr.length; i++){
    sum = arr[i] + sum;
    }
  }
	return sum;
};

const multiply = function(...arg) {
    let mult = 1;
    for( let arr of arg)  mult *= arr;
    
    return mult;
    
};

const power = function(num , exp) {
  let aux = 1;
  for( let i = 0; i < +exp ; i++){
    aux = +num * aux
  }
  return aux;
	
};

const factorial = function(num) {
  let fac = 1;
  if ( num === 0 ) return fac;
  for ( let i =  0; i < num ; i++) fac = fac * (num - i);
  return fac;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
