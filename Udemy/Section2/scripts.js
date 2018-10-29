///*******************
//Variables and data types
//*/
//
//
//var firstName = 'John';
//console.log(firstName);
//
//var lastName = 'Smith';
//var age = 29;
//
//var fullAge = true;
//console.log(fullAge);
//
//var job;
//console.log(job);
//
//job = 'Teacher';
//console.log(job);
//
////Variable naming rules
//var _4years = 5;
//var hahaHH = 'And So';
//var if = 23;
//
//
///*******************
//Variable mutation and type coercion
//*/
//
//
//var firstName = 'John';
//var age = 29;
//// Type coercion
//console.log(firstName + ' ' + age);
//
//var job, isMarried;
//job = 'teacher';
//isMarried = 'false';
//
//console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
//// Variable mutation
//
//age = 'twenty eight';
//job = 'driver';
//
//alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
//var lastName = prompt(' What is his last Name? ');
//console.log(firstName + ' ' + lastName);
//
//
//
///*******************
//Basic operators
//*/
//
//
//var year, yearJohn, yearMark;
//now = 2018;
//ageJohn = 28;
//ageMark = 33;
//
////Math operators
//yearJohn = now - ageJohn;
//yearMark = now - ageMark;
//
//console.log(yearJohn);
//
//console.log(now + 2);
//console.log(now * 2);
//console.log(now / 10);
//
////Logical operators
//var johnOlder = ageJohn < ageMark;
//console.log(johnOlder)
//
////typeof operator
//console.log(typeof johnOlder);
//console.log(typeof ageJohn);
//console.log(typeof 'Mark is older than John');
//var x;
//console.log(typeof x);
//
//
///*******************
//Operator precedence
//*/
//
//
//var now = 2018;
//var yearJohn = 1989;
//var fullAge = 18;
//
////Multiple operators
//var isFullAge = now - yearJohn >= fullAge;  //true
//console.log(isFullAge);
//
////Grouping
//var ageJohn = now - yearJohn;
//var ageMark = 35;
//var average = (ageJohn + ageMark) / 2;
//console.log(average);
//
////Multiple assignments
//var x, y;
//x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
//console.log(x , y);
//
////More operators
//x *= 2;
//console.log(x);
//x += 10;
//console.log(x);
//
//
//
///*******************
//CODING CHALLENGE 1
//*/
///*
//Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
//
//1. Store Mark's and John's mass and height in variables
//2. Calculate both their BMIs
//3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
//4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true")
//*/
//
//// My solution
//var higher, BMI, John, Mark;
//
//massJohn = 80; // kg
//massMark = 82; // kg
//heightJohn = 1.86; // meters
//heightMark = 1.82; // meters
//
//BMIJohn = massJohn / (heightJohn * heightJohn);
//console.log('John\'s BMI is ' + BMIJohn);
//
//BMIMark = massMark / (heightMark * heightMark);
//console.log('Marks\'s BMI is ' + BMIMark);  
//
//higher = BMIJohn < BMIMark;
//console.log('Is Mark\'s BMI higher than John\'s? ' + higher);
//
//
////Jona's solution
//var massMark = 78; // kg
//var heightMark = 1.69; // meters
//
//var massJohn = 92;
//var heightJohn = 1.95;
//
//var BMIMark = massMark / (heightMark * heightMark);
//var BMIJohn = massJohn / (heightJohn * heightJohn);
//console.log(BMIMark, BMIJohn);
//
//var markHigherBMI = BMIMark > BMIJohn;
//console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
//
//
///*******************
//If / else statements
//*/
//
//
//var firstName = 'John';
//var civilStatus = 'single';
//
//if (civilStatus === 'married') {
//    console.log(firstName + ' is married!')
//} else {
//    console.log(firstName + ' will marry soon')
//}
//
//
//var isMarried = true;
//if (civilStatus) {
//    console.log(firstName + ' is married!')
//} else {
//    console.log(firstName + ' will marry soon')
//}
//
//
//var higher, BMI, John, Mark;
//
//massJohn = 80; // kg
//massMark = 82; // meters
//heightJohn = 1.86; //kg
//heightMark = 1.82; // meters
//
//BMIJohn = massJohn / (heightJohn * heightJohn);
//console.log('John\'s BMI is ' + BMIJohn);
//
//BMIMark = massMark / (heightMark * heightMark);
//console.log('Marks\'s BMI is ' + BMIMark);  
//
//if (BMIMark > BMIJohn){
//    console.log('Mark\'s BMI is higher than John\'s.');
//} else {
//    console.log('John\'s BMI is higher than Mark\'s.');
//}
//
//
///*******************
//Boolean logic
//*/
//
//
//var firstName = 'John';
//var age = 20;
//
//if (age < 13) {
//    console.log(firstName + ' is a boy.');
//} else if (age >= 13 && age < 20 ) { // Between 13 and 20 === age >= 13 AND age < 20
//    console.log(firstName + ' is a teenager.');
//} else if (age >= 20 && age < 30){
//    console.log(firstName + ' is a young man.')      
//} else {
//    console.log(firstName + ' is a men.');
//}
//
//
///*******************
//The ternary Operator and Switch Statements
//*/
//
//
//var firstName = 'John';
//var age = 22;
//
//// Ternary operator
//age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
//
//var drink = age >= 18 ? 'beer' : 'juice';
//console.log(drink);
//
//
//if (age >= 18) {
//    var drink = 'beer';
//} else {
//    var drink = 'juice';
//}
//
//
//// Switch statement
//
//var job = 'instructor';
//switch (job) {
//    case 'teacher':
//    case 'instructor':
//        console.log(firstName + ' teaches kids how to code.');
//        break;
//    case 'driver':
//        console.log(firstName + ' drives an uber in Rome.');
//        break;
//    case 'designer':
//        console.log(firstName + ' designs beautiful websites.');
//        break;
//    default:
//        console.log(firstName + ' does something else.');
//}
//
//age = 34;
//switch (true){
//    case age < 13:
//    console.log(firstName + ' is a boy.'); 
//    break;
//    case age >= 13 && age < 20:
//    console.log(firstName + ' is a teenager.');
//    break;
//    case age >= 20 && age < 30:
//    console.log(firstName + ' is a young man.');
//    break;
//    default:
//    console.log(firstName + ' is a men.');     
//}
//
//
///*******************
//Truthy and Falsy values and equality operators
//*/
//
//// falsy values: undefined, null, 0, '', NaN - value considered fals when evaluated in if/else statement conditions
//// truthy values: NOT falsy values
//
//var height;
//
//height = 23;
//
//if (height || height === 0) {
//    console.log('Variable is defined');
//} else {
//    console.log('Variable has NOT been defined');
//}
//
////Equality operators
//
//if (height === '23') {
//    console.log('The == operator does type coercion!');
//}
//
//
//
///*****************************
//* CODING CHALLENGE 2
//*/
//
///*
//John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
//
//1. Calculate the average score for each team
//2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
//3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
//
//4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
//5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
//
//*/
//
//// My solution
//var gameJohn = (103 + 87 + 103) / 3;
//var gameMike = (103 + 89 + 106) / 3;
//var gameMary = (103 + 103 + 106) / 3;
//
//console.log('The average number of the latest 3 games for John\'s team is ' + gameJohn);
//console.log('The average number of the latest 3 games for Mikes\'s team is ' + gameMike);
//console.log('The average number of the latest 3 games for Mary\'s team is ' + gameMary);
//
//if (gameJohn > gameMike &&  gameJohn > gameMary) {
//    console.log('The average winner is John\'s team with: ' + gameJohn + ' points');
//} else if (gameMike > gameJohn &&  gameMike >  gameMary) {
//    console.log('The average winner is Mike\'s team with: ' + gameMike +' points');
//} else if (gameMary > gameMike && gameMary > gameJohn) {
//    console.log('The average winner is Mary\'s team with: ' + gameMary + ' points');
//} else {
//    console.log('The team\'s are equal with: '  + gameMike || + gameJohn || + gameMary + ' points' );
//}
//
//    
////Jona's solution
//var scoreJohn = (189 + 120 + 103) / 3;
//var scoreMike = (129 + 94 + 123) / 3;
//var scoreMary = (97 + 134 + 105) / 3;
//console.log(scoreJohn, scoreMike, scoreMary);
//
//if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//    console.log('John\'s team wins with ' + scoreJohn + ' points');
//} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//    console.log('Mike\'s team wins with ' + scoreMike + ' points');
//} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//    console.log('Mary\'s team wins with ' + scoreMary + ' points');
//} else {
//    console.log('There is a draw');
//}
//
//
//if (scoreJohn > scoreMike) {
//    console.log('John\'s team wins with ' + scoreJohn + ' points');
//} else if (scoreMike > scoreJohn) {
//    console.log('Mike\'s team wins with ' + scoreMike + ' points');
//} else {
//    console.log('There is a draw');
//}
//
//
///*****************************
//* Functions
//*/
//
//
//function calculateAge(birthYear) {
//    return 2018 - birthYear;
//}
//
//var ageJohn = calculateAge(1990);
//var ageMike = calculateAge(1948);
//var ageJane = calculateAge(1969);
//console.log(ageJohn + '\n' + ageMike + '\n' +  ageJane);
//
//
//function yearsUntilRetirement(year, firstName) {
//    var age = calculateAge(year);
//    var retirement = 65 - age;
//    
//    if (retirement > 0 ) {
//         console.log(firstName + ' retires in ' + retirement + ' years.')
//    } else {
//        console.log(firstName + ' is already retired.')
//    }
//   
//}
//
//yearsUntilRetirement(1990, 'John');
//yearsUntilRetirement(1948, 'Mike');
//yearsUntilRetirement(1969, 'Jane');
//
//
///*****************************
//* Functions Statements and Expressions
//*/
//
//// Function declaration
////function whatDoYouDo(job, firstName) {}
//    
//// Function expression
//
//var whatDoYouDo = function(job, firstName) {
//    switch(job) {
//        case 'teacher':
//            return firstName + ' teaches kids how to code.';
//        case 'driver':
//            return firstName + ' drives a cab in Rome.';
//        case 'designer':
//            return firstName + ' designs websites.';
//        default:
//            return firstName + ' does something else.'
//    }
//}
//
//console.log(whatDoYouDo('teacher', 'John'));
//console.log(whatDoYouDo('designer', 'Jane'));
//console.log(whatDoYouDo('drive', 'Jake'));
//console.log(whatDoYouDo('retired', 'Joel'));
//
//
//
///*****************************
//* Arrays
//*/
//
//// Initialize new array
//var names = ['John', 'Mark', 'Jane'];
//var years = new Array(1990, 1969, 1948);
//
//console.log(names[2]);
//console.log(names.length);
//
//// Mutate array data
//names[1] = 'Ben';
//names[names.length] = 'Mary';
//console.log(names);
//
//// Different data types
//var john = ['John', 'Smith', 1990, 'designer', false];
//
//john.push('blue');
//john.unshift('Mr');
//console.log(john);
//
//john.pop();
//john.pop();
//john.shift();
//console.log(john);
//
//console.log(john.indexOf(23));
//
//var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
//console.log(isDesigner);
//
//
///*****************************
//* CODING CHALLENGE 3
//*/
//
///*
//John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
//
//To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
//
//In the end, John would like to have 2 arrays:
//1) Containing all three tips (one for each bill)
//2) Containing all three final paid amounts (bill + tip).
//
//(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
//
//GOOD LUCK 😀
//*/
//
////My solution
//var bills = [48, 124, 268];
//
//function calculator(allTips) { 
//    if (allTips < 50) {
//        return allTips * 20/100; 
//    } else if (allTips >= 50 && allTips <= 200) {
//        return allTips * 15/100;
//    } else {
//        return allTips * 10/100;
//    }
//
//}
//
//console.log(new Array (calculator(bills[0]), calculator(bills[1]), calculator(bills[2])));
//console.log(new Array ((calculator(bills[0]) + bills[0]), (calculator(bills[1]) + bills[1]), (calculator(bills[2]) + bills[2])));
//
////Jona's solution
//function tipCalculator(bill) {
//    var percentage;
//    if (bill < 50) {
//        percentage = .2;
//    } else if (bill >= 50 && bill < 200) {
//        percentage = .15;
//    } else {
//        percentage = .1;
//    }
//    return percentage * bill;
//}
//
//var bills = [124, 48, 268];
//var tips = [tipCalculator(bills[0]),
//            tipCalculator(bills[1]),
//            tipCalculator(bills[2])];
//
//var finalValues = [bills[0] + tips[0],
//                   bills[1] + tips[1],
//                   bills[2] + tips[2]];
//
//console.log(tips, finalValues);
//
//
///*****************************
//* Objects and properties
//*/
//
//
////Object literal
//var john = {
//    firstName: 'John',
//    lastName: 'Smith',
//    birthYear: 1990,
//    family: ['Jane', 'Mark', 'Bob', 'Emily'],
//    job: 'teacher',
//    isMarried: false
//};
//
//console.log(john.firstName);
//console.log(john['lastName']);
//var x = 'birthYear';
//console.log(john[x]);
//
//john.job = 'designer';
//john['isMarried'] = true;
//console.log(john);
//
////new Object syntax
//var jane = new Object();
//jane.name = 'Jane';
//jane.birthYear = 1969;
//jane['lastName'] = 'Smith';
//console.log(jane);
//
//
///*****************************
//* Objects and methods
//*/
//
//var john = {
//    firstName: 'John',
//    lastName: 'Smith',
//    birthYear: 1992,
//    family: ['Jane', 'Mark', 'Bob', 'Emily'],
//    job: 'teacher',
//    isMarried: false,
//    calcAge: function(){
//        this.age =  2018 - this.birthYear;
//    }
//};
//
//john.calcAge();
//console.log(john);

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
//

//var john = {
//  firstName: 'John',
//  lastName: 'Smith',
//  mass: 80, // kg
//  height: 1.86,  // meters
//  bmi: function(){
//      this.bmiValue = this.mass / (this.height * this.height);
//      return this.bmiValue;
//  }
//};
////john.bmi();
//console.log(john);
//
//var mark = {
//    firstName: 'Mark',
//    lastName: 'Heisenberg',
//    mass: 82, // kg
//    height: 1.82,  // meters
//    bmi: function(){
//      this.bmiValue = this.mass / (this.height * this.height);
//      return this.bmiValue;
//  } 
//};
//
////mark.bmi();
//console.log(mark);
//
//if (mark.bmi() > john.bmi()){
//    console.log(mark.firstName+' '+ mark.lastName+' has '+ mark.bmiValue);
//} else if (mark.bmiValue  < john.bmiValue){
//    console.log(john.firstName +' '+john.lastName +' has '+ john.bmiValue);
//} else {
//    console.log(john.firstName +' '+ john.lastName +' and '+ mark.firstName +' '+ mark.lastName +' BMI\'s are equal with a value of '+ mark.bmiValue + '.');
//}

///*****************************
//* Loops and iteration
//*/
//
//for (var i = 1; i <= 20; i += 2){
//    console.log(i);
//} 
//
//// i = 0, 0 < 10 true, log i to console, i ++
//// i = 1, 1 < 10 true, log i to console, i ++
////...
//// i = 9, 9 < 10 true, log i to console, i ++
//// i = 10, 10 < 10 FALSE, exit the loop!
//
////For loop
//var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//for (var i = 0; i < john.length; i++){
//    console.log(john[i]);
//}
//
////While loop
//var i = 0;
//while(i < john.length) {
//    console.log(john[i]);
//    i++;
//}


//continue and break statements
//var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//for (var i = 0; i < john.length; i++){
//    if (typeof john[i] !== 'string') continue;
//    console.log(john[i]);
//}
//
//var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//for (var i = 0; i < john.length; i++){
//    if (typeof john[i] !== 'string') break;
//    console.log(john[i]);
//}

// Looping backwards
//My solution
//var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//for (var i = john.length; i >= 0; i--){ //starts from index 6
//    console.log(john[i]);   
//}
//
////Jona's solution
//var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//for (var i = john.length - 1; i >= 0; i--){ //starts from index 5
//    console.log(john[i]);   
//}

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/


var john = {
    bills: [124, 48, 268, 180, 42],
    tipCalculator: function (tip){
        let bills = tip;
        if (tip < 50) {
            return tip * 20/100; 
        } else if (tip >= 50 && tip <= 200) {
            return tip * 15/100;
        } else {
            return tip * 10/100;        
        }  
    }
            
}

console.log(new Array (john.tipCalculator(john.bills[0]), john.tipCalculator(john.bills[1]), john.tipCalculator(john.bills[2]), john.tipCalculator(john.bills[3]), john.tipCalculator(john.bills[4])));

console.log(new Array (john.tipCalculator(john.bills[0]) + john.bills[0], john.tipCalculator(john.bills[1]) + john.bills[1], john.tipCalculator(john.bills[2]) + john.bills[2], john.tipCalculator(john.bills[3]) + john.bills[3], john.tipCalculator(john.bills[4]) + john.bills[4]));

// Extra

var billsMark = [77, 375, 110, 45];

function tipCalcMark(tip){
        if (tip < 100) {
            return tip * 20/100; 
        } else if (tip >= 100 && tip <= 300) {
            return tip * 10/100;
        } else {
            return tip * 25/100;        
        }  
}

var sumArrayMark = billsMark[0] + billsMark[1] + billsMark[2] + billsMark[3];
var sumArrayJohn = john.bills[0] + john.bills[1] + john.bills[2] + john.bills[3] + john.bills[4];
var sumTipsMark = (tipCalcMark(billsMark[0]) + tipCalcMark(billsMark[1]) + tipCalcMark(billsMark[2]) + tipCalcMark(billsMark[3])) / 4;
var sumTipsJohn = (john.tipCalculator(john.bills[0]) + john.tipCalculator(john.bills[1]) + john.tipCalculator(john.bills[2]) + john.tipCalculator(john.bills[3]) + john.tipCalculator(john.bills[4])) / 5;

console.log('The Mark\'s tips are ' + new Array (tipCalcMark(billsMark[0]), tipCalcMark(billsMark[1]), tipCalcMark(billsMark[2]), tipCalcMark(billsMark[3])));
console.log('The average sum of the Mark\'s bills is ' + sumArrayMark / 4);
console.log('The average sum of the John\'s bills is ' + sumArrayJohn / 5);
console.log('The average sum of tips of Mark\'s family is ' + sumTipsMark);
console.log('The average sum of tips of John\'s family is ' + sumTipsJohn);

if (sumTipsMark > sumTipsJohn){
    console.log('The highest tips on average paid was by Mark\s family with ' + sumTipsMark);
} else {
    console.log('The highest tips on average paid was by John\s family with ' + sumTipsJohn);
}













