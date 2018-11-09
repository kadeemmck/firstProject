// logic statements 

const isTrue = true;
if(isTrue === true){
    return "True";
}

if(isTrue){
    return "True"
} else{
    return "False";
}
  if(isTrue === false){
      return "false"
  }
  if (!isTrue){
      return "false"
  }



  let number = 100;
  if(number < 50){
      console.log("less than 50");
  } else if (number > 50 && number < 75){
      console.log("greater than 50 and less than 75")
  } else {
      console.log("Greater than 75")
  }


//   loops
let isFlase = false;
let counter = 0;
while(isFlase === false){
    console.log("false")
    counter++;

}

for(i=0; i<=100; i++){
    console.log(i)
}



// Array Methods
let numbers = (1,2,3,4,5,6,7,8,9,10);
// indexs      0,1,2,3,4,5,6,7,8,9


let seven = numbers[6];
let eight = numbers[7]
let words 

numbers.sort() ;
numbers.split(" ");
numbers.splice( );
numbers.slice();
numbers.push();
numbers.pop();
numbers.unshift();
numbers.shift();
numbers.join();
numbers.reduce();
numbers.map();
numbers.filter();




function sayhello(name){
    // return returns the value from a function and allows it to be stored
    return "hello "+ name;
}

console.log(sayhello("kadeem"));

let = ["dog", "cat", "bird", "snake"]

for(i in animals){
    console.log(animals[i])
}


let counter = 0;
while(trueOrFalse){
    console.log("hi");
    if(counter===20){
        trueOrFalse === false;
    }
    counter++ 
}


let myName = "Devan"

while (myName === "Devan")



function countToANumber(targetNumber){
    for (i=1; i<=targetNumber; i++){
        console.log(i)
    }
}

countToANumber()


class Person {
    constructor(_name,_age,_favoriteColor){
        this.name = _name,
        this.age = _age,
        this.favoriteColor = _favoriteColor
    }
}

let me = new Person("charles", 35, yellowish blue)




function generateNumbers(){
    for(i=0;i<=100;i++){
        return i
    }
}

let aNumber = generateNumbers();


class Person {
    constructor(_name,_age,){
        this.name = _name,
        this.age = _age
    }
}
sayhello(){
   console.log (`hello, my name is ${this.name}`)
}
