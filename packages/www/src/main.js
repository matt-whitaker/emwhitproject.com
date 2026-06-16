import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── About ─────────────────────────────────────────────
gsap.from('.about-img', {
  scrollTrigger: {
    trigger: '.about-section',
    start: 'top 80%',
  },
  x: -80,
  opacity: 0,
  duration: 0.9,
  ease: 'power3.out',
});

gsap.from('.about-text', {
  scrollTrigger: {
    trigger: '.about-section',
    start: 'top 75%',
  },
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: 'power2.out',
});

// ── News ──────────────────────────────────────────────
gsap.from('.news-item', {
  scrollTrigger: {
    trigger: '.news-section',
    start: 'top 80%',
  },
  opacity: 0,
  y: 30,
  duration: 0.7,
  stagger: 0.15,
  ease: 'power2.out',
});

// ── Discography ───────────────────────────────────────
gsap.from('.disco-item', {
  scrollTrigger: {
    trigger: '.discography-section',
    start: 'top 80%',
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: 'power2.out',
});
