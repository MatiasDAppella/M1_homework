'use strict'
// No cambies los nombres de las funciones.

function factorear(num, arr = [1], div = 2) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    
    if (num == 1) return arr;
    if (num % div == 0){
        arr.push(div)
        return factorear(num/div, arr, div)
    } else return factorear(num, arr, ++div)
};

function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    for (let lng = array.length; lng > 0; lng--){
        for (let i = 1; i < lng; i++){
            let prev = array[i - 1]

            if (prev > array[i]){
                array[i - 1] = array[i]
                array[i] = prev
            }
        }
    }
    return array
};

function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:

    for (let lng = 1; lng < array.length; lng++){
        for (let i = lng; i > 0; i--){
            let prev = array[i - 1]

            if (prev > array[i]){
                array[i - 1] = array[i]
                array[i] = prev

            } else break;
        }
    }
    return array
};

function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:

    for (let actPosition = 0; actPosition < array.length; actPosition++){
        let minPosition = actPosition

        for (let i = (actPosition + 1); i < array.length; i++){
            if (array[i] < array[minPosition]) minPosition = i
        }

        let aux = array[actPosition]
        array[actPosition] = array[minPosition]
        array[minPosition] = aux
    }
    return array
};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
