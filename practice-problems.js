// Problem 1:
const oddArray = [1 , 3, 5, 7, 9];
// using for loop
let evenArray = [];
for (let i = 0; i < oddArray.length; i++) {
    const evenNumber = oddArray[i] + 1;
    evenArray.push(evenNumber);
};
console.log(evenArray);

