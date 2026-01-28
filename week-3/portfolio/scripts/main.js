const toggle = document.querySelector(".theme-toggle");
document.documentElement.setAttribute("data-theme", "light");

toggle.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
});