
1. Firma de una función
La firma es la forma en que se define una función:
incluye normalmente:


el nombre de la función


los parámetros que recibe


Ejemplo:
function sumar(a, b)
La firma aquí es:
sumar(a, b)
Eso significa:


la función se llama sumar


recibe 2 parámetros: a y b



2. Retorno de una función
El retorno es el valor que la función devuelve usando return.
Ejemplo:
function sumar(a, b) {  return a + b;}
Aquí:
return a + b;
devuelve el resultado de la suma.
Uso:
let resultado = sumar(2, 3);console.log(resultado); // 5
La función retorna 5.

3. Argumento en JavaScript
Los argumentos son los valores reales que le pasas a una función cuando la llamas.
Ejemplo:
sumar(2, 3)
Los argumentos son:


2


3


Mientras que en la definición:
function sumar(a, b)
a y b son parámetros.

Diferencia rápida
function saludar(nombre) {  return "Hola " + nombre;}saludar("Juan");


nombre → parámetro


"Juan" → argumento


"Hola Juan" → retorno


saludar(nombre) → firma de la función

