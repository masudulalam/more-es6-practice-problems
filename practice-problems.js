// Problem 1:
const oddArray = [1 , 3, 5, 7, 9];
// using for loop
let evenArray = [];
// for (let i = 0; i < oddArray.length; i++) {
//     const evenNumber = oddArray[i] + 1;
//     evenArray.push(evenNumber);
// };
// console.log(evenArray);

// using for of loop
// for (const number of oddArray) {
//     const evenNumber = number + 1; 
//     evenArray.push(evenNumber);
// }


// using map() method
const evenArray2 = oddArray.map(number => number + 1);
console.log(evenArray2);

// console.log(evenArray);

