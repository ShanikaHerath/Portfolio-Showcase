export const vRipple = {
  mounted(el) {
    el.classList.add('ripple-container');
    el.addEventListener('click', function(e) {
      const rect = el.getBoundingClientRect();
      
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const circle = document.createElement('span');
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;
      
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${x - radius}px`;
      circle.style.top = `${y - radius}px`;
      circle.classList.add('ripple-effect');
      
      // Remove previous ripples if any
      const existingRipple = el.querySelector('.ripple-effect');
      if (existingRipple) {
        existingRipple.remove();
      }
      
      el.appendChild(circle);
      
      setTimeout(() => {
        circle.remove();
      }, 600);
    });
  }
};
