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

    /**
     * Рекурсивная внутренняя функция для вычисления факториала
     * @param {Number} m - текущее число для умножения
     * 
     * @example
     * // returns 5 * iter(5 - 1)
     * iter(5)
     * 
     * @returns {Number}
     */
    
    const iter = m => {
        if (m <= 1) {
            return 1;
        }
        return m * iter(m - 1);
    };

    return iter(n);
};