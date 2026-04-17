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

// Second approach using for...of loop
let map = function(arr, fn) {
    let newArray = [];
    let index = 0;

    for (const element of arr) {
        newArray.push(fn(element, index));
        index++;
    }

    return newArray;
}

// For...of loop map function call
let arr = [10, 20, 30]
let plusone = function(n) { return n + 1; };
let result = map(arr, plusone);
console.log(result);