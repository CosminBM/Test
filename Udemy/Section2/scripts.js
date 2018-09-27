/*******************
Variables and data types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 29;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Variable naming rules
var _4years = 5;
var hahaHH = 'And So';
var if = 23;
*/

/*******************
Variable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 29;
// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = 'false';

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt(' What is his last Name? ');
console.log(firstName + ' ' + lastName);

*/

/*******************
Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder)

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*******************
Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge;  //true
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x , y);

//More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
*/


/*******************
CODING CHALLENGE 1
*/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true")
*/

// My solution
/*
var higher, BMI, John, Mark;

massJohn = 80; // kg
massMark = 82; // meters
heightJohn = 1.86; //kg
heightMark = 1.82; // meters

BMIJohn = massJohn / (heightJohn * heightJohn);
console.log('John\'s BMI is ' + BMIJohn);

BMIMark = massMark / (heightMark * heightMark);
console.log('Marks\'s BMI is ' + BMIMark);  

higher = BMIJohn < BMIMark;
console.log('Is Mark\'s BMI higher than John\'s? ' + higher);
*/

//Jona's solution
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

/*******************
If / else statements
*/




















































