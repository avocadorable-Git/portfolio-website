// Smooth scroll for nav links and active state toggle
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Gallery: click to open image/gif in modal
function createModal(src) {
    const modal = document.createElement('div');
    modal.className = 'img-modal';
    modal.style.cssText = `
        position: fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(24,24,24,0.96);
        display:flex; justify-content:center; align-items:center; z-index:9999;
        animation: modalFadeIn 0.3s;
    `;
    const img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = '92vw';
    img.style.maxHeight = '92vh';
    img.style.borderRadius = '1.2rem';
    img.style.boxShadow = '0 0 40px #ff6a00cc, 0 0 10px #fff1c2';
    img.alt = 'Gallery Image';
    modal.appendChild(img);
    modal.addEventListener('click', () => document.body.removeChild(modal));
    document.body.appendChild(modal);
}
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', e => {
        createModal(e.target.src);
    });
});

// Project cards: hover glitter effect
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mousemove', e => {
        item.style.boxShadow = `0 0 40px #ff8c1a, 0 0 10px #fff1c2`;
    });
    item.addEventListener('mouseleave', e => {
        item.style.boxShadow = '';
    });
});

// Social icon hover sparkle
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.add('sparkle');
        setTimeout(() => icon.classList.remove('sparkle'), 800);
    });
});

// Contact Form: fake submit event with animation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-glow');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = 'Message Sent!';
        btn.style.background = '#181818';
        btn.style.color = '#ff6a00';
        setTimeout(() => {
            btn.textContent = 'Send Message';
            btn.style.background = '';
            btn.style.color = '';
            btn.disabled = false;
        }, 2000);
        this.reset();
    }, 1600);
});

// Glittering animation for .sparkle
const style = document.createElement('style');
style.innerHTML = `
    .sparkle {
        animation: sparkle 0.8s;
    }
    @keyframes sparkle {
        0% { box-shadow: 0 0 12px #fff1c2, 0 0 2px #ff6a00; }
        50% { box-shadow: 0 0 28px #fff1c2, 0 0 10px #ff6a00; }
        100% { box-shadow: 0 0 12px #ff6a00cc, 0 0 2px #fff1c2; }
    }
    @keyframes modalFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
