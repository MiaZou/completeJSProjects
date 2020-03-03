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

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1;
obj1.age =30;
console.log(obj1.age);
console.log(obj2.age);


























