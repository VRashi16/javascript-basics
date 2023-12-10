
// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 

// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     };
//     user.is18 =  function(){
//         return this.age >= 18;
//     }
//     return user;
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
// console.log(user1);
// const is18 = user1.is18();
// const about = user1.about();
// console.log(about);
const userMethod={
    about: function(){
            return `${this.fname} is of age ${this.age} lives in ${this.address}`;
        }
}

function newUser(fname,age,address){
    const user={};
    user.fname= fname;
    user.age=age;
    user.address=address;
    // user.about=function(){
    //     return `${this.fname} is of age ${this.age} lives in ${this.address}`;
    // }
    user.about=userMethod.about;
     return user;
}

const u1=newUser('rashi','17','nasfdhhhik');
//console.log(u1);
//const about1= u1.about();
console.log(u1.about());

