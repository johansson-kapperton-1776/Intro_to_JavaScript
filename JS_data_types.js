// console.log('hi'); single line comment

/*
// variable

var x = 10;  // global scope
x=40;

let y =20;
y=50;

const z = 30;  // cannot reassign the const variable
z=60;


console.log(x);
console.log(y);
console.log(z);

*/

// data types
// 1) primitive data types

// undefined
let x;
x=10;
console.log(x);

// null
let y = null;
console.log(y);

// string
let str = 'cypress'
console.log(str);

// number
let num = 50.8777;
console.log(num);

// boolean
let someValue = true;
console.log(someValue);

// camel case and pascal case
let firstName = 'cypress'  //camel case -variable
let LastName = 'javascript' // pascal case -class

// 2) reference data types

// Array- contains multiple values
const arr = ['cypress', 5, true, ['javascript', 'typescript'], {}]

console.log(arr[0][1]);


// Object is a set of values within a topic (hierachy) 
const passport = {

passport1 :{

    passportNo : 123,
    name : 'rose',
    dob : '11-12-1998',
    city: 'Delhi',
    country: 'India',
    language: {
        js: 'javascript',
        ts: 'typescript'
    }

},

passport2 : {
    passportNo : 344,
    name : 'ddd',
    dob : '13-12-1998',
    city: 'Delhi',
    country: 'India'


}

}

// dot notation
console.log(passport.passport1.language.ts)
console.log(passport.name);
console.log(passport['passportNo']);

// bracket notation
console.log(passport['passport2']['name']);

// Functions
function print() {

    console.log('hi')
}
print();


const add = function() {
    console.log('Hello');
}
add();
console.log(print());
