// Dark / light mode toggle with saved preference
const toggleBtn = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

// Dynamic greeting based on time of day
const greetingEl = document.getElementById("greeting");
const hour = new Date().getHours();
let greeting = "Hello, I'm";

if (hour < 12) greeting = "Good morning, I'm";
else if (hour < 18) greeting = "Good afternoon, I'm";
else greeting = "Good evening, I'm";

greetingEl.textContent = greeting;
