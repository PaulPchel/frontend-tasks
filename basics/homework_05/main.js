const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "Light";
} else {
  toggleBtn.textContent = "Dark";
}

toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  toggleBtn.textContent = isDark ? "Light" : "Dark";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

