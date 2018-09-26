//https://eloquentjavascript.net/code#2
//
//
////2.1 Looping a triangle - completed
//
//for (let n = "#"; n.length < 8; n+= "#")
//    console.log(n);

////2.2 FizzBuzz - completed
//for (let n = 1; n <= 100; n = n + 1){
//    if ((n % 3 == 0) && (n % 5 == 0) ){
//       console.log("FizzBuzz");
//    }else if (n % 3 == 0) {
//        console.log("Fizz");
//    }else if (n % 5 == 0 ){
//        console.log("Buzz");
//    }else {
//        console.log(n);
//    }  
//}


////2.3 Chess Board - completed
//let size = 10;
//let grid = "";
//
//for(i = 0; i < size; i++){
//    for(j = 0; j < size; j++){
//        if((i+j) %2 == 0){
//            grid += " ";
//        }else {
//            grid += "#";
//        }
//    }
//    grid += "\n";
//}
//console.log(grid);


////3.1 Minimum - completed
//
//function min(a, b){
// if(a < b) return a;
//    else return b;  
//}
//    
//console.log(min(0, 10));
//// → 0
//console.log(min(0, -10));
//// → -10

////3.2 Recursion - completed
//function isEven(n) {
//    if (n == 0)
//      return true;
//   else if (n == 1)
//      return false;
//   else if (n < 0)
//      return isEven(-n);
//   else return isEven(n - 2);
//}
//console.log(isEven(50));
//// → true
//console.log(isEven(75));
//// → false
//console.log(isEven(-1));
//// → false


////3.3 Bean counting
function countBs(string) {
    let count;
        for (count = 0; count <= string.length; count++){
            if (string == "B"){
              return count += 1;
            }

        }
    
}
console.log(countBs("BBC"));
// → 2
//console.log(countChar("kakkerlak", "k"));
// → 4


//4.1The sum of a range.

////In progress
//function range () {
//    let array = [];
//    
//    for (i = 1; i <= 10; i ++ ){
//            array.push(i);       
//        }  
//    
//    return array.reduce(); 
//}
//console.log(range(1, 10));
//// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
////In progress
//
//console.log(range(5, 2, -1));
//// → [5, 4, 3, 2]
//
//console.log(sum(range(1, 10)));
//// → 55