/* 
Basically with forEach we can loop over the elements of an array.
Instead of using a 'for' like:
    for (var index=0; i < myArray.length; index++) {
        console.log(myArray[index]);
    }

You can use forEach:

    myArray.forEach(function(value){
        console.log(value)
    })
    */


//forEach example

var cities = [ 'New York', 'Sao Paulo', 'Paris', 'Londres', 'Tokio'];

cities.forEach(function(city){
    console.log(city);
});

// another way to insert with the function

var numbers = [ 5, 2, 7, 3 ]
var sum = 0

function add(number){
    sum += number;
};

numbers.forEach(add);

console.log(sum);