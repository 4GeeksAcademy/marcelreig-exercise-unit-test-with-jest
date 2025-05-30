// Objeto con las tasas de cambio
let oneEuroIs = {
  JPY: 156.5,
  USD: 1.07,
  GBP: 0.87,
};

// Función: de euros a dólares 👍
const fromEuroToDollar = function (valueInEuro) {
  return valueInEuro * oneEuroIs.USD;
};

// Función: de dólares a yenes
const fromDollarToYen = function (valueInDollar) {
  let euro = valueInDollar / oneEuroIs.USD;
  return euro * oneEuroIs.JPY;
};

// Función: de yenes a libras
const fromYenToPound = function (valueInYen) {
  let euro = valueInYen / oneEuroIs.JPY;
  return euro * oneEuroIs.GBP;
};

// Esta es mi función que suma dos números
const sum = (a, b) => {
  return a + b;
};

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
