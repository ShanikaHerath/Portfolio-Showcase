<template>
  <footer class="luxury-footer">
    <div class="noise-overlay"></div>
    <div class="footer-content">
      
      <!-- Top Section -->
      <div class="footer-top" v-reveal>
        <div class="brand-section">
          <h2 class="footer-logo">Sinclair</h2>
          <p class="brand-bio">
            Crafting exquisite digital experiences blending timeless elegance with modern functionality.
          </p>
        </div>

        <div class="newsletter-section">
          <h3 class="column-title">Join the List</h3>
          <form class="newsletter-form" @submit.prevent>
            <input type="email" placeholder="Your email address" class="newsletter-input" required />
            <button type="submit" class="newsletter-submit" aria-label="Subscribe">
              <van-icon name="arrow" />
            </button>
          </form>
        </div>
      </div>

      <div class="footer-middle" v-reveal>
        <!-- Links Section: 2-column grid on mobile -->
        <div class="links-grid">
          <div class="links-column">
            <h3 class="column-title">Company</h3>
            <ul class="footer-links">
              <li><a href="#about" class="hover-link">About</a></li>
              <li><a href="#services" class="hover-link">Services</a></li>
              <li><a href="#portfolio" class="hover-link">Portfolio</a></li>
              <li><a href="#contact" class="hover-link">Contact</a></li>
            </ul>
          </div>
          <div class="links-column">
            <h3 class="column-title">Resources</h3>
            <ul class="footer-links">
              <li><a href="#" class="hover-link">Journal</a></li>
              <li><a href="#" class="hover-link">Press</a></li>
              <li><a href="#" class="hover-link">Privacy</a></li>
              <li><a href="#" class="hover-link">Terms</a></li>
            </ul>
          </div>
        </div>

        <!-- Social Links: Custom minimalist icon design -->
        <div class="social-links">
          <a href="#" class="social-icon" aria-label="Instagram">
            <van-icon name="photo-o" />
          </a>
          <a href="#" class="social-icon" aria-label="Twitter">
            <van-icon name="twitter-o" />
          </a>
          <a href="#" class="social-icon" aria-label="LinkedIn">
            <van-icon name="notes-o" />
          </a>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="footer-bottom" v-reveal>
        <div class="footer-divider"></div>
        <p class="copyright">© 2026 Sinclair Creative. All rights reserved.</p>
      </div>

    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.luxury-footer {
  width: 100vw;
  /* Background: Dark navy with no jarring transition from Contact */
  background-color: var(--navy); 
  position: relative;
  /* Spacing: Generous padding (32px is 2rem, 16px is 1rem) */
  padding: 4rem 1.5rem 2rem 1.5rem; 
}

/* Background: Dark navy or black with subtle texture */
.noise-overlay {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  /* Stacked layout */
  gap: 4rem;
}

.footer-top {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media (min-width: 768px) {
  .footer-top {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.brand-section {
  max-width: 350px;
}

/* Logo: Serif font */
.footer-logo {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: var(--soft-white);
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

/* Bio: 2-3 lines max, elegant sans-serif */
.brand-bio {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.8;
  color: rgba(245, 245, 245, 0.7);
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.column-title {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: var(--soft-white);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

/* Newsletter signup: inline with email input, gold border */
.newsletter-form {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--gray-inactive);
  padding-bottom: 8px;
  transition: border-color 0.3s ease;
}

.newsletter-form:focus-within {
  border-bottom-color: var(--gold);
}

.newsletter-input {
  background: transparent;
  border: none;
  color: var(--soft-white);
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  outline: none;
  width: 100%;
  max-width: 250px;
}

.newsletter-input::placeholder {
  color: rgba(245, 245, 245, 0.3);
  font-family: 'Playfair Display', serif;
  font-style: italic;
}

.newsletter-submit {
  background: transparent;
  border: none;
  color: var(--gold);
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  transition: transform 0.3s ease;
}

.newsletter-form:hover .newsletter-submit {
  transform: translateX(4px);
}

.footer-middle {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media (min-width: 768px) {
  .footer-middle {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}

/* Links section: 2-column grid on mobile */
.links-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 400px;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 0;
  margin: 0;
}

.hover-link {
  text-decoration: none;
  color: rgba(245, 245, 245, 0.6);
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 300;
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
  transition: color 0.3s ease;
}

.hover-link:hover {
  color: var(--soft-white);
}

/* Link hover: Gold underline animation (slide from left) */
.hover-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.hover-link:hover::after {
  transform: scaleX(1);
}

/* Social links: Custom minimalist icon design, gold color, 44px */
.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  font-size: 1.4rem;
  /* Minimalist border rather than solid blob */
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.4s ease;
}

.social-icon:hover {
  background: rgba(212, 175, 55, 0.05);
  border-color: var(--gold);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.1);
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1rem;
}

/* Subtle gold horizontal divider */
.footer-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(212, 175, 55, 0.25), transparent);
}

/* Copyright text: Very small, light gray, centered */
.copyright {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: rgba(245, 245, 245, 0.35);
  text-align: center;
  letter-spacing: 1px;
}
</style>
