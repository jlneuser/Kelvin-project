// today's forecast, represented in Kelvin
const kelvin = 78;

// converting Kelvin to Celsius (Celcius is 273 degrees less than Kelvin)
const celsius = 273 - kelvin;

// calculating fahrenheit from celsius
let fahrenheit = celsius * (9/5) + 32;

// rounding down the fahrenheit variable
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
