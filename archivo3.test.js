const{
    saludo,
    colors,
    fizzBuzz,
    operadoresLogicos,
    esPrimo,
    esVerdadero,
    tablaDelSeis,
    tieneTresDigitos,
    doWhile
} = require("./index3.js");

describe('saludo(idioma)', function () {
    it("Deberia devolver el idioma", function(){
        expect(saludo("ingles")).toBe("Hello!");
        expect(saludo("portugues")).toBe("Hola!");
    })
})
describe('colors(color)', function () {
    it("Deberia devolver los colores", function(){
        expect(colors("blue")).toBe("This is blue");
        expect(colors("black")).toBe("Color not found");
    })
})
describe('fizzBuzz(numero)', function () {
    it("Deberia devolver las respuesta indicada por cada condición", function(){
        expect(fizzBuzz(15)).toBe("fizzbuzz");
        expect(fizzBuzz(7)).toBe(7);
    })
})
describe('operadoresLogicos(num1, num2, num3)', function () {
    it("Deberia devolver la respuesta indicada para cada condición", function(){
        expect(operadoresLogicos(8, 6, 3)).toBe("Numero 1 es mayor y positivo");
        expect(operadoresLogicos(4, 5, -3)).toBe("Hay negativos");
        expect(operadoresLogicos(4, 5, 8)).toBe(9);
        expect(operadoresLogicos(0, 0, 0)).toBe("Error");
        expect(operadoresLogicos(3, 5, 3)).toBe(false);
    })
})
describe('esVerdadero(valor)', function () {
    it("Deberia devolver si el valor recibio es verdadero  falso", function(){
        expect(esVerdadero(true)).toBe("Soy Verdadero");
        expect(esVerdadero(false)).toBe("Soy falso");
    })
})
describe('tablaDelSeis()', function () {
    it("Deberia devolver la tabla del 6", function(){
        expect(tablaDelSeis()).toEqual([0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]);
    })
})
describe('esPrimo(numero)', function () {
    it("Deberia devolver si el digito ingresado es primo", function(){
        expect(esPrimo(3)).toBe(true);
        expect(esPrimo(18)).toBe(false);
    })
})
describe('tieneTresDigitos(numero)', function () {
    it("Deberia devolver si el número tiene 3 digitos", function(){
        expect(tieneTresDigitos(600)).toBe(true);
        expect(tieneTresDigitos(-270)).toBe(true);
        expect(tieneTresDigitos(17)).toBe(false);
        expect(tieneTresDigitos(3520)).toBe(false);
    })
})
describe('doWhile(numero)', function () {
    it("Deberia devolver el valor recibido en 5 hasta un límite de 8 veces", function(){
        expect(doWhile(5)).toBe(45);
    })
})
