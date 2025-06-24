const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let el of reveals) {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  }
});