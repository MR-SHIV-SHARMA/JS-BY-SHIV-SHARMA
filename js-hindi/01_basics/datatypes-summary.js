//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// javascript dynamic typed language hai statically typed language hai

// Even statically typed languages can have a dynamic or variant data type that can contain different data types. JavaScript is called a dynamic language because it doesn't just have a few dynamic aspects, pretty much everything is dynamic. All variables are dynamic (both in type and existance), and even the code is dynamic.

// Is JavaScript a dynamically typed language?

// Yes, **JavaScript** is a **dynamically typed language** ¹²³. This means that the type of a variable is determined at runtime, rather than at compile time. In other words, the type of a variable can change during the execution of a program. This allows for more flexibility in coding, but can also lead to errors if not handled properly.

// I hope that helps! Let me know if you have any other questions.

// Source: Conversation with Bing, 2/3/2024
// (1) types - Is JavaScript an untyped language? - Stack Overflow. https://stackoverflow.com/questions/964910/is-javascript-an-untyped-language.
// (2) #5) Is JavaScript a statically typed or Dynamically typed language. https://dev.to/myk/5-is-javascript-a-statically-typed-or-dynamically-typed-language-232e.
// (3) why javascript is considered as a dynamic language?. https://blog.anasouardini.online/posts/why-javascript-is-considered-as-a-dynamic-language/.
// (4) Why JavaScript is a Dynamic Language? | by Subodh Kumar | JavaScript in .... https://javascript.plainenglish.io/why-javascript-is-a-dynamic-language-ff4e849406f0.
// (5) Dynamic typing - MDN Web Docs Glossary: Definitions of Web-related .... https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_Typing.
