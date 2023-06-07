'use strict';

/*---------------------------------------
                Closures
---------------------------------------*/

// Ejercicio 1
// La función counter debe retornar otra función. Esta función retornada debe actuar como un contador,
// retornando un valor numérico que empieza en 1 e incrementa con cada invocación.

// EJEMPLO
// const nuevoContador = counter()              const otroContador = counter()
// nuevoContador()     //                       1otroContador()      // 1
// nuevoContador()     //                       2otroContador()      // 2

function counter() {
    // Creamos una variable cont;
    let cont = 1

    // la cual se irá incrementando con cada ejecución
    return function(){
        return cont++
    }
}



// Ejercicio 2
// Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
// que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
// al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
// otra vez cálculos que ya se hicieron anteriormente.

// - cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento;
// hecho eso, debe guardar el argumento junto con el resultado de la invocación.
// tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a (cb)
// de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb,
// porque el resultado estará guardado en la "memoria caché".

// Por ejemplo:

//  function square(n){
//      return n * n
//  }

//  const squareCache = cacheFunction(square)

//  squareCache(5)          --> invocará a square(5), almacenará el resultado y lo retornará
//  squareCache(5)          --> no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5)
//                              y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty)

function cacheFunction(cb) {
    // Creamos el objeto (que nos recomiendan crear en el enunciado);
    // este nos servirá para ir almacenando los valores de las operaciones
    let memory = new Object()

    return function(argumento){
        // Cuando ejecutamos la función, primero evaluamos si YA EXISTE la propiedad en nuestro objeto;

        // si NO EXISTE significa que será la primera vez que ejecutemos nuestro 'cb' con el 'argumento' ingresado,
        // entonces lo creamos en nuestro objeto 'memory'
        if (!memory.hasOwnProperty(argumento)) memory[argumento] = cb(argumento)

        // Como nuestro argumento ahora EXISTE, ya sea por creación o por lectura, lo retornamos
        return memory[argumento]
    }
}



/*---------------------------------------
                Bind
---------------------------------------*/

var instructor = {
   nombre: 'Franco',
   edad: 25,
};

var alumno = {
   nombre: 'Juan',
   curso: 'FullStack',
};

function getNombre() {
  return this.nombre;}

// Ejercicio 3
// IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
// Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre
// pero retornen el nombre del instructor y del alumno, respectivamente.

// Solo bindeo la función getNombre para que el this que contiene, haga referencia al objeto instructor:
let getNombreInstructor = getNombre.bind(instructor);

// Solo bindeo la función getNombre para que el this que contiene, haga referencia al objeto alumno:
let getNombreAlumno = getNombre.bind(alumno);



// Ejercicio 4
// Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación,
// tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente).
// Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 

//                             a                   b              c
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
} //                a                c             b

// Utilizamos la propiedad .bind() pero esta vez, no nesecitamos referenciar ningun objeto externo,
// solo fijar los valores del primer y segundo parametro de nuestra función 'crearCadena'

//                                     bind   a    b
let textoAsteriscos = crearCadena.bind(null, '*', '*');
let textoGuiones = crearCadena.bind(null, '-', '-');
let textoUnderscore = crearCadena.bind(null, '_', '_');

// No modifiquen nada debajo de esta linea
// ---------------------------------------

module.exports = {
   counter,
   cacheFunction,
   getNombreInstructor,
   getNombreAlumno,
   textoAsteriscos,
   textoGuiones,
   textoUnderscore,
};
