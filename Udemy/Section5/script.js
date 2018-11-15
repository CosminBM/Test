/////////////////////////////
// //Lecture: Function constructor
//
////Function constructor
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
/////////////////////////////
// //Lecture: Object.create
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
////Functions
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
//
/////////////////////////////
// //Lecture: Passing functions as arguments
//
// //Passing functions as arguments
//
//var years = [1990, 1965, 1937, 2005, 1998];
//
//function arrayCalc(arr, fn) {
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//
//function calculateAge(el) {
//    return 2016 - el;
//}
//
//function isFullAge(el) {
//    return el >= 18;
//}
//
//
//function maxHeartRate(el) {
//    if (el >= 18 && el <= 81){
//        return Math.round (206.9 - (0.67 * el));
//    } else {
//        return -1;
//    }
//}
//
//
//var ages = arrayCalc(years, calculateAge);
//var fullAges = arrayCalc(ages, isFullAge);
//var rates = arrayCalc(ages, maxHeartRate);
//console.log(ages);
//console.log(fullAges);
//console.log(rates);
//
///////////////////////////
////Lecture: Functions returning functions
//
////Functions returning functions
//
//
//function interviewQuestion(job) {
//    if ( job === 'designer') {
//        return function(name) {
//            console.log(name + ', can you please explain what UX design is?');
//        } 
//    } else if (job === 'teacher') {
//        return function(name) {
//            console.log('What subject do you teach, ' + name +'?');
//        }
//    } else {
//        return function(name) {
//            console.log('Hello ' + name + ', what do you do?');
//        }
//    }
//}
//
//var teacherQuestion =  interviewQuestion('teacher');
//var designerQuestion = interviewQuestion('designer');
//
//teacherQuestion('John');
//designerQuestion('John');
//designerQuestion('Mark');
//designerQuestion('Jane');
//designerQuestion('Mike');
//
//interviewQuestion('teacher')('Mark');
//
//
//function myDescription(qualities) {
//    if ( qualities === 'ambitious') {
//        return function(name) {
//            console.log(name + ' you are a very ambitious person!');
//        }
//    } else if (qualities === 'complacent') {
//        return function(name) {
//            console.log(name + ' you need to overtake yourself daily!')
//        }
//    } else {
//        return function(name) {
//            console.log(name + ' how do you see yourself as a person?')
//        }   
//    }
//}
//
//var personJohn = myDescription('ambitious');
//personJohn('John');
//
//myDescription('complacent')('Mark');
//
///////////////////////////
////Lecture: IIFE (Immediatly Invoked Functions Expressions)
//
//function game() {
//    var score = Math.random() * 10;
//    console.log(score >= 5);
//}
//game(3);
//
//(function () {
//    var score = Math.random() * 10;
//    console.log(score >= 5); 
//})();
//
//
//console.log(score);
//
//(function (goodLuck) {
//    var score = Math.random() * 10;
//    console.log(score >= 5 - goodLuck); 
//})(5);
//
///////////////////////////
////Lecture: Closures
//
//
//function retirement(retirementAge) {
//    var a = ' years left until retirement.';
//    return function(yearOfBirth) {
//        var age = 2016 - yearOfBirth;
//        console.log((retirementAge - age) + a);
//    }
//}
//
//var retirementUS = retirement(66);
////retirement(66)(1990);
//var retirementGermany = retirement(65);
//var retirementIceland = retirement(67);
//
//retirementGermany(1990);
//retirementUS(1990);
//retirementIceland(1990);
//
//
//
//function interviewQuestion(job) {
//    return function(name) {
//        if ( job === 'designer') {
//            console.log(name + ', can you please explain what UX design is?');
//        } else if ( job === 'teacher') {
//            console.log('What subject do you teach, ' + name +'?');
//        } else {
//            console.log('Hello ' + name + ', what do you do?');
//        } 
//    }   
//}
//
//interviewQuestion('designer')('John');
//interviewQuestion('teacher')('Mark');
//interviewQuestion('')('Jonas');
//
///////////////////////////
////Lecture: Bind, call and apply
//
//var john = {
//    name: 'John',
//    age: 26,
//    job: 'teacher',
//    presentation: function(style, timeOfDay) {
//        if (style === 'formal') {
//            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//        } else if (style === 'friendly') {
//            console.log('Hey! What\'s up? I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//        }
//    }  
//}
//
//var emily = {
//    name: 'Emily',
//    age: 35,
//    job: 'designer'
//};
//
//
//john.presentation('formal', 'morning');
//
//john.presentation.call(emily, 'friendly', 'afternoon');
//
////john.presentation.apply(emily, ['friendly', 'afternoon']);
////Caryying
//var johnFriendly = john.presentation.bind(john, 'friendly');
//
//johnFriendly('morning');
//johnFriendly('night');
//
//
//var emilyFormal = john.presentation.bind(emily, 'formal');
//emilyFormal('afternoon');
//
//
//var years = [1990, 1965, 1937, 2005, 1998];
//
//function arrayCalc(arr, fn) {
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//
//function calculateAge(el) {
//    return 2016 - el;
//}
//
//function isFullAge(limit, el) {
//    return el >= limit;
//}
//
//
//var ages = arrayCalc(years, calculateAge);
//var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
//console.log(ages);
//console.log(fullJapan);















