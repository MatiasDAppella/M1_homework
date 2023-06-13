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

function factorear2(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:

    let arr = [ 1 ]
    let div = 2
    while (num > 1){
        if (num % div == 0){
            arr.push(div)
            num = num/div
        }
        else div++
    }
    return arr
};