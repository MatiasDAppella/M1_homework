// function factorear(num, arr = [1], div = 2) {
//     // Factorear el número recibido como parámetro y devolver en un array
//     // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
//     // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
//     // Tu código:
    
//     if (num < 1) return num;
//     if (num == 1) return arr;
//     if (num % div == 0){
//         arr.push(div)
//         return factorear(num/div, arr, div)
//     } else return factorear(num, arr, ++div)
// };

// function factorear2(num) {
//     // Factorear el número recibido como parámetro y devolver en un array
//     // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
//     // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
//     // Tu código:

//     let arr = [ 1 ]
//     let div = 2
//     while (num > 1){
//         if (num % div == 0){
//             arr.push(div)
//             num = num/div
//         }
//         else div++
//     }
//     return arr
// };

function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    let changed = true
    for (let lng = array.length; (lng > 1 && changed); lng--){
        changed = false
        for (let i = 1; i < lng; i++){
            let prev = array[i - 1]

            if (prev > array[i]){
                changed = true
                array[i - 1] = array[i]
                array[i] = prev
            }
        }
    }
    return array
};

let arr = [1, 2, 3, 20, 5, 7]

console.log(bubbleSort(arr).reverse().join('\n'))