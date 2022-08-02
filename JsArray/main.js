// The Array object is used to store multiple values in a single variable:
// Array indexes are zero-based: The first element in the array is 0, the second is 1, and so on.

// concat()
// The concat() method concatenates (joins) two or more arrays.

// The concat() method returns a new array, containing the joined arrays.

// The concat() method does not change the existing arrays.

// Join two arrays:
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var children = arr1.concat(arr2);
console.log(children);

// Join three arrays:
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin"];
var children = arr1.concat(arr2, arr3);
console.log(children);

// Concatenate strings and numbers:

var arr1 = ["Cecilie", "Lone"];
var arr2 = [1, 2, 3];
var arr3 = arr1.concat(arr2);
console.log(arr3);

// Concatenate nested arrays:
var arr1 = [1, 2, 
    [3, 4]
];
var arr2 = [
    [5, 6],
     7, 8];
var arr3 = arr1.concat(arr2);
console.log(arr3);
