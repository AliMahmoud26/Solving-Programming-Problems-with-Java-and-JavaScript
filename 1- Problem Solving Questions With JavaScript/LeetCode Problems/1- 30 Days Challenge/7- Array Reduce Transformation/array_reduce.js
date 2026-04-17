/*
    Array Reduce Transformation
    --------------------------
    The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
    --------------------------
    * Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
    * This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
    * If the length of the array is 0, the function should return init.
    * Please solve it without using the built-in Array.reduce method.
*/

let reduce = function(nums, fn, init) {
    let accumulator = init;
    let n = nums.length;
    
    for (let i = 0; i < n; i++) {
        accumulator = fn(accumulator, nums[i]);
    }

    return accumulator;
}

let nums = [1, 2, 3, 4];
let fn = function(accumulator, currentValue) {return accumulator + currentValue;};
let result = reduce(nums, fn, 0);
console.log(result); // Output: 10