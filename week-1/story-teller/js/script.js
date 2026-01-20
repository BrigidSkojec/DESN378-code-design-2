const myImage = document.querySelector("img");
const caption = document.querySelector('#story-caption');

// Story content
const captions = [
  "Click the image to begin...",
  "Isla was becoming quite the grump. So, we decided to get her a friend.",
  "It was then, we ended up bringing home Roxy. A skittish, stubby little thing.",
  "At first, Isla did not take to her. In fact, she was rather angry.",
  "Roxy, on the other hand, despite being scared, longed to be her friend.",
  "Now, despite Isla acting as though Roxy is a nuisance. She will play with her, and even let her lay near her...sometimes.",
];

// Track current step
let currentStep = 0;

// Listen for clicks
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "assets/images/startbackground.jpeg") {
    myImage.setAttribute("src", "assets/images/image1.jpg");
  } else if (mySrc === "assets/images/image1.jpg") {
    myImage.setAttribute("src", "assets/images/image2.jpg");
  } else if (mySrc === "assets/images/image2.jpg") {
    myImage.setAttribute("src", "assets/images/image3.jpg");
  } else if (mySrc === "assets/images/image3.jpg") {
    myImage.setAttribute("src", "assets/images/image4.jpg");
  } else if (mySrc === "assets/images/image4.jpg") {
    myImage.setAttribute("src", "assets/images/image5.jpg");
  } else if (mySrc === "assets/images/image5.jpg") {
    myImage.setAttribute("src", "assets/images/startbackground.jpeg");
  }

  // Update caption after image loads
  currentStep = (currentStep + 1) % captions.length;
  setTimeout(() => {
    caption.textContent = captions[currentStep];
  }, 115);
});
