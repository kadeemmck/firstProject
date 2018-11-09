// // let profit = 500
// // let revenue = 20


// // while(profit <=(revenue * .20)){
// //     revenue += 500
// //     profit += profit * .15
// // }

// // console.log("profit is"+ profit)
// // console.log("revenue is "+ revenue)


// // let goal = 0
// // let miss = 0
// // let ball = 0


// // while(ball < 15){
 
// //     if(ball % 2 == 0){
// //       console.log ("Goal")
// //       goal++
// //     }else{
// //         console.log("Miss")
// //         miss++
// //     }
// // ball++

// // if(ball == 15){
// //     if(goal > miss){

// //     }
// // }


// // }





// // let population = 0
// // let fish1 = 0
// // let fish2 = 0 
// // let fish3 = 0 
// // let fish4 = 0 
// // let fish5 = 0 

// // while(population < 100){
   
// // }

// // *
// // **
// // ***
// // ****
// // *****

// // for(let i = 0; i < arr.length; i++){
// //     for(let j = 0; j < arr.length; j++)[
// //         console.log("*")
// //     ]
// // }



// // function tellfortune(jobtitle, GeoLocation, PartnersName, Numberofchildren ) {
// //     let future = "I Will be A" + jobtitle + GeoLocation + PartnersName + Numberofchildren
  
// //     console.log(future) ;
// // }

// // tellfortune("BOSS", 'athlete', 'Techy');
// // tellfortune('chicken', 'dog' ,'RABBIT', 'ATl'  );
// // tellfortune('robot slayer', 'ZOMBIE KILLER', '3');


// // i am a bamf programmer 


// // function Alphabetize("I am a BAMF programmer")


// // function alphabetize (word) {
// //     let duck = word.split("").sort().join("").trim();
// //      console.log(duck)

// //   }
  
// //   alphabetize("I am a BAMF Programmer")

// // var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
// // var counter = 0;
// // for(var i = 0; i <=4; i++){
// //     console.log(languages[counter]);
// //     counter = counter + 1;
// // }


// ## 1

//  Write a for loop that will console.log the numbers 0 to 999.

//  function countTo999 (){

// for (var i=1; i < 1000; i += 1){
//     console.log(i);

// }


//  ## 2

// Write a *for* loop that iterates in *reverse*. Console.log a countdown from 999 to 0.

// for (var i=1000; i > 0; i -= 1){
//         console.log(i);
// }


// ## 3

// ```
// var directors = ["Michelangelo Antonioni", "David Lynch", "Yasujiro Ozu", "Ingmar Bergman", "Federico Fellini", "Martin Scorcese", "Michael Bay"]
// ```
// Write a for loop that iterates over the directors array and console.logs each director.

// let directors = ["Michelangelo Antonioni", "David Lynch", "Yasujiro Ozu", "Ingmar Bergman", "Federico Fellini", "Martin Scorcese", "Michael Bay"]

// for(var i = 0; i<= 6; i++ ) {
//     console.log(directors[i]);
// }


// ## 4

// // Write another for loop that iterates over the directors array but also adds the string "Hi, " to the beginning of the name.

// // ```
// // => "Hi, Michelangelo Antonioni"
// // => "Hi, David Lynch"

// let directors = ["Michelangelo Antonioni", "David Lynch", "Yasujiro Ozu", "Ingmar Bergman", "Federico Fellini", "Martin Scorcese", "Michael Bay"]

// for(var i = 0; i<= 6; i++ ) {
//     console.log("Hi" + " " + directors[i]);
// }


// // ## 5



// // Write a function `isCool` that accepts one parameter, `name` as an argument. The function should return a string that outputs the name and a message saying that the person is super cool.

// // ```
// // console.log(isCool("Thom"));

// // => "Thom is super cool";

// function isCool(name) {
//     console.log(name + " is super cool")
// }
// isCool("Joe")

// ## 6

// Write a function `twoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.

// // ```javascript
// // // example usage
// // twoLengths("Hank", "Hippopopalous");
// // // => [4, 13]

// let wordsArray = ["Vincent","Trayon","Kadeem"]
// function twoLength(words){
// for(i=0;i<words.length;i++){
//   console.log(words[i].length)
// }

// }
// twoLength(wordsArray);


// ## 7

// Write a Javascript function called `transmogrifier`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
// power of 2` is 225.

// Use your function to find the following answers.

// console.log(transmogrifier(5, 3, 2));

// => 225

// function transmogrifier(argOne,argTwo) {
//    let sum = argOne *= argTwo;
//     console.log(Math.pow(sum,2));

// }

// transmogrifier(2,4)



// // ## 8

// // Fizz Buzz! Write a loop that will iterate through numbers from 1 to 100 and log each number in the console.

// // - In the loop, every time a number is divisible by 3, the word "Fizz" should appear instead of the number.

// // - If the number is divisible by 5, the word "Buzz" should appear instead of the number.

// // - If the number is divisible by both 3 and 5, then the word "Fizzbuzz" should appear.

// // Hint: Use modulus `%`

// for(var i = 1; i<= 100; i++ ) {
//     if( i% 3 ===0) {
//     console.log("fizz")

//     }
//    else if (i %5 ===0){
//    console.log("Buzz")

//    }
//    else if(i %15 === 0) {
//    console.log("fizzbuzz")}

//    else{
//        console.log(i)
//    }
// }

// function maxofThreeNumbers(num1, num2, num3){
//     if(num1 >= num2 && num1 >= num3){
//         return num1
//     }else if (num2 >= num1 && num2 >= num3){
//         return num2
//     }else {
//         return num3
//     }
// }





// function maxOfTwoNumbers(Numb1,Numb2) {
//     if(Numb1 < Numb2)
//     { console.log(Numb2)

//     }

//      else if (Numb1>Numb2)
//       console.log(Numb1)
// }
// maxOfTwoNumbers(14,55)

// function maxOfTwoNumbers(num1, num2)
//   if(num1 > num2){
//       return num1
//   } else {
//       return num2
//   }
// let maxnumbers = maxOfTwoNumbers (54,77) + 10

// let array = [30, 38,45,47]
// let reducer = (accumulator, currentValue) => accumulator * currentValue

// function sumArray(){z
//     for(i = 0; i < array.length; i ++){       
//     }
//   console.log(array.reduce(reducer)) 
// }

// sumArray(array)


// let str = 0;
// function vowelreplace(string){
//     string.split("")

// for (i = 0; i < str.length; i++)
// if (vowelreplace('A','E','I','O','U') + i == true)
// switch(



// // checks to see if a statement is true
 if(trueOrfalse) {
    return "true";
}


// // checks to see if a value is false

if(!trueOrfalse){
    return "false"
}

// // Default value if the first condition isnt met

  { else } 
         return "true"
} 


  let favoriteColor = "red"; 
  if(favoriteColor === "blue"){
       return "blue";
  } else if(favoriteColor === "green"){
         return "green";
  } else if (favoriteColor === "red"){
      return "red"
  }


// loops
let counter = 0 ;
while(trueOrfalse){
    console.log("true");
    counter++;
    if (counter === 10) {
        trueOrfalse = false;
    }

}
 for(i =0; i<=100; i++){
     console.log(i)
 }


for(i = 1000; i>=0; i--){
    console.log(i);
}




// D.R.Y- Don't repeat yourself *function


function redOrBlue(value){
    if(value===true){
        return "blue"
    }else {
         return "red"
    }
}
if(red=== "red"){
    console.log("true")
}

// Array Methods

numbers.sort() ;
numbers.split(" ");
numbers.splice(4,0,8 );
numbers.slice();
numbers.push();
numbers.pop();
numbers.unshift();
numbers.shift();
numbers.join();
numbers.reduce();
numbers.map();
numbers.filter();

