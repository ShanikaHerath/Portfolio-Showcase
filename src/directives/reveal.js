const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

export const vReveal = {
  mounted(el) {
    el.classList.add('reveal-init');
    revealObserver.observe(el);
  },
  unmounted(el) {
    revealObserver.unobserve(el);
  }
};
