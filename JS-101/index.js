// Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

let color = "black";
const height = 170;
var likesPizza = false;

console.log("My favorite color is " + color);
console.log("My height in centimeters is " + height);
console.log("Do I like pizza? " + likesPizza);


/**
 *  Write a function `sum` that finds the sum of two numbers. 
    Side quest - Try passing in a string instead of a number and see what happens?
 */

function sum (a,b){
    return a+b;
}
let a = 5, b = 6;
let d = "5", e = 6;
let c = sum(a,b);
let f = sum(d,e);
console.log(c);
console.log(f);

/**
 *  Write a function called `canVote` that returns true or false if the `age` of a user is > 18
 */

function canVote (age){
    if ( age > 18 ) { return true; }
    else { return false; }
}
//let age = canVote(12);
let age = canVote(21);
console.log(age);

/**
 * Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."
 */

function checkEveOrOdd(n){
    if ( n % 2 == 0){
        console.log(n + " is even");
    } else console.log(n + " is odd");
}

let n = 13;
checkEveOrOdd(n);


/**
 * Write a function called sum that finds the sum from 1 to a number
 */

let number = 6;
sumOfNnumbers(number);

function sumOfNnumbers(number){
    let sum = 0;
    for ( i = 1; i <= number; i++){
        sum = sum + i;
    }
    console.log(sum);
}


/**
 * Write a function that takes a user as an input and greets them with their name and age
 */

const user = {
    "name" : "Shreya",
    "age" : 19,
    "gender" : "Female"
}

function greet(user){
    console.log("Hi "+ user.name);
    console.log("Your age is "+ user.age);
}

greet(user);


/**
 * Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
 */

function greetByGender(user){
    if (user.gender === "Male"){
        console.log("Hi Mr. "+ user.name + " and your age is " + user.age );
    } else if(user.gender === "Female"){
        console.log("Hi Mrs. "+ user.name + " and your age is " + user.age );
    } else{
        console.log("Hi Others " + user.name + " and your age is " + user.age );
    }
}

greetByGender(user);

function greetByGenderAndCheckEligibilty(user){
    if (user.gender === "Male"){
        if(user.age > 18){
            console.log("Hi Mr. "+ user.name + " and your eligible for voting");
        } else {
            console.log("Hi Mr. "+ user.name + " and you'r not eligible for voting");
        }
    } else if(user.gender === "Female"){
        if(user.age > 18){
            console.log("Hi Mrs. "+ user.name + " and your eligible for voting");
        } else {
            console.log("Hi Mrs. "+ user.name + " and you'r not eligible for voting");
        }
    } else{
        if(user.age > 18){
            console.log("Hi Othes. "+ user.name + " and your eligible for voting");
        } else {
            console.log("Hi others. "+ user.name + " and you'r not eligible for voting");
        }
    }
}

greetByGenderAndCheckEligibilty(user);


/**
 * Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
 */
const arr = [1,2,3,4,5,6,7,8,8,45,44,23,34,88]
function evenArray(ele){
    return ele%2 == 0;
}
const res = arr.filter(evenArray);
console.log(res);


/**
 * Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
 */

const listOfusers = [
    {
    name: "user1",
    age:23,
    gender:"male"
    },
    {
    name: "user2",
    age:13,
    gender:"female"
    },
    {
    name: "user3",
    age:33,
    gender:"female"
    },
    {
    name: "user4",
    age:18,
    gender:"female"
    },
    {
    name: "user5",
    age:24,
    gender:"male"
    }
]

function fetchUsersWithAge(users){
    const newUsers = []
    for (let i = 0; i < users.length; i++){
        if (users[i].age > 18){
            newUsers.push(users[i].name);
        }
    }
    return newUsers;
}

const resultOfUsers = fetchUsersWithAge(listOfusers);
console.log(resultOfUsers);


/**
 * Create a function that takes an array of objects as input,
and returns the users whose age > 18 and are male
 */


function fetchUsersWithAgeAndGender(users){
    const newUsersTwo = []
    for (let i = 0; i < users.length; i++){
        if (users[i].age > 18 && users[i].gender == "Male" || users[i].gender == "male" || users[i].gender == "MALE"){
            newUsersTwo.push(users[i].name);
        }
    }
    return newUsersTwo;
}

const resOfUsers = fetchUsersWithAgeAndGender(listOfusers);
console.log(resOfUsers);