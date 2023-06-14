'use strict'
// No cambies los nombres de las funciones.

function quickSort(arr) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    if (arr.length < 2) return arr
    const pivot = arr.pop()
    const minors = arr.filter(numbers => numbers < pivot)
    const majors = arr.filter(numbers => numbers >= pivot)
    const left = quickSort(minors)
    const right = quickSort(majors)
    return [...left, pivot, ...right]
}

function mergeSort(arr) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    if (arr.length < 2) return arr
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(leftArr, rightArr){
    let sortedArr = new Array()
    while (leftArr.length && rightArr.length){
        if (leftArr[0] < rightArr[0]){
            sortedArr.push(leftArr.shift())
        } else sortedArr.push(rightArr.shift())
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
