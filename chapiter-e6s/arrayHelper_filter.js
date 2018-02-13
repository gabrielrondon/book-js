/* 
    The filter() method creates an array filled with all array elements that
    pass a test (provided as a function)

    Filter():
    - does not execute the function for array elements without values
    - does not change the original array

*/

var countries = [
    { name: 'Brazil', continent: 'South America', IDH: 0.754},
    { name: 'Mexico', continent: 'North America', IDH: 0.762},
    { name: 'Japan', continent: 'Asia', IDH: 0.903},
    { name: 'United Kingdom', continent: 'Europe', IDH: 0.909},
    { name: 'South Africa', continent: 'Africa', IDH: 0.666},
    { name: 'Egypt', continent: 'Africa', IDH: 0.691},
    { name: 'Argentina', continent: 'South America', IDH: 0.827},
    { name: 'Paraguay', continent: 'South America', IDH: 0.693},
    { name: 'Thailand', continent: 'Asia', IDH: 0.740},
    { name: 'Australia', continent: 'Oceania', IDH: 0.939},
    { name: 'Germany', continent: 'Europe', IDH: 0.926},
    { name: 'Canada', continent: 'North America', IDH: 0.920},
    { name: 'Bolivia', continent: 'South America', IDH: 0.674},
    { name: 'Angola', continent: 'Africa', IDH: 0.533},
    { name: 'Italy', continent: 'Europe', IDH: 0.887},
    { name: 'China', continent: 'Asia', IDH: 0.738},
    { name: 'Nicaragua', continent: 'Central America', IDH: 0.645},
    { name: 'Somalia', continent: 'Africa', IDH: 0.285},
    { name: 'New Zealand', continent: 'Oceania', IDH: 0.915},
];

var southAmerica = [];

southAmerica = countries.filter(function(country){
    if (country.continent === 'South America'){
        return true;
    }
});

console.log(southAmerica);


// let's put more criteria to filter something.

filtered = countries.filter(function(country){
    return country.continent === 'Asia'
        && country.IDH > 0.800
});

console.log(filtered);