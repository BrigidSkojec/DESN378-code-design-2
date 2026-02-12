// Load saved theme (if any)
/* const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  // User has made a choice — respect it
  document.documentElement.dataset.theme = savedTheme;
} else {
  // No saved choice — check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
}

const toggle = document.querySelector(".theme-trigger");

toggle.addEventListener("click", function () {
  /* the below works, because it is a short hand for if else. The const currentTheme = document.documentElement.getAttribute("data-theme");
   is saying look at the html and find the attribute "data-theme". The next line, is saying if the theme is light
   switch to dark, and if dark switch to light. And vice versa */ 
/*  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem('theme', newTheme); // Save to memory 
}); */


// Load saved theme (put this at the TOP of your JS)
const saved = localStorage.getItem("theme");
if (!saved || saved === "system") {
  const osDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (osDark) {
    document.documentElement.dataset.theme = "dark";
  } else {
    document.documentElement.dataset.theme = "light";
  }
} else {
  document.documentElement.dataset.theme = saved;
}

const dropdown = document.querySelector(".theme-dropdown");
const trigger = document.querySelector(".theme-trigger");

const systemBtn = document.querySelector("button[data-theme='system']");
const lightBtn = document.querySelector("button[data-theme='light']");
const darkBtn = document.querySelector("button[data-theme='dark']");

trigger.addEventListener("click", function (event) {
  event.stopPropagation();
  dropdown.classList.add("open");
});

document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("open");
  }
});

lightBtn.addEventListener("click", function () {
  document.documentElement.dataset.theme = "light";
  localStorage.setItem("theme", "light");
  dropdown.classList.remove("open");
});

darkBtn.addEventListener("click", function () {
  document.documentElement.dataset.theme = "dark";
  localStorage.setItem("theme", "dark");
  dropdown.classList.remove("open");
});

systemBtn.addEventListener("click", function () {
  localStorage.setItem("theme", "system");

  const osDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  document.documentElement.dataset.theme = osDark ? "dark" : "light";
  dropdown.classList.remove("open");
});