// ===== Scroll to Top Button =====
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// ===== Glowing Navigation Hover Effect =====
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.color = "#000";
    link.style.backgroundColor = "#ffa500";
    link.style.boxShadow = "0 0 10px #ffa500, 0 0 20px #ffa500";
  });

  link.addEventListener("mouseleave", () => {
    link.style.color = "#ffa500";
    link.style.backgroundColor = "transparent";
    link.style.boxShadow = "none";
  });
});


// ===== Typing Effect on Welcome Section =====
const welcomeText = document.querySelector("#home h2");
const text = "Welcome!";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    welcomeText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
welcomeText.textContent = "";
typeWriter();


// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// ===== Section Glow on Scroll =====
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-glow");
      } else {
        entry.target.classList.remove("active-glow");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".glow-box").forEach(section => {
  observer.observe(section);
});


// ===== Animate Button Clicks =====
document.querySelectorAll("button, a").forEach(el => {
  el.addEventListener("mousedown", () => {
    el.style.transform = "scale(0.95)";
  });
  el.addEventListener("mouseup", () => {
    el.style.transform = "scale(1)";
  });
});
