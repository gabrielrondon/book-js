/*
Before start with the Array.map, let's be clear about the differences
with the Array.forEach

Array.forEach = executes a provided function once per array element. So,
returns undefined.

Array.map = creates a new array with the results of calling a provided
function on every element in this array. So, .map() returns an array of
elements resulting from the processed function

.map() returns a new array while .forEach() does not. 
*/

// example

var numbers = [2, 4, 10];

var square = numbers.map(function(number){
    return number * number; 
});

console.log(square);


// another example

var countries = [
    { country: 'Brazil', code: 'BR'},
    { country: 'United States', code: 'US'},
    { country: 'France', code: 'FR'}
];

var codes = countries.map(function(country){
    return country.code;
})

console.log(codes);

