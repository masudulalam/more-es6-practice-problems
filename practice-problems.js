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
// console.log(evenArray2);

// console.log(evenArray);



// Problem 2:

// array.filter()
const array = [33, 41, 97, 34, 56, 78, 40, 6, 10, 80];
const divisibleByTen = array.filter(number => number % 10 === 0);
console.log(divisibleByTen);


// array.find()
const divisibleByTen2 = array.find(number => number % 10 === 0);
console.log(divisibleByTen2);
