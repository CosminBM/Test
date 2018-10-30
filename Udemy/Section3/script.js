///////////////////////////////////////
// Lecture: Hoisting

//Function hoisting
//function declaration
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}



//retirement(1956);

//function expression
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

//Variables hoisting

console.log(age);
var age = 23;
console.log(age);

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
    
}




///////////////////////////////////////
// Lecture: The this keyword









