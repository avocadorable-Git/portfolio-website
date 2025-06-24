// Scroll to Top Button
const scrollBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Glowing Hover Effect for Nav
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.color = "white";
    link.style.textShadow = "0 0 10px #ffa500";
  });
  link.addEventListener("mouseout", () => {
    link.style.color = "#ffa500";
    link.style.textShadow = "none";
  });
});
