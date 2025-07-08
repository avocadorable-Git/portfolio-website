// Smooth scroll and active nav
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});

// Highlight nav as you scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('main .section');
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  let current = '';
  sections.forEach(section => {
    if(section.offsetTop - 60 <= scrollY) {
      current = section.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Contact form fake submit
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('.btn');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Message Sent!';
    btn.style.background = '#bfa17b';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      btn.disabled = false;
    }, 2000);
    this.reset();
  }, 1200);
});
