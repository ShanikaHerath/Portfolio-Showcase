<template>
  <section id="services" class="services-section">
    <div class="content-container">
      
      <div class="section-header" v-reveal>
        <h2 class="heading">Curated Services</h2>
        <p class="subheading">Elevating brands through meticulous design and strategic vision.</p>
      </div>
      
      <div class="services-grid">
        <template v-for="(service, index) in services" :key="index">
          <div class="service-card" v-reveal>
            
            <div class="card-top">
              <span class="badge">{{ String(index + 1).padStart(2, '0') }}</span>
              <van-icon :name="service.icon" class="service-icon" />
            </div>
            
            <h3 class="card-title">{{ service.title }}</h3>
            <p class="card-desc">{{ service.desc }}</p>
            
            <a href="#" class="cta-link">
              <span class="cta-text">Learn More</span>
            </a>
          </div>
          
          <!-- Dashed divider between cards (Visible primarily on mobile) -->
          <div class="dashed-divider" v-if="index < services.length - 1" v-reveal></div>
        </template>
      </div>
      
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Brand Identity',
    icon: 'vip-card-o',
    desc: 'Crafting distinctive visual identities that resonate deeply with your discerning audience, ensuring timeless appeal.'
  },
  {
    title: 'Digital Experience',
    icon: 'desktop-o',
    desc: 'Immersive, high-performance web platforms blending pristine aesthetics with flawless, modern functionality.'
  },
  {
    title: 'Creative Direction',
    icon: 'eye-o',
    desc: 'Guiding the creative vision to ensure a cohesive and luxurious brand narrative across every conceivable touchpoint.'
  }
]
</script>

<style scoped>
.services-section {
  width: 100%;
  padding: 8rem 2rem;
  background-color: var(--navy);
  /* Alternating subtle background pattern */
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.01) 0px,
    rgba(255, 255, 255, 0.01) 2px,
    transparent 2px,
    transparent 12px
  );
  position: relative;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.heading {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  letter-spacing: 4px;
  color: var(--soft-white);
  text-transform: uppercase;
  font-weight: 400;
}

.subheading {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  color: rgba(245, 245, 245, 0.7);
  letter-spacing: 1px;
}

.services-grid {
  display: flex;
  flex-direction: column;
  gap: 24px; /* Requested 24px gap */
}

@media (min-width: 992px) {
  .services-grid {
    flex-direction: row;
    justify-content: center;
    /* On desktop, dashed dividers will become vertical */
  }
}

.service-card {
  flex: 1;
  background: rgba(10, 22, 40, 0.4);
  backdrop-filter: blur(10px);
  /* Minimal border 1px gold */
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

/* Card hover effect: lift + gold glow */
.service-card:hover {
  transform: translateY(-8px);
  border-color: rgba(212, 175, 55, 0.8);
  box-shadow: 0 15px 35px rgba(212, 175, 55, 0.15);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.badge {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 400;
  color: var(--gold);
  opacity: 0.4;
  line-height: 1;
  transition: opacity 0.4s ease;
}

.service-card:hover .badge {
  opacity: 0.8;
}

.service-icon {
  font-size: 2rem;
  color: var(--gold);
  font-weight: 100; /* Line-weight icon */
  opacity: 0.8;
}

.card-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--soft-white);
  letter-spacing: 1px;
}

.card-desc {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(245, 245, 245, 0.75);
  font-weight: 300;
  /* 2-3 lines max via line-clamp */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cta-link {
  margin-top: auto;
  align-self: flex-start;
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
}

.cta-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 400;
}

/* CTA Underline Animation */
.cta-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--gold);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.service-card:hover .cta-link::after,
.cta-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.dashed-divider {
  width: 100%;
  border-top: 1px dashed rgba(212, 175, 55, 0.5);
  margin: 0 auto;
}

@media (min-width: 992px) {
  .dashed-divider {
    width: 0;
    border-top: none;
    border-left: 1px dashed rgba(212, 175, 55, 0.5);
    height: 100%;
    margin: 0;
  }
}
</style>
