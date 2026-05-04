
const progressBar = document.getElementById('scrollProgress');

function updateScrollProgress() {
  const scrollTop    = window.scrollY;
  const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPct    = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = scrollPct + '%';
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });

// ── Reveal on Scroll ─────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);

revealEls.forEach(el => revealObserver.observe(el));

// ── Animated Skill Bars ───────────────────────
const skillGroups = document.querySelectorAll('.skills-group');

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.skill-fill');
        bars.forEach(bar => {
          setTimeout(() => {
            bar.style.width = bar.dataset.pct + '%';
          }, 200);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

skillGroups.forEach(group => skillObserver.observe(group));

// ── Active Nav Link on Scroll ─────────────────
const sectionIds  = ['hero', 'about', 'skills', 'projects', 'services', 'contact'];
const navLinks    = document.querySelectorAll('.nav-links a');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

function updateActiveNav() {
  let current = '';
  sectionIds.forEach(id => {
    const section = document.getElementById(id);
    if (section && window.scrollY >= section.offsetTop - 140) {
      current = id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// ── Hamburger / Mobile Menu ───────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
}

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMobileMenu();
  }
});

// Make closeMobileMenu accessible from HTML onclick
window.closeMobileMenu = closeMobileMenu;

// ── Contact Form Submit ───────────────────────
function handleSubmit(e) {
  e.preventDefault();

  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const btn     = form.querySelector('.form-submit');

  // Simulate sending
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    form.style.display    = 'none';
    success.style.display = 'block';
  }, 1000);
}

// Make handleSubmit accessible from HTML onsubmit
window.handleSubmit = handleSubmit;

// ── Smooth Anchor Scroll ──────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ── Cursor Glow Effect (subtle) ──────────────
const glow = document.createElement('div');
glow.style.cssText = `
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%);
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: left 0.3s ease, top 0.3s ease;
`;
document.body.appendChild(glow);

let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  glow.style.left = mouseX + 'px';
  glow.style.top  = mouseY + 'px';
});
