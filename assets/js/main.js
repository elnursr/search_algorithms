// let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
//     targetSymbol = 'E',
//     result = '';

// // ******* procedural_paradigm_start_here *******

// let index = 0;
// while (index < myArray.length) {
//     if (targetSymbol === myArray[index]) {
//         console.log(index);
//     }
//     index++;
// }
// if (targetSymbol !== myArray[index]) {
//     return -1;
// }

// // ******* procedural_paradigm_end_here *******

// // ******* functional_paradigm_start_here *******

// let searchObject = {
//     customArray: myArray,
//     targetItem: 'S'
// };

// // result = customLinearSearch(myArray, '#'); // index => -1
// result = customLinearSearch(searchObject); // index => 28

// console.log(result);

// function customLinearSearch({ customArray, targetItem }) {
//     let index = 0;
//     while (index < customArray.length) {
//         if (targetItem === customArray[index]) {
//             return index;
//         }
//         index++;
//     }
//     if (targetItem !== customArray[index]) {
//         return -1;
//     }
// }

// // ******* functional_paradigm_end_here *******