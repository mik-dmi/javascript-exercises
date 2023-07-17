const convertToCelsius = function(num) {
  let cel = (+num - 32)/(9/5) ;
  return +cel.toFixed(1) ;
};

const convertToFahrenheit = function(num) {
  let fahr = 9/5*(+num)+32
  return +fahr.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
