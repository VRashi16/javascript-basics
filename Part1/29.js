// how to clone array - 3 ways

// how to concatenate two arrays

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];//can't clone usig this when more items
// let array2 = array1.slice(0).concat(["item3", "item4"]);// faster using slice method..slice method will give new array starting from the index 0
// let array2 = [].concat(array1,["item3", "item4"]);
// new way 
// spread operator
let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1)
console.log(array2)
