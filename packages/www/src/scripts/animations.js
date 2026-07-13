import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Images (about photo, discography covers) finish loading after this script
// runs, which shifts page height and leaves later triggers — like #listen,
// the last section — pinned to stale (too-short) scroll coordinates. Force
// a recalculation once everything has actually loaded.
window.addEventListener('load', () => ScrollTrigger.refresh());

// ── Nav color swap over light sections ────────────────
ScrollTrigger.create({
  trigger: '#about',
  start: 'top 20px',
  end: 'bottom 20px',
  toggleClass: { targets: 'nav', className: 'nav-dark' },
});

// ── About ─────────────────────────────────────────────
gsap.from('.about-img', {
  scrollTrigger: {
    trigger: '#about',
    start: 'top 80%',
  },
  x: -80,
  opacity: 0,
  duration: 0.9,
  ease: 'power3.out',
});

gsap.from('.about-text', {
  scrollTrigger: {
    trigger: '#about',
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
    trigger: '#news',
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
    trigger: '#discography',
    start: 'top 80%',
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: 'power2.out',
});

// ── Listen ────────────────────────────────────────────
gsap.from('.listen-link', {
  scrollTrigger: {
    trigger: '#listen',
    start: 'top 80%',
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
  stagger: 0.1,
  ease: 'power2.out',
});
