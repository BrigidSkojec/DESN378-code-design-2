// ============================================
// TUTORIAL 1-0: CODEDEX VARIABLES
// Student: Brigid
// Date: 1/13/26
// ============================================
​
// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
// - Two const variables 
// - Two let variables 
// Print them all, then reassign one let variable
// --------------------------------------------

​const firstName = "Brigid";
console.log(firstName);
const favoriteColor = "Lavender";
console.log(favoriteColor);

let currentMood = "Drained";
console.log(currentMood);
let currentLocation = "House";
console.log(currentLocation);

currentMood = "Exhausted";
console.log(currentMood);
​
// --------------------------------------------
// EXERCISE 7: DATA TYPES
// Create variables for your favorite company:
// 
// Print them all
// --------------------------------------------
​
​let companyName = "MikeandIke";
console.log(companyName);

let foundingYear = 1940;
console.log(foundingYear);

let isActive = true;
console.log(isActive);

let fundingAmount;
console.log(fundingAmount);
​
​
// --------------------------------------------
// EXERCISE 8: TEMPERATURE
// Convert Spokane's temperature from °F to °C
// Formula: (fahrenheit - 32) / 1.8
// --------------------------------------------
​
const fahrenheit = 42;
let celsius = (fahrenheit - 32) / 1.8;
console.log(celsius);
​
​
// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
// Calculate tip and total from a bill
// - billAmount, tipPercent
// - tipAmount = billAmount * (tipPercent / 100)
// - total = billAmount + tipAmount
// --------------------------------------------
​
let weight = 61;
let height = 1.65;

let bmi = weight / height ** 2;
console.log(bmi);
​
​
// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely
// --------------------------------------------
​let earthWeight = 135;
console.log("Your weight on Earth is " + earthWeight + " pounds.");

let marsWeight = 135 * 0.38;

console.log("Your weight on Mars is " + marsWeight + " pounds.");