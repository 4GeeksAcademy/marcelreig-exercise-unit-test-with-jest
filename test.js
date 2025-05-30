// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test('converts 3.5 euros to dollars (3.745)', () => {
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745);
});

test('converts 1 dollar to yenes (should be ~146.26)', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2);
});

test('converts 156.5 yen to pounds (should be ~0.87)', () => {
    expect(fromYenToPound(156.5)).toBeCloseTo(0.87, 2);
});