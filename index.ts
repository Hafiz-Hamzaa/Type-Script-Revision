// Print Hello World
console.log("Hello, World!");

// Variables
let favouriteFruit = "mango"
favouriteFruit = "apple"
console.log(favouriteFruit);

// Strong Typing / Strongly Typed Syntax
let userName : string = "Ali"
console.log(userName);
// userName = 12 ===>>> Error

// Type Inference
let x = "Laiba"
console.log(x);
let y = true 
console.log(y);

// Basic Data Types
let myName : string = "Hamza"
let age : number = 16
let isMarried : boolean = false
let anyData : any = 23
console.log(typeof anyData);


// Comments
// This is a single line comment
/* This is a multi line comment.It 
means add one or more then one line
*/

// Difference between let , const
let animalName = "Lion"
animalName = "Giraffe"
console.log(animalName);
console.log(typeof animalName);

const animal_name = "Monkey"
// animal_name = "Zebra" ====>>> Error

// Additional Primitive Data Types
// Undefined
let undefinedValue;
console.log(undefinedValue);
console.log(typeof undefinedValue);

// Null 
let noValue = null
console.log(noValue);
console.log(typeof noValue);

// Biginit
let bigInt : bigint = 123456789n
let bigInt1 : bigint = 987654321n
let sum : bigint = bigInt + bigInt1
console.log(sum);
console.log(typeof sum);

// Syntax Error , Type Error , Assignability Error
// lett message = "Syntax Error"
// console.loger();
// let personName : string = "Laiba"
// personName = 19

// String Concatenation
let firstName = "Ali"
let lastName = "Jawwad"
let fullName = firstName + " " + lastName
console.log(fullName);
let full_name = `${firstName} ${lastName}`
console.log(full_name)

// Arithmetic Operator
let num1 = 10
let num2 = 5
let result = num1 + num2
let result1 = num1 - num2
let result2 = num1 * num2
let result3 = num1 / num2
let result4 = num1 ** num2
let result5 = num1 % num2
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

// Unary Operator
let a : number = 5
let b : number = 2
let c : number;
//   6     6      1    1    6     1   1
c = ++a + a++ + --b + b-- + a + b++ + b
console.log(c); // 22

let e = 0
e++
console.log(e); // 1

let f = 2
f--
console.log(f); // 1

let g = 23
console.log(g++); // 23
console.log(g); // 24

let h = 20
console.log(h--); // 20
console.log(h); // 19

// Combining Operator
let output = 3 + 4 * 5
console.log(output); // 23

let output1 = 3 + 4 * 5
output1++
console.log(output1); // 24

// // BMI
let weight = 76
let height = 23
let bmi = weight / (height * height)
console.log(bmi);

// // Assignment Operator
let assignment = 12
console.log(assignment += 12) // 24
console.log(assignment = assignment + 1) // 25
console.log(assignment -= 5) // 20
console.log(assignment *= 5) // 100
console.log(assignment /= 20) // 5
console.log(assignment **= 2) // 25
console.log(assignment %= 5) // 0

// // // Comparision Operator
let comparision = 30
let comparision1 = 35
console.log(comparision > comparision1);  // false
console.log(comparision < comparision1);  // true
console.log(comparision <= comparision1);  // true
console.log(comparision >= comparision1);  // false
console.log(comparision == comparision1); // false
console.log(comparision != comparision1); // true

let comparision2 = "12"
let comparision3 = "13"
console.log(comparision2 === comparision3); // they take both
let comparision4 = "12"
let comparision5 = "13"
console.log(comparision4 !== comparision5); // they take only 

// Logical Opeartor
let logic = 35
let logic1 = 40
let logic2 = 50
let logic3 = 60
console.log(logic < logic1 && logic2 > logic3); // false
console.log(logic > logic1 || logic2 < logic3); // true
console.log(!(logic < logic1)); // false

// Logic Statements
let bestFriend = "Ayesha"
if(bestFriend === "Laiba") {
    console.log(`My best friend name is ${bestFriend}`)
}else if(bestFriend === "Ali") {
    console.log(`My best friend is ${bestFriend}`)
}else {
    console.log(`I have no best friend`)
}

// Ternary Operator
let myFriend = "Asma"
let Output = myFriend === "Amna" ? "This is my friend" : "This is not my friend"
console.log(Output);

// Switch Statements
let  day = "Monday"
switch(day) {
    case "Sunday":
        console.log("Go for Picnic");
        break;
    case "Monday":
        console.log("Read a Book");
        break;
        default:
        console.log("Dont do anything");
}

// Function Definition / Regular ==>>(Parameters , Arguments)
function myFunc(name : string) : string {
    return name
}
let name = myFunc("Hamza")
console.log(name);

// Default Parameters or Arrow Function / Lambda Function
const Name = (name : string = "Aslam" ) => {
    return name
}
console.log(Name("Abdullah"));

// Rest Parameters
function RestPara(age : number , ...unknown:number[]) {
    console.log(age);
    console.log(unknown);
}
RestPara(1 , 2.4 , 23 , 3456 , 78)

function SpreadPara(age : number , ...unknown:number[]) {
    console.log(age);
    console.log(...unknown);
}
SpreadPara(1 , 2.4 , 23 , 3456 , 78)

// Variables Scope ===>>> Local Scope / Global Scope
let global = "Hamza"
function localFun() {
    console.log("This is a local scope")
    let vegetable = "carrot"
    console.log(vegetable);
}
localFun()
console.log(global);

// Anonymous Function
let anonymousFunc = function(isMarried : boolean) {
    return isMarried
}
const married = anonymousFunc(false)
console.log(married);

// IIFE
(function(){
    console.log("This is IIFE functtion");
})()

// Nested Function
function outerFunction() {
    console.log("This is a outer function");
    const innerFunction = function() {
    console.log("This is a inner function");
    const arrowFunc = ()=>{
    console.log("This is an arrow function");
}
arrowFunc()
}
innerFunction()
}
outerFunction()

// Object
let student = {
    name : "Alishba",
    age : 24
}
console.log(student.age);

// Type Annotate of Object
let Student : {
    name : string;
    age : number;
    color : string
} = {
    name : "Fatima",
    age : 19,
    color : "pink"
}
console.log(Student);
console.log(Student.color);
console.log(Student['name']);

// Modifying an Object
student.name = "Aleesha"
console.log(student);

Student['name'] = "Zahoor"
console.log(Student);

// Type Alias ==>> give a new type name
type User = {
    name : string;
    age : number;
    city : string
}
let user : User= {
    name : "Areeba",
    age : 14,
    city : "Lahore",
}
console.log(user.name);
console.log(typeof user);

type Teacher = (x : number , y : number) => number
const add : Teacher = (x , y) => x + y
console.log(add(34 , 16));

// Type Literals
let shirtSize : "small" | "large" | "medium" | boolean | string ;
shirtSize = "medium"
console.log(shirtSize);
shirtSize = "large"
console.log(shirtSize);
shirtSize = true
console.log(shirtSize);
shirtSize = "Umer"
console.log(shirtSize);

// Type Union
let mixedBag :  boolean | string | number;
mixedBag = 12
console.log(mixedBag);
mixedBag = "Toys"
console.log(mixedBag);

type Parent = {
    name : string;
    age : number;
    city : string
}
type Child = {
    hoby : string;
    book : string;
    play : string
}

type parent_child = Parent & Child
let relation : parent_child = {
    name : "Ali Khan",
    age : 40,
    city : "Multan",
    hoby : "coding",
    book : "programming",
    play : "football"
}
console.log(relation);
console.log(relation.city);
console.log(relation.name);

// Array and Properties
let fruits : string[] = ["mango" , "apple" , "pear" ]
let numerical : Array<number> = [123 , 129 , 456]
console.log(fruits.length);
console.log(fruits[2]);
console.log(numerical);
// Modify Array Value
numerical[1] = 89
console.log(numerical);

// Array Methods
let car : string[] = ["civic" , "honda" , "corlla"]
car.reverse()
console.log(car); // reverse

let vege : string[] = ["onion" , "carrot" , "lemon"]
vege.push("turnip") // push
console.log(vege);
vege.pop() // pop
console.log(vege);
vege.shift()  // shift
console.log(vege);
vege.unshift("ladyfinger") // unshift
console.log(vege);

// slice
let grocery : string[] = ["corn" , "sugar" , "salt" , "rice" , "cookies"]
console.log(grocery.slice(1 , 4));

// splice
let numbers : number[] = [12 , 45 , 78 , 90 , 78]
numbers.splice(2 , 0 , 99)
console.log(numbers);

// Multi-Dimensional Array
let multiDim : number[][] = [
    [200 , 300 , 400],
    [500 , 600 , 700],
    [800 , 900 , 1000]
]
let answer = multiDim[2][2]
console.log(answer);

// Working with Array Objects
type Book = {
    name : string;
    author : string;
    published : number
}
let book : Book[] = [{
    name : "Harry Potter",
    author : "Henry",
    published : 1989
},
{
    name : "Louis Reader",
    author : "Jack",
    published : 1999
}]
book.push({
    name : "Smart way",
    author : "Karlis",
    published : 1979
})
console.log(book);

//find method
let foundBook = book.find(book => book.published === 1989)
console.log(foundBook);

// Loops
// for loop
for (let i = 0 ; i<=7 ; i++) {
    console.log("Hello World")
} 

// while loop
let j = 1
while(j < 4) {
    console.log("Runs Successfuly");
    j++
}

// Do-while loop
let z = 4
do {
    console.log("Runs atleast once")
}while(z < 2) {

}

// for-of loop
let sentence = "Type Script"
for(let char of sentence) {
    console.log(char)
}

// for - in loop
let mentor : any = {
    name : "Sir Hamza",
    age : 15,
    field : "programming"
}
for(let key in mentor) {
    console.log(key , mentor[key])
}

// while loop
let minutes = 5
while(minutes > 0) {
    console.log(`Bus arrive in ${minutes} minutes`)
    minutes--
}

// do while loop
let busArrive = 5
do {
    console.log("Checking for the bus....")
    busArrive--
}while(busArrive > 0){

}

// do while loop
let Minutes = 5
function busArrival() {
    Minutes--
    if(Minutes != 0) {
        return "Kindly Check for Bus"
    }
    else {
        return false
    }
}

do {
    let response = busArrival()
    console.log(response)
}while(Minutes > 0)

let BestFriends : string[] = ["Areeba" , "Laiba" , "Ayesha"]
for(let k = 0 ; k < BestFriends.length ; k++) {
    console.log(`${BestFriends[k]} is my best friend`);
}


















































































































