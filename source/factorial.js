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
 * @throws {Error} Если n отрицательное или не является целым числом
 */
const factorial = n => {
    if (!Number.isInteger(n) || typeof n !== 'number') {
        throw new Error('Факториал определен только для целых чисел');
    }

    if (n < 0) {
        throw new Error('Факториал не определен для отрицательных чисел');
    }
    
    if (n === 0 || n === 1) {
        return 1;
    }
    
    const iter = m => {
        if (m <= 1) return 1;
        return m * iter(m - 1);
    };

    return iter(n);
};