// Load saved theme (if any)
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
} else {
  document.documentElement.dataset.theme = "light"; // Default to light if no saved theme
}

const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", function () {
  /* the below works, because it is a short hand for if else. The const currentTheme = document.documentElement.getAttribute("data-theme");
   is saying look at the html and find the attribute "data-theme". The next line, is saying if the theme is light
   switch to dark, and if dark switch to light. And vice versa */ 
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem('theme', newTheme); // Save to memory 
});