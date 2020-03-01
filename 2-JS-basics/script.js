/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

let massMark, massJohn, heightMark, heightJohn;

massMark = 64;
massJohn = 75;
heighMark = 1.72;
heightJohn = 1.78;

let BMIMark = massMark / heightMark^2;
let BMIJohn = massJohn / heightJohn^2;

// let isMarkHigher = massMark > massJohn;
// console.log("Is Mark's BMI higher than John's?" + " " + isMarkHigher);

if (BMIMark > BMIJohn) {
  console.log("Mark\'s BMI is higher than John\'s.");
} else {
  console.log("John\'s BMI is higher than Mark\'s.");
}


/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

let averageJohn = (89 + 120 + 103) / 3;
let averageMike = (116 + 94 + 123) / 3;

if (averageJohn > averageMike) {
  console.log("John wins the games with a average score of " + averageJohn);
} else if (averageJohn < averageMike) {
  console.log("Mike wins the games with a average score of " + averageMike);
} else {
  console.log("Both teams scores the same!");
}

let averageMary = (97 + 134 + 105) / 3;

console.log(averageJohn, averageMike, averageMary);

if (averageJohn > averageMike && averageJohn > averageMary) {
  console.log("John wins the games with a average score of " + averageJohn);
} else if (averageMike > averageJohn && averageMike > averageMary) {
  console.log("Mike wins the games with a average score of " + averageMike);
} else if (averageMary > averageMike && averageMary > averageJohn) {
  console.log("Mary wins the games with a average score of " + averageMary);
} else {
  console.log("There is a draw, :)");
}


/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

let bill = [124, 48, 268];

function totalPrice(bill) {
  if (bill < 50) return bill * 1.2;
  if (50 <= bill < 200) return bill * 1.15;
  if (bill >= 200) return bill * 1.1;
}

let total = [totalPrice(bill[0]), totalPrice(bill[1]), totalPrice(bill[2])];

console.log(total);

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

let Mark = {
  fullname: "Mark Smith",
  mass: 64,
  height: 1.72,
  calcBMI: function() {
    this.BMI = this.mass / this.height ^ 2;
    return this.BMI;
  }
};

let John = {
  fullname: "John Andersen",
  mass: 75,
  height: 1.78,
  calcBMI: function() {
    this.BMI = this.mass / this.height ^ 2;
    return this.BMI;
  }
};


function higherBMI(a, b, BMIa, BMIb){
  if (BMIa > BMIb) {
    console.log(`${a} has higher BMI than ${b}. ${a} has a BMI of ${BMIa}.`);
  } else if (BMIb > BMIa) {
    console.log(`${b} has higher BMI than ${a}. ${b} has a BMI of ${BMIb}.`);
  } else {
    console.log(`${a} and ${b} have the same BMI.`);
  }
}

// console.log(Mark.calcBMI());
// console.log(John.calcBMI());

higherBMI('Mark', 'John', Mark.calcBMI(), John.calcBMI());











