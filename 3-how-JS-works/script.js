function calculateAge(year) {
  console.log(2020 - year);
}

calculateAge(1990);


// Hoisting: first use it and then declare it. It only works for function declaration! Not function expression!

calculateAge(1990);

function calculateAge(year) {
  console.log(2020 - year);
}

// function expression

// if calling function before function expression - error will occur.

var retirement = function(year) {
  console.log(65 - (2020 - year));
}

retirement(1990);

// for variable: 
console.log(age); // undefined;
var age = 23;
console.log(age); // 23