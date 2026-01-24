// ============================================
// TUTORIAL 2-2: CODEDEX CONDITIONALS
// Student: Brigid
// Date: 1/23/26
// ============================================
// --------------------------------------------
// EXERCISE 11: COIN FLIP
// Simulate a coin toss using Math.random()
// Output "Heads" or "Tails"
// --------------------------------------------
let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}
// --------------------------------------------
// EXERCISE 12: GOOD MORNING
// Check if hour < 12
// If true, print morning greeting with routines
// --------------------------------------------
let hour = Math.random();
if (hour < 17) {
  console.log("Good morning 🌞! It is time to get up and get ready for class! Start your day with some coffee.");
}
// --------------------------------------------
// EXERCISE 13: GOOD AFTERNOON
// Add else clause to Exercise 12
// If hour < 12: morning greeting
// Else: afternoon greeting
// --------------------------------------------
let hour = 15;
if (hour < 12) {
  console.log("Good morning 🌞");
} else {
  console.log("Good afternoon ☁️");
}
// --------------------------------------------
// EXERCISE 14: pH LEVELS
// Check if pH is basic, acidic, or neutral
// Use else if for multiple conditions
// --------------------------------------------

let ph = 4
if (ph > 7) {
  console.log("Basic");
} else if (ph < 7) {
  console.log("Acidic");
} else {
  console.log("Neutral");
}

// --------------------------------------------
// EXERCISE 15: MAGIC 8 BALL
// Generate random number 0-8
// Return different responses based on number
// Format: Question / Magic 8 Ball Answer
// --------------------------------------------

const randomN = Math.floor(Math.random() * 9) + 1

if (randomN >= 7) {
  console.log("Fuck no");
} else if (randomN === 6) {
  console.log("Don't run tomorrow");
} else if (randomN < 5) {
  console.log("Perchance");
} else {
  console.log("Ask a different question")
}

// --------------------------------------------
// EXERCISE 16: AIR QUALITY INDEX
// Check AQI ranges using logical operators
// 0-50: Good, 51-100: Moderate, etc.
// --------------------------------------------

let aqi = 32

if (aqi > 0 && aqi < 50) {
  console.log("Good");
} else if (aqi > 51 && aqi < 100) {
  consol.log("Moderate");
}  else if (aqi > 101 && aqi < 150) {
  consol.log("Unhealthy (Sensitive Groups)");
}  else if (aqi > 151 && aqi < 200) {
  consol.log("Unhealthy");
}  else if (aqi > 201 && aqi < 300) {
  consol.log("Very Unhealthy");
} else {
  console.log("Hazardous")
}

// --------------------------------------------
// EXERCISE 17: ROCK PAPER SCISSORS
// Player picks 0, 1, or 2
// Computer picks random 0-2
// Determine winner using conditionals
// --------------------------------------------

let player = Math.floor(Math.random() * 3)
let computer = Math.floor(Math.random() * 3)

if ( player === 0 && computer === 0) {
  console.log("draw");
} else if (computer === 1) {
  console.log("Computer wins!");
} else if (computer === 2) {
  console.log("Player wins!");
} else if (player === 1 && computer === 1) {
  console.log("draw");
} else if (computer === 0) {
  console.log("Payer wins!");
} else if (computer === 2) {
  console.log("Computer wins!");
} else if (player === 2 && computer === 2) {
  console.log("draw");
} else if (computer === 0) {
  console.log("Computer wins!");
} else if (computer === 1) {
  console.log("Player wins!")
} else {
  console.log("Error")
}