// Cursor glow
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// Dark mode toggle
const toggle = document.getElementById('darkToggle');
if (toggle) {
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark', toggle.checked);
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target?.scrollIntoView({ behavior: "smooth" });
  });
});

// Reveal on scroll
const reveals = document.querySelectorAll(".container, .glow-container");
window.addEventListener("scroll", () => {
  for (let box of reveals) {
    const winHeight = window.innerHeight;
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < winHeight - 100) {
      box.classList.add("active");
    }
  }
});

// Hover shake buttons
document.querySelectorAll(".orange-btn").forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "rotate(-1deg) scale(1.06)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "rotate(0deg) scale(1)";
  });
});

// Click pulse animation
document.querySelectorAll(".orange-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 300);
  });
});

// Time-based greeting
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) greeting = "Good morning ☀️";
  else if (hour < 18) greeting = "Good afternoon 🌤️";
  else greeting = "Good evening 🌙";

  if (hero) {
    hero.innerHTML += `<p class="greeting">${greeting}</p>`;
  }
});
