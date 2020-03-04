/*

var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
}

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calcAge = function() {
    console.log(2020 - this.yearOfBirth);
  }

Person.prototype.lastName = 'Smith';

var john = new Person('john', 1990, 'teacher');

var jane = new Person('Jane', 1969, 'designer');

var mark = new Person('Mark', 1948, 'retired');

john.calcAge();
jane.calcAge();
mark.calcAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// Object.create
var personProto = {
  calcuAge: function() {
    console.log(2020 - this.yearOfBirth);
  }
}

var jason = Object.create(personProto);
jason.name = 'Jason';
jason.yearOfBirth = 1990;
jason.job = 'teacher';

var jenny = Object.create(personProto, {
  name: { value: 'Jenny' },
  yearOfBirth: { value: 1969 },
  job: { value: 'designer' }
});

// Primitives vs objects

// Objects
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1; // we did not create new object, but create new reference which points to a new reference.
obj1.age =30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i=0; i<arr.length;i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculAge(el) {
  return 2020 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log(name + ', what subject do you teach?');
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQ = interviewQuestion('teacher');
var designerQ = interviewQuestion('designer');

teacherQ('John');
designerQ('John');

// Immediately Invoked Function Expression

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game();

(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

// Closures

function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function(yearOfBirth) {
    var age = 2020 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

// retirement(66)(1990);

// Bind, Call, and Apply !!!

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation('formal', 'morning');

// call - borrowing method! set this variable explicitly! 
john.presentation.call(emily, 'friendly', 'afternoon'); // Method borrowing!

// apply - takes argument as an array!
// john.presentation.apply(emily, ['friendly', 'afternoon']);

// bind - similar to call, but doesn't immediately calls the function, 
// rather generates the copy of the function!

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning'); //carring! - creating a function based on another function with preset functions!
johnFriendly('evening');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');

*/

function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

var q1 = new Question('Is ECMAScript another name of JavaScript?', ['Yes', 'No'], 0);

var q2 = new Question('Is JavaScript a fun tool to learn?', ['Yes', 'No'], 0);

var q3 = new Question('Can you use JavaScript to build awesome application?', ['Yes', 'No'], 0);

var Questions = [q1, q2, q3];

console.log(Questions);

function popQuizzes(){
  let score = 0;
  for (i=0; i<Questions.length; i++) {
    let q = Questions[i];
    console.log(q.question);
    for (j=0; j<q.answers.length; j++) {
      console.log(q.answers[j]);
    }
    let answer = prompt(q.question);

    if (answer == q.correct) {
      score += 1;
      console.log('Correct!');
    }
  }
  console.log('Your score is ' + score);
}

popQuizzes();


























