// map method returns a array
// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// const userNames = users.map((user)=>{
//     return user.firstName;
// });

// console.log(userNames);
const arra=[1,2,3,4,5,6];

console.log(arra);

// const cube= function(no){
//     return no*no*no;
// }

const newcube= arra.map(no=>{
    return no*no*no;
});
console.log(newcube);
