'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList(){
    this.head = null,
    this._length = 0,

    // add: añade un nuevo nodo al final de la lista.
    this.add = function(v){
        let newElement = new Node(v)
        if (this._length === 0) this.head = newElement
        else {
            let current = this.head
            while (current.next) current = current.next
            current.next = newElement
        }
        this._length++
    },

    // remove: elimina el último nodo de la lista y retorna su valor.
    this.remove = function(){
        let e;
        switch (this._length){
            case 0:
                return null
                
            case 1:
                e = this.head.value
                this.head = null
                this._length--
                return e

            default:
                let current = this.head
                while (current.next.next) current = current.next
                e = current.next.value
                current.next = null
                this._length--
                return e
        }
    },

    // search: busca un nodo que coincida con el parametro ingresado.
    //      1. concidera el valor del parametro, o;
    //      2. concidera que el parametro es un cb que retorna true/false.
    this.search = function(x){
        let current = this.head
        switch (typeof x){
            case 'function':
                let callback = x
                for (let i = 0; i < this._length; i++){
                    if (callback(current.value)) return current.value
                    else current = current.next
                }
                break;

            default:
                for (let i = 0; i < this._length; i++){
                    if (x == current.value) return current.value
                    else current = current.next
                }
                break;
        }
        return null
    }
}

function Node(value){
    this.value = value,
    this.next = null
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
class HashTable {
    constructor(){
        this.numBuckets = 35
        this.buckets = new Array(this.numBuckets)
    };

    // hash: hashea el input y determina en que bucket se almacenará.
    hash(input){
        let bucket = 0;
        for (let i = 0; i < input.length; i++){
            bucket += input.charCodeAt(i)
        }
        return bucket % this.numBuckets
    };

    // set: recibe el objeto 'clave' y 'valor' (como dos parametros distintos),
    //      hashea la clave invocando el metodo .hash() y almacena el dato.
    set(key, value){
        if (typeof key !== 'string') throw new TypeError('Keys must be strings')
        let i = this.hash(key)
        if (this.buckets[i] == undefined) this.buckets[i] = new Object()
        this.buckets[i][key] = value
    };

    // get: recibe una clave por parámetro, y busca el valor en el bucket correspondiente.
    get(key){
        if (this.hasKey(key)) {
            let i = this.hash(key)
            return this.buckets[i][key]
        }
    };

    // hasKey: recibe una clave por parámetro, y devuelve;
    //       - true si hay algo almacenado con esa clave.
    //       - false si no hay nada almacenado con esa clave.
    hasKey(key){
        let i = this.hash(key)
        return this.buckets[i].hasOwnProperty(key)
    };
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
