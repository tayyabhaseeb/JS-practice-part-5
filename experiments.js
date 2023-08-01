const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent, monthlyRent);

///////////////////////////////////////////////////

//STRINGS

const firstName = "Minahil";
const lastName = "Irfan";

const sentence = ` Hello ${firstName} ${lastName} How are you!`;

//const sentence = "Hello " + firstName + " " + lastName + " ! HOW ARE YOU  ";//
console.log(sentence);

//BOOLEAN//

// BOOLEAN IS TRUE OR FALSE

const skyIsBlue = true;

if (skyIsBlue) {
  console.log("The sky is blue!");
} else {
  console.log("The sky is not blue!!!!");
}

console.log(skyIsBlue);

// Coersion

if (2 + 2 === 4) {
  console.log("MATHS STILL WORKS");
} else {
  console.log("UGH!!! PANIC");
}

// ELSE IF STATEMENT

//LOOPS

// while loop

/*

let friendsAtYourParty = 0;

while (friendsAtYourParty < 10) {
  friendsAtYourParty = friendsAtYourParty + 1;
}

console.log(friendsAtYourParty);

*/

//let friendsAtYourParty = 0;

/*

friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;

*/

/*

while (friendsAtYourParty < 10) {
  friendsAtYourParty = friendsAtYourParty + 1;
}

console.log(friendsAtYourParty);

*/

// FOR LOOP

let friendsAtYourParty = 0;

for (let i = 0; i < 10; i++) {
  friendsAtYourParty++;
}
console.log(friendsAtYourParty);

// QUIZ-1

/*
  Write some code that declares two variables, character and timesToRepeact.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
  'fffff'
*/

const character = "S";
const timesToRepeat = 20;

let answer = "";

for (let index = 0; index < timesToRepeat; index++) {
  answer = answer + character;
}

console.log(answer);

// FUNCTIONS AND SCOPING

function addTwo(number) {
  return number + 2;
}
console.log(addTwo(5));

// OBJECTS

const person = {
  city: "chicago",
  food: "biryani",
};

console.log(person.food);

person.city = "faisalabad";
console.log(person.city);

// FUNCTION IN OBJECTS

const person1 = {
  name: "Tayyab",
  ageRange: "20-25",
};

const person2 = {
  name: "Humza",
  ageRange: "65-75",
};

function suggestMusic(person) {
  if (person.ageRange === "20-25") {
    console.log("We think you'll like Daft Punk you crazy millenial.");
  } else if (person.ageRange === "65-75") {
    console.log(
      "You're obviously going to like Johnny Cash. He walks the line."
    );
  } else {
    console.log(
      "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
    );
  }
}

suggestMusic(person1);
suggestMusic(person2);

// OBJECTS CAN HAVE THEIR OWN FUNCTION

const dog = {
  name: "dog",
  speak() {
    console.log("woo woo");
  },
};

dog.speak();

// ARRAYS IN JAVASCRIPT

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

console.log(daysOfWeek);
console.log(daysOfWeek[4]);
console.log(daysOfWeek[6]);

// ARRAYS METHODS

//const primeNumbers = [1, 3, 5, 7, 9];
//console.log(primeNumbers.length);
//console.log(primeNumbers.join("hello-"));

//console.log(primeNumbers.pop());

//const courses = [
//{ teacher: "Kyle Simpson", course: "JS Function Lite" },
//{teacher: "Sarah Drasner", course: "Intro to Vue" },
//{ teacher: "Brian Holt", course: "Complete Intro to React v3" },
//{ teacher: "Steve Kinney", course: "State Management" },
//];

//courses.push({ teacher: "Sean Larkin", course: "Webpack" });

//console.log(courses);
//courses[2] = { teacher: "Brian Holt", course: "Complete Intro to React v4" };

//console.log(courses);

const courses = [
  { teacher: "kyle simpson", course: "javascript in depth v3" },
  { teacher: "Sarah Drasner", course: "Intro to vue" },
  { teacher: "Brian Holt", course: "bootcamp of web dev" },
  { teacher: "steve kinney", course: "State management " },
];

//courses.pop();

//courses.push({ teacher: "Haseeb Ahmed", course: "Machine design" });
console.log(courses);

// LOOPING OVER ARRAYS

const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong",
];

//for (let index = 0; index < cities.length; index++) {
//console.log(cities[index]);
//}

//////

const newCities = cities.map(function (city) {
  return city.toUpperCase();
});
console.log(newCities);

/////////////////////
// SORT METHOD

const primeNumbers = [1, 10, 5, 0, 7, 9];

console.log(primeNumbers.sort());

const aplhabets = ["A", "G", "D", "F", "C"];

console.log(aplhabets.sort());
