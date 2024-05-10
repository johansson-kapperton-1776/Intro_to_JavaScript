// for loop - for(intializer, condition, increment) 
const arr = ['a', 'b', 'c', 'd', 'e']
const length = arr.length - 1

console.log(length);

for(let i = -4; i < length; i++)  {
    console.log(arr[i]);
}

//for in loop

for(let index in arr)  {
    console.log(index);
    console.log(arr[index]);
}

// for of loop - return only the values of array
for(let index of arr) {
    console.log(index);
}

// for each loop
let array = ['a', 'b', 'c', 'd', 'e', 'f']
array.forEach(print);

function print(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
}
// while loop

// do while loop


// reverse string
const str = 'javascript'
let len = str.length
console.log(length);

for(let i = len; i >= 0; i--) {
    console.log(str[i]);
}

const splited = str.split('').reverse().join('');
console.log(splited);

for(let index of splited) {
    console.log(index);
    arr.unshift(index)
}

