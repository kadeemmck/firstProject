// objects are a collection of porperties used to store 
//  data and methods. 




// step 1 define the class 


class Student{
    // set up constructor


constructor(_name, _projectGrade, _testGrade){
    console.log("student is being created")
  
// define objects properties using the attributes from the instructor

   this.name = _name,
this.projectGrade = _projectGrade,
this.testGrade = _testGrade
      

}
// define methods

  getAverage(){
      return(this.projectGrade + this.testGrade)/ 2
  }

  printDetails(){
      console.log(`my name is ${this.name} and I'm a web development student. My project grade is ${this.projectGrade} and my test grade is ${this.testGrade}`)
  }
}  

// create new instance of the object

let student1 = new Student("kadeem", 85, 90)
let student2 = new Student("malachi", 70, 85)
let student3 = new Student("vincent", 50, 100)


// add properties
student1.age = 25

// add methods

student1.talk = function(){
    return (`I am ${this.age}, and i want to be a developer!`)
}

// delete


delete student1.age






// class Person {
//     constructor(_name){
//         this.name = _name;
//     }
// }

 

// let names = ["devan", "val","deon", "izaak","maurice", "kamaria"]
// let people = [];

// let Person1 = new Person(names[1]),
// let Person2 = new Person(names[4]),








// for (i in name){
//     people.push(new Person(name));
// }

// for(i in people){
//     console.log(people[i])
// }

// for( i in people)


// sayHello(){
//     console.log(`hello! my name is ${this.name}`)
// }




// class Animal {
//     constructor(_numberoflegs, _name){
//         this.name = _name,
//         this._numberoflegs = _numberoflegs
//     }
// }


// let animalNames = ["dogs","octopus", "kangaroo", "dolphin", "iguana", "starfish", "centipede"]

// let amountOfLegs = [4,8,2,0,4,5,100];

// let animals = [];

// let dog = new Animal(animalNames[0], amountOfLegs[0])
// let kangaroo = new Animal(animalNames[2], amountOfLegs[2])

// for(i in animalNames){
//        animal.push(new Animal(animalNames[i], amountOfLegs[i]))

// }



// class Person{
//     constructor(_favoriteColors){
//         this.favoriteColors = _favoriteColors
   
//     }

// sayFavoriteColors(){
//        for(let i in this.favoriteColors){
//         console.log(this.favoriteColors[i]) 

// }
   
//        }
   
//     }
//    class Color {
//        constructor(_name){
//            this.name = _name
//        }
//    }


// let colors = [new Color("Red"), new Color("Blue"), new Color("Green"), new Color("Orange")]

// let fred = new Person(colors)



const DiceRoll = {

    D6(){
        return Math.floor(Math.random, this.sides)*6 + 1
 

    }
}


console.log("testing the page")
document.write(DiceRoll.d6())