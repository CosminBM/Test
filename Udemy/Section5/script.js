// Fucntion constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
 
}

Person.prototype.calculateAge = function() {
        console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';


var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// Practice Constructor & Objects
//
//var Props = function(color, seats, year) {
//    this.color = color;
//    this.seats = seats;
//    this.year = year;
//     
//}
//
//Props.prototype.modelToyota = 'Century';
//Props.prototype.modelHonda = 'CR-V';
//Props.prototype.modelBmw = 'Fx16 X6';
//Props.prototype.yearOfFabrication = function() {
//        console.log(2018 - this.year);
//};
//
//var toyota = new Props('red', 4, 2005);
//var honda = new Props('blue', 5, 2007);
//var bmw = new Props('green', 3, 2009);
//
//toyota.yearOfFabrication();
//honda.yearOfFabrication();
//bmw.yearOfFabrication();
//
//console.log(toyota.modelToyota);
//console.log(honda.seats);
//console.log(bmw.modelBmw);
//console.log(bmw.color);
//console.log(toyota.year);







