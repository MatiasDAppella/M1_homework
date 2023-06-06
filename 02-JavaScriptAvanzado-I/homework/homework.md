# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;                           // Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas.
var a = 5;                       // Las variables no declaradas siempre son globales.
var b = 10; 
var c = function (a, b, c) {     // (8, 9, 10)
   var x = 10;                   
   console.log(x);               
   console.log(a);               
   var f = function (a, b, c) {  // (8, 9, 10)
      b = a;                     
      console.log(b);            
      b = c;                     
      var x = 5;                 
   };
   f(a, b, c);                   
   console.log(b);               
};
c(8, 9, 10);                     // --> 10 --> 8 --> 8 --> 9
console.log(b);                  // --> 10
console.log(x);                  // --> 1
```

```javascript
console.log(bar);                // --> undefined
console.log(baz);                // --> ReferenceError: baz is not defined
foo();                           
function foo() {
   console.log('Hola!');
}
var bar = 1;                     // Hoisting define "bar" pero no le asigna valor
baz = 2;                         // Hoisting no hace nada porque es una instrucción netamente de asignación
```

```javascript
var instructor = 'Tony';
if (true) {                      // Se ejecuta if, porque el valor es true
   var instructor = 'Franco';    // la variable "instructor" se pisa con el valor 'Franco'
}
console.log(instructor);         // --> 'Franco'
```

```javascript
var instructor = 'Tony';
console.log(instructor);         // --> 'Tony'
(function () {                   // IIFE (Immediately Invoked Function Expression).
   if (true) {
      var instructor = 'Franco'; // Se crea una variable "instructor" dentro del entorno de la función.
      console.log(instructor);   // --> 'Franco'         (NO modifica la variable global "instructor")
   }
})();
console.log(instructor);         // --> 'Tony'
```

```javascript
var instructor = 'Tony';         // --> var: declara una variable con un scope global, mientras que;
let pm = 'Franco';               // --> let: limita el scope al bloque o expresión donde se está utilizando.
if (true) {
   var instructor = 'The Flash'; // Variable global "instructor" se pisa.
   let pm = 'Reverse Flash';     // Se crea una variable dentro del entorno de la estructura de control.
   console.log(instructor);      // --> 'The Flash'
   console.log(pm);              // --> 'Reverse Flash'
}
console.log(instructor);         // --> 'The Flash'
console.log(pm);                 // --> 'Franco'
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"           // 2
"2" * "3"         // 6
4 + 5 + "px"      // "9px"
"$" + 4 + 5       // "$45"
"4" - 2           // 2
"4px" - 2         // NaN - En JavaScript, NaN es un numero que no es legal.
7 / 0             // Infinity
{}[0]             // undefined
parseInt("09")    // 9
5 && 2            // 2
2 && 5            // 5
5 || 0            // 5
0 || 5            // 5 - Primer valor da falso, entonces retorna el segundo.
[3]+[3]-[10]
3>2>1             // false - 3 > 2 --> (true) / true > 1 --> (false) porque true == 1
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);      // --> undefined  - Porque Hoisting crea la variable a, pero nunca le asigna valor.
   console.log(foo());  // --> 2          - Porque foo() retorna el valor numerico 2.

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';          // getFood(false) no devuelve nada porque:

function getFood(food) {         // (food: false)
   if (food) {                   // if (food: false == true) --> false, if no se ejecuta.
      var snack = 'Friskies';
      return snack;
   }
   return snack;                 // la variable snack no está declarada;
}                                // return no devuelve ningun valor.

getFood(false);
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';           // ?
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());   // 'Aurelio De Rosa'

var test = obj.prop.getFullname;

console.log(test());                   // undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);            // (1) se ejecuta automaticamente.
   setTimeout(function () {
      console.log(2);         // (4) sale ultimo de la web api, luego del tercer console log.
   }, 1000);
   setTimeout(function () {
      console.log(3);         // (3) sale primero de la web api.
   }, 0);
   console.log(4);            // (2) se ejecuta automaticamente luego del primer console log.
}

printing();                   // --> 1 --> 4 --> 3 --> 2
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
