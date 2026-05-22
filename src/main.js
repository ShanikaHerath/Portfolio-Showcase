import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'

import { vReveal } from './directives/reveal'
import { vRipple } from './directives/ripple'
import { vImageReveal } from './directives/imageReveal'

const app = createApp(App)
app.use(Vant)
app.directive('reveal', vReveal)
app.directive('ripple', vRipple)
app.directive('image-reveal', vImageReveal)
app.mount('#app')

// Custom smooth scroll for anchor links with luxury cubic easing
document.addEventListener("click", function (e) {
  const target = e.target.closest("a");
  if (target && target.hash && target.hash.startsWith("#") && target.origin === window.location.origin) {
    const targetElement = document.querySelector(target.hash);
    if (targetElement) {
      e.preventDefault();
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const duration = 800; // 0.8s for luxury feel
        const progress = Math.min(timeElapsed / duration, 1);
        
        // ease-in-out-cubic
        const ease = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          window.location.hash = target.hash;
        }
      }

      requestAnimationFrame(animation);
    }
  }
});

