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

















