const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('image-reveal-active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

export const vImageReveal = {
  mounted(el) {
    el.classList.add('image-reveal-init');
    imageObserver.observe(el);
  },
  unmounted(el) {
    imageObserver.unobserve(el);
  }
};
