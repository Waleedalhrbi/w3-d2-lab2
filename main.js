/* Task1-1 */

let numbers = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10];
let arng = numbers.sort((num1, num2) => num1 - num2);
console.log(arng);

/* Task1-2 */

let newArr = numbers.map(num => num * num);
console.log(newArr);

/* Task1-3 */

let cont5 = numbers.includes(5);
console.log(cont5);

/* Task1-4 */
let cont3 = numbers.includes(3);
console.log(cont3);

/* Task1-5 */

let evenArr = numbers.filter(evenum => evenum %2 ===0);
console.log(evenArr);

/* Task1-6 */

let middle1 = Math.floor((numbers.length - 1) / 2);
let middle2 = middle1 + 1;

numbers.splice(middle1, 2);
console.log(numbers);

/* Task1-7 */

let prod = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(prod);

/* Task1-8 */
let ind = numbers.findIndex(num9 => num9 > 5);
console.log(ind);

/* Task1-9 */
console.log(numbers.pop());

/* Task1-10 */
numbers.push(100);
console.log(numbers);


/* Task2-1 */

let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

let nameA = names.filter(name => name.includes('a'));
console.log(nameA);

/* Task2-2 */
let nameWithdsh = names.join('-');
console.log(nameWithdsh);


/* Task3-1 */

let fruits = ['apple', 'banana', 'cherry', 'date','elephant', 'bird', 'lion'];
let nameb = fruits.some(fru => fru.startsWith('b'));
console.log(nameb);

/* Task3-2 */
let newArray = fruits.slice(1, 4);
console.log(newArray);

/* Task3-3 */
fruits.unshift("yellow");
console.log(fruits);


/* Task4-1 */

let words = ['hello', 'world', 'javascript', 'array', 'function'];
let longst = words.map(word => word.length);
console.log(longst);

/* Task4-2 */

if (words.includes("javascript")) {
    console.log("javascript");
} else {
    console.log("Does not exist");
}