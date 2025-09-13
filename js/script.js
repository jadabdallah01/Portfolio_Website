// Typewriter Effect
const words = [
  "I build clean websites.",
  "I develop interactive games.",
  "I create smooth user experiences."
];
let i = 0, j = 0, deleting = false;
const speed = 120;
const el = document.getElementById("typewriter");

function type() {
  if (!deleting && j <= words[i].length) {
    el.textContent = words[i].slice(0, j++);
  } else if (deleting && j > 0) {
    el.textContent = words[i].slice(0, j--);
  } else {
    deleting = !deleting;
    if (!deleting) i = (i + 1) % words.length;
  }
  setTimeout(type, deleting ? speed / 2 : speed);
}
type();

// Scroll Reveal Animations
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));
