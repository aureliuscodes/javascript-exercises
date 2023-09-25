const convertToCelsius = function(degreesF) {
  let celsius = ((degreesF - 32) * 5/9);
  return (Math.round(celsius * 10) / 10);
};

const convertToFahrenheit = function(degreesC) {
  let fahrenheit = (degreesC * 9/5 + 32); 
  return (Math.round(fahrenheit * 10) / 10)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
