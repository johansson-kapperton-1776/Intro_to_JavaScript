// Operators

// 1) Arithmetic - mathematical calculations
let add1 = 10;
let add2 = 20;

console.log(add1 + add2);
console.log(add1 - add2);
console.log(add1 * add2);
console.log(add1 / add2);
console.log(add1 % add2);  // remainder

// exponentation
console.log(add1 ** add2);

// increment
console.log(++add1); // Increment 
console.log(--add2);  // decrement

// 2) Assignment operators
let x = 15;
x /= 5;
console.log(x);

// 3) comparsion operators - equal and not equal
const val1 = 10;
const val2 = 20;
console.log(val1 == val2); // returns true or false
console.log(val1 != val2);

// strict equal and not equal 
const value = 30;
const value1 = '30';
console.log(val1 === val2); // will return false since value1 is string
console.log(val1 !== val2);

// greater/less than
console.log(10 > 5); // returns true or false
console.log(10 <= 5);

// 4) Logical Operators - And/Or/!
// && - if both conditions are true then it will return true
console.log(10 == 10 && 20 == 20);

// || - OR - if any condition is true then it will return true
console.log(10 == 10 || 20 == 20); 

// NOT - !=
console.log(5 != 10); // returns true bc statement is not true

// 5) Terenary operators 
const Terenary = (10 == 10) ? "true executed": "False Executed";
console.log(Terenary);

// if-else statement
if(10 == 10)  {
    console.log("true executed");

} else {
    console.log("false executed");
}