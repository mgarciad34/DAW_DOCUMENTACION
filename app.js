/**
 * The function "suma" in JavaScript returns the sum of two numbers.
 * @param x - The first parameter of the function, x, represents the first number to be added.
 * @param y - The parameter "y" is a variable that represents the second number to be added in the
 * function.
 * @returns The sum of x and y.
 */
function suma(x, y) {
    return x + y;
}

/**
 * The function "resta" subtracts the value of b from the value of a.
 * @param a - The first parameter, `a`, represents the minuend in the subtraction operation.
 * @param b - The parameter "b" is the second number that will be subtracted from the first number "a".
 * @returns the result of subtracting `b` from `a`.
 */
function resta(a, b) {
    return a - b;
}

/**
 * The function "multiplicacion" takes two parameters, "a" and "b", and returns their product.
 * @param a - The first parameter, `a`, represents the first number to be multiplied.
 * @param b - The parameter "b" is the second number that will be multiplied with the first number "a".
 * @returns the product of the two input numbers, a and b.
 */
function multiplicacion(a, b) {
    return a * b;
}

/**
 * The division function divides two numbers and throws an error if the second number is zero.
 * @param a - The dividend (the number being divided)
 * @param b - The parameter "b" represents the divisor in the division operation.
 * @returns the result of dividing `a` by `b` if `b` is not equal to zero.
 */
function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        throw new Error("Error: División por cero");
    }
}


const a = 10; 
const b = 20; 

/* The line `const resultadoSuma = suma(a, b);` is calling the `suma` function with the values of `a`
and `b` as arguments. It assigns the returned value of the function to the constant variable
`resultadoSuma`. This line calculates the sum of `a` and `b` and stores it in `resultadoSuma`. */
const resultadoSuma = suma(a, b);
console.log("Resultado de la suma:", resultadoSuma);

/* The line `const resultadoResta = resta(a, b);` is calling the `resta` function with the values of
`a` and `b` as arguments. It assigns the returned value of the function to the constant variable
`resultadoResta`. This line calculates the difference between `a` and `b` and stores it in
`resultadoResta`. */
/* The line `const resultadoResta = resta(a, b);` is calling the `resta` function with the values of
`a` and `b` as arguments. It assigns the returned value of the function to the constant variable
`resultadoResta`. This line calculates the difference between `a` and `b` and stores it in
`resultadoResta`. */
const resultadoResta = resta(a, b);
console.log("Resultado de la resta:", resultadoResta);

/* The line `const resultadoMultiplicacion = multiplicacion(a, b);` is calling the `multiplicacion`
function with the values of `a` and `b` as arguments. It assigns the returned value of the function
to the constant variable `resultadoMultiplicacion`. This line calculates the product of `a` and `b`
and stores it in `resultadoMultiplicacion`. */
const resultadoMultiplicacion = multiplicacion(a, b);
console.log("Resultado de la multiplicación:", resultadoMultiplicacion);

/* The code block `try { ... } catch (error) { ... }` is used for error handling. */
try {
    const resultadoDivision = division(a, b);
    console.log("Resultado de la división:", resultadoDivision);
} catch (error) {
    console.error(error.message);
}
