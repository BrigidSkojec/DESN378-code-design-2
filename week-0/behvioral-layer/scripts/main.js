const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/fox1.png") {
    myImage.setAttribute("src", "images/fox2.png");
  } else {
    myImage.setAttribute("src", "images/fox1.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Are you a penguin? ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Are you a penguin? ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});

/*
  SUMMARY:
  This file does two things:
  1. [Your explanation of the image changer]
  The JS image changer works, first you have it in your html. Which we changed to match our new images
  fox1.png and fox2.png. In the html, it is set to <img src="images/fox1.png"...we changed the
  original image name to fox1.png, as that is the image we want to start with.
  My undertsnading is iffy with the actual code, but I undertsand that the code for the image
  is looking for the image, finding it, and when someone were to click it, it tells the page
  to change it to the other image. There is also code telling the document, if it starts with the other
  image, to change back to fox1.png.
  2. [Your explanation of the welcome message]
​I am still pretty confused on this part. And admittedly it has taken me too long to
do this assignment so far because I kept getting caught up in other parts. I know we added a button
in the html, and made a variable with a value in the JS. That way we could make the button interactive.
A function was made to set up the ability to put in a name and it is then stored in local storage. of the
document I guess? That way it is saved and you don't have to enter your name each time.
We also put in a function that allows people to click the button and change their name. 
  The key pattern I learned: [your insight here]
  There is so much more to this than I had realized before. And it'll defintely take time to 
  become more comfortable. 
*/