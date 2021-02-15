function function2() {
    document.getElementById("external").innerHTML="Paragraph has been changed by the external Javascript";}
// single line comment.
/*Multi
Line
Comment */ 
function function3(){
  window.alert("meltdown Imminent")
}   
/* The JavaScript below adds the word Hello World to the Console Log which can be accessed using developer tools.*/
console.log ("hello world")
console.error ("error message")
console.warn ("warning message")

/*Variables "let" & "const"*/ 
let age=10;
console.log(age);

let friends=10;
friends=20;
console.log(friends);
// Note how the number of friends is now 20. 

let animals ;
console.log(animals);
// Note that not assigning a value to the let variable does not cause an error.

const stars=150000000;
console.log(stars);

const jiffies=6;
// jiffies=7;
console.log(jiffies);
// Uncomment jiffies=7 to see how this throws an error because the const cannot be 2 different values. "invalid assignment to const 'Jiffies'."

const reactions = "remove value to show the error that appears if a const variable is not given a value I.E. undefined.";
console.log(reactions);
// Note that not assigning a value to the "Const" variable causes an error. 

// Data Types
// String. Note that string variables are contained within quotation marks and it could be double or single parenthses. 
const name = "John";
const lastname = 'Smith';

// number. The value is recognised as a number because it is not wrapped in quotation marks. 
const players = 8;
const outof5 = 4.3;

// Boolean. A boolean value is either true or false. It is not in quotation marks.
const hungry = true;

// null.
const x = null;

// undefined. either enter the word undefined or just name the variable without giving it a value. Remeber that const variables must be given a value even if that value is undefined which si why the second example uses a let variable.
const y = undefined;
let z;

// To find out what data type a variable is use the console log. enter console.log(typeof ...) where ... is the variable name.
console.log(typeof players);
// if a variable with data tye set to null is queried using typeof then teh console states that the variable is an object but this is not the case. This is something to be aware of. 
console.log(typeof x);

// Concatenation. Conatenation is the joining together of data. In the example below there are 2 variables (a string and a number) and these are conactenated into a longer string that appears in the console log using the + 
const patientname="Joe"
const patientage=76
console.log("my name is " + patientname + " and I am " + patientage + " years old.")

// The more modern way to join data together is using template strings. The template string is conatiend within "back ticks" `` which are located at the top left of the keyboard then the variables are entered inside curly braces which are preceeded by the $ sign. e.g.
console.log(`my name is ${patientname} and I am ${patientage} years old.`);

const howdy = `my name is ${patientname} and I am ${patientage} years old.`;

console.log(howdy);

// string properties and methods
const s = "Hello world"
/* Properties return info about a variable. 
properties can be identified by NOT having parentheses following the property
Use the s.length property to find the number of characters in a string including spaces. */ 
console.log(s.length)

// methods are functions that are associated with a objects. A function is a piece of script that changes something. In this eaxmple variable being changed is "s". After the "." is the function. The second parentheses conatin anargumentfollowing toUpperCase 
console.log(s.toUpperCase());

// example 2. A method to get part of a string. In the parentheses following substring the numbers represent the start and end of the characters in the string to be returned. In this case the string was "Hello World" so this method will just return "Hello". Note that the start character is character 0 and the end character is 5. The substring method returns characters from and including the start character and upto but not including the end character.   
console.log(s.substring(0,5));

// combining methods. separate the methods by a ".". Note that there is no need for the second method to state that it is acting on a string as that was stated at the beginning. 
console.log(s.substring(0,5).toUpperCase());

// Split a string into an array. This separates out the string into each letter. There is not an argument in the parentheses so it separates the srting into each individual character. 
console.log(s.split(""));

// In the below example the argument in the parentheses is saying to splut the string into an array each time there is a ", " (comma space) which acts as the separator so the individual words get returned. 
const tech = "technology, computers, IT";
console.log(tech.split(", "));

// Arrays - variables that hold multiple values. Various ways of making arrays. 

// method 1 - Array constructor

const numbers = new Array(1,2,3,4,5);

console.log (numbers);

const fruits = ['apples', 'oranges', 'pears'];

console.log (fruits);

// Accessing a value in the array. 
// data is always zero based so to get Oranges enter 1 in the square brackets. 0 would have returned apples.

console.log(fruits[1]);

// change data to an array.
// use the square brackets to specify the number of the array data that is being changed. 
fruits[3] = 'grapes';
console.log (fruits);

// Use push to add a value to the array in the next available set of data. 
fruits.push('mangos');
console.log(fruits);

// add a value to the beginning. 
fruits.unshift('strawberries');
console.log(fruits)

// remove the last value.
fruits.pop();
console.log(fruits);

// Check if a variable is an array. Fruits returns True. S was a string so returns false.
console.log(Array.isArray(fruits));
console.log(Array.isArray(s));

//Check the index value of a peice of data in an array. Index value is what sequence that piece of data is in the array.
console.log(fruits.indexOf('oranges'));

// Object Literals. These are value pairs. 
const person = {
  firstname:'John',
  lastname:'Smith',
  age:60,
  hobbies:['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city:'Boston',
    state: 'MA'
  }
}
console.log(person)

//Return a value from the object literal. 
console.log(person.lastname);
// Return multiple values
console.log(person.firstname, person.lastname)
//return a value from an object literal within an object literal.
console.log(person.address.city)
//return a vaulue from an array within an object literal. 
console.log(person.hobbies[1])

// convert the values to variables.

const {firstname, surname} = person
//first name and surname are now considered variables. 
console.log(firstname)
//This also works for values within an object literal within an object literal. 
const {address: {city}}=person;
console.log(city);

