 //Function constructor
//
//var john = {
//    name: 'John',
//    yearOfBirth: 1990,
//    job: 'teacher'
//};
//
//var Person = function(name, yearOfBirth, job) {
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
// 
//}
//
//Person.prototype.calculateAge = function() {
//        console.log(2016 - this.yearOfBirth);
//};
//
//Person.prototype.lastName = 'Smith';
//
//
//var john = new Person('John', 1990, 'teacher');
//var jane = new Person('Jane', 1969, 'designer');
//var mark = new Person('Mark', 1948, 'retired');
//
//john.calculateAge();
//jane.calculateAge();
//mark.calculateAge();
//
//console.log(john.lastName);
//console.log(jane.lastName);
//console.log(mark.lastName);
//
//
// //Practice Function constructor
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
//console.log(honda.year);
//console.log(bmw.year);
//
// //Object.create
//
//var personProto = {
//    calculateAge : function() {
//        console.log(2016 - yearOfBirth);
//    }
//};
//
//
//var john = Object.create(personProto);
//john.name = 'John';
//john.yearOfBirth = 1990;
//john.job = 'teacher';
//
//
//var jane = Object.create(personProto, {
//    name: { value: 'Jane' },
//    yearOfBirth: { value: 1969 },
//    job: { value: 'designer' }
//});
//
//
//// Primitives vs Objects
//
////Primitives
//var a = 23;
//var b = a;
//console.log(a);
//console.log(b);
//
//// Objects
//var obj1 = {
//    name: 'John',
//    age: 26
//};
//var obj2 = obj1;
//obj1.age = 30;
//console.log(obj1.age);
//console.log(obj2.age);
//
//Functions
//var age = 27;
//var obj = {
//    name: 'Jonas',
//    city: 'Lisbon'
//};
//
//function change (a, b) {
//    a = 30;
//    b.city = 'San Francisco';
//}
//
//change(age, obj);
//
//console.log(age);
//console.log(obj.city);


// Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}


function maxHeartRate(el) {
    if (el >= 18 && el <= 81){
        return Math.round (206.9 - (0.67 * el));
    } else {
        return -1;
    }
}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);


























