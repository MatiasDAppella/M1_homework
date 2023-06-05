// var array = ["hola", { name: "Messi" }, 10, true, [1, 2, 3]];
// //             0            1           2    3       4
// var posicion = 4;

// console.log(array[posicion].length, "< Longitud");
// // console.log(array[3 - 2]); // 3-2 > return 1
// // console.log(array[1]);

// var numberTwo = array[4][1]; // > [1,2,3] > array[1]
// console.log(numberTwo);

// function BinarioADecimal(num) {
//     let arr = num.split('').map(n => Number(n)).reverse()
//     let res = 0;
  
//     for (let i = 0; i < arr.length; i++){
//       res += (Math.pow(2, i) * arr[i])
//     }
    
//     return res
// }

// console.log(BinarioADecimal('100101'))

function DecimalABinario(num) {
    let binary = new Array()
    while (num > 1){
        binary.push(num % 2)
        num = Math.floor(num / 2)
    }
    binary.push(num)
    return binary.reverse().join('')
}

console.log(DecimalABinario(27))