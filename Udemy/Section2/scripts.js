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

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!')
} else {
    console.log(firstName + ' will marry soon')
}


var isMarried = true;
if (civilStatus) {
    console.log(firstName + ' is married!')
} else {
    console.log(firstName + ' will marry soon')
}


var higher, BMI, John, Mark;

massJohn = 80; // kg
massMark = 82; // meters
heightJohn = 1.86; //kg
heightMark = 1.82; // meters

BMIJohn = massJohn / (heightJohn * heightJohn);
console.log('John\'s BMI is ' + BMIJohn);

BMIMark = massMark / (heightMark * heightMark);
console.log('Marks\'s BMI is ' + BMIMark);  

if (BMIMark > BMIJohn){
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
*/

/*******************
Boolean logic
*/

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20 ) { // Between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.')      
} else {
    console.log(firstName + ' is a men.');
}
*/

/*******************
The ternary Operator and Switch Statements
*/

/*
var firstName = 'John';
var age = 22;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}


// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Rome.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 34;
switch (true){
    case age < 13:
    console.log(firstName + ' is a boy.'); 
    break;
    case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
    case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
    default:
    console.log(firstName + ' is a men.');     
}
*/

/*******************
Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN - value considered fals when evaluated in if/else statement conditions
// truthy values: NOT falsy values
/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

//Equality operators

if (height === '23') {
    console.log('The == operator does type coercion!');
}
*/


/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

*/

// My solution

var gameJohn = (103 + 87 + 103) / 3;
var gameMike = (103 + 89 + 106) / 3
var gameMary = (103 + 103 + 106) / 3;

console.log('The average number of the latest 3 games for John\'s team is ' + gameJohn);
console.log('The average number of the latest 3 games for Mikes\'s team is ' + gameMike);
console.log('The average number of the latest 3 games for Mary\'s team is ' + gameMary);

if (gameJohn > gameMike &&  gameJohn > gameMary) {
    console.log('The average winner is John\'s team with: ' + gameJohn + ' points');
} else if (gameMike > gameJohn &&  gameMike >  gameMary) {
    console.log('The average winner is Mike\'s team with: ' + gameMike +' points');
} else if (gameMary > gameMike && gameMary > gameJohn) {
    console.log('The average winner is Mary\'s team with: ' + gameMary + ' points');
} else {
    console.log('The team\'s are equal with: '  + gameMike || + gameJohn || + gameMary + ' points' );
}

    

























