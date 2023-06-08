/*-------------------------------------------
                Queue class
-------------------------------------------*/

class Queue {
    constructor(){
        this.data = new Array()
    };
    
    enqueue(e){
        this.data.push(e)
    };

    dequeue(){
        if (this.data.length == 0) return undefined
        let e = this.data.shift()
        return e
    };

    size(){
        return this.data.length
    }
}

// let cola = new Queue()

// console.log(cola.add('a'))
// console.log(cola.add('b'))
// console.log(cola.add('c'))

// console.log(cola.data)

// console.log(cola.remove())

// console.log(cola.data)



/*-------------------------------------------
            Función Factorial
-------------------------------------------*/

function nFactorial(n){
    // Si n es igual a 1, termina el procedimiento, retornando el valor de n (1)
    if (n == 1) return n

    // Sino;
    else {
        // 1. creamos una variable y le almacenamos el valor actual de (n)
        let actual = n
        // 2. restamos 1, al valor de (n)
        n--
        // 3. invocamos nuevamente la función nFactorial(n);
        //    con el valor disminuido de (n) que es uno menos al (actual)
        return actual * nFactorial(n)
    }
}

// let n = 5
// console.log('El factorial de --> ' + n + ' <-- es: ' + nFactorial(n));



/*-------------------------------------------
            Función Fibonacci
-------------------------------------------*/

function nFibonacci(n) {
    if (n < 2) return n
    else {
        let cont = [1, 0]
    
        function recursive(n){
            cont.unshift(cont[0] + cont[1])
            if (n !== 0) return recursive(n - 1)
        }

        recursive(n - 2)
        return cont[0]
    }
}

console.log(nFibonacci(6))