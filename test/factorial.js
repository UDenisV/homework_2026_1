'use strict';

QUnit.module('Тестируем функцию factorial', () => {
    QUnit.test('Факториал 0 должен быть 1', (assert) => {
        assert.strictEqual(factorial(0), 1, '0! = 1');
    });

    QUnit.test('Факториал 5 должен быть 120', (assert) => {
        assert.strictEqual(factorial(5), 120, '5! = 120');
    });

    QUnit.test('Факториал для отрицательного числа должен выбрасывать ошибку', (assert) => {
        assert.throws(() => {
            factorial(-1);
        }, /Факториал не определен для отрицательных чисел/, 'Ошибка выбрасывается для -1');
    });

    QUnit.test('Факториал вычисляется только для типа данных number', (assert) => {
        assert.throws(() => {
            factorial('4');
        }, /Факториал определен только для целых чисел/, 'Неверный тип данных');
    });
    
    QUnit.test('Факториал для дробного числа должен выбрасывать ошибку', (assert) => {
        assert.throws(() => {
            factorial(5.5);
        }, /Факториал определен только для целых чисел/, 'Ошибка выбрасывается для 5.5');
    
        assert.throws(() => {
            factorial(3.14);
        }, /Факториал определен только для целых чисел/, 'Ошибка выбрасывается для 3.14');
    });

    QUnit.test('Факториал для больших чисел', (assert) => {
        assert.strictEqual(factorial(12), 479001600, '12! = 479001600');
        assert.strictEqual(factorial(15), 1307674368000, '15! = 1307674368000');
    });

    QUnit.test('Факториал для очень больших чисел возвращает Infinity', (assert) => {
        assert.strictEqual(factorial(200), Infinity, '200! = Infinity');
    });

    QUnit.test('Проверка невалидные входные данные', (assert) => {
        assert.throws(() => factorial(null), /Факториал определен только для целых чисел/, 'null');
        assert.throws(() => factorial(undefined), /Факториал определен только для целых чисел/, 'undefined');
        assert.throws(() => factorial(true), /Факториал определен только для целых чисел/, 'boolean');
        assert.throws(() => factorial({}), /Факториал определен только для целых чисел/, 'object');
        assert.throws(() => factorial([]), /Факториал определен только для целых чисел/, 'array');
        assert.throws(() => factorial(() => {}), /Факториал определен только для целых чисел/, 'function');
        assert.throws(() => factorial(NaN), /Факториал определен только для целых чисел/, 'NaN');
        assert.throws(() => factorial(Infinity), /Факториал определен только для целых чисел/, 'Infinity');
        assert.throws(() => factorial(-Infinity), /Факториал определен только для целых чисел/, '-Infinity');
        assert.throws(() => factorial(), /Факториал определен только для целых чисел/, 'без аргумента');
    });
});
