//static list vs live list
const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
console.log(listItems)

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

// ul.append(sixthLi);
// console.log(listItems);