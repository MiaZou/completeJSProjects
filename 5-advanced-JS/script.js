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