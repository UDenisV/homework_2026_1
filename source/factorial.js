'use strict';

/**
 * Функция, вычисляющая факториал числа
 * @param {Number} n - неотрицательное целое число
 * 
 * @example
 * // returns 120
 * factorial(5);
 * 
 * @returns {Number}
 * @throws {Error} Если n отрицательное, или не является целым числом, или слишком большое (больше 170)
 */
const factorial = n => {
    if (!Number.isInteger(n)) {
        throw new Error('Факториал определен только для целых чисел');
    }

    if (n < 0) {
        throw new Error('Факториал не определен для отрицательных чисел');
    }

    if (n > 170) {
        throw new Error('Факториал не вычисляется для чисел, больших 170');
    }

    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
    }
    
    return res;
};
