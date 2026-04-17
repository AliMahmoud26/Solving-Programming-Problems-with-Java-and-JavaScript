/* 
2635. Apply Transform Over Each Element in Array
Solved
Easy
Companies
Hint
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
*/

// The Solution
// const map = function(arr, fn) {
//     let newArray = []
//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(fn(arr[i], i))
//     }
//     return newArray
// }

// let arr = [1, 2, 3];
// let plusone = function(n) { return n + 1; };
// let result = map(arr, plusone);
// console.log(result);


// Third approach using for...each loop
let map = function(arr, fn) {
    let newArray = [];

    arr.forEach((element, index) => {
        newArray.push(fn(element, index));
    });

    return newArray;
}

// For...each loop map function call
let arr = [100, 200, 300]
let plusone = function(n) { return n + 1; };
let result = map(arr, plusone);
console.log(result);