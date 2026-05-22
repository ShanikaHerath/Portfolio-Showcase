<template>
  <section id="portfolio" class="portfolio-section">
    <div class="section-header" v-reveal>
      <h2 class="heading">Selected Works</h2>
      <p class="subheading">A glimpse into our meticulously crafted portfolio.</p>
    </div>
    
    <div class="works-container">
      <div 
        v-for="(project, index) in projects" 
        :key="index"
        class="project-card-wrapper"
        v-reveal
      >
        <div 
          class="project-card" 
          @mouseenter="project.hovered = true" 
          @mouseleave="project.hovered = false"
        >
          
          <div class="image-container" ref="imageContainers">
            
            <div class="parallax-wrapper">
            <picture>
              <source :srcset="project.image" type="image/webp">
              <source :srcset="project.image.replace('.webp', '.png')" type="image/png">
              <img 
                :src="project.image.replace('.webp', '.png')" 
                :alt="project.title" 
                class="parallax-img" 
                :class="{ 'is-hovered': project.hovered }" 
                v-image-reveal
                loading="lazy"
                decoding="async"
                width="800"
                height="450"
              />
            </picture>
            </div>
            
            <div class="overlay" :class="{ 'is-hovered': project.hovered }">
              <div class="text-content">
                <div class="gold-line" :class="{ 'animate-in': project.inView }"></div>
                <span class="category">{{ project.category }}</span>
                <h3 class="title">{{ project.title }}</h3>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const projects = ref([
  { 
    title: 'Aura Residences', 
    category: 'Interior Architecture', 
    image: '/portfolio_1.webp', 
    hovered: false, 
    inView: false 
  },
  { 
    title: 'Chrono Horizon', 
    category: 'Product Design', 
    image: '/portfolio_2.webp', 
    hovered: false, 
    inView: false 
  }
])

const imageContainers = ref([])
let observer = null

const handleScroll = () => {
  if (!imageContainers.value) return
  
  imageContainers.value.forEach(container => {
    if (!container) return
    const rect = container.getBoundingClientRect()
    const wrapper = container.querySelector('.parallax-wrapper')
    
    if (wrapper) {
      // Calculate offset based on distance from center of viewport
      const yOffset = (rect.top - window.innerHeight / 2) * 0.15
      // Apply translation directly via JS (no CSS transition to avoid jitter)
      wrapper.style.transform = `translate3d(0, ${yOffset}px, 0)`
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  // Trigger once to set initial positions
  handleScroll()
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = imageContainers.value.findIndex(el => el === entry.target)
        if (index !== -1) {
          projects.value[index].inView = true
        }
      }
    })
  }, { threshold: 0.3 })
  
  imageContainers.value.forEach(el => observer.observe(el))
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.portfolio-section {
  width: 100vw;
  padding: 8rem 0; /* Vertical padding, horizontal handled by wrappers */
  background-color: var(--navy);
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 2rem;
}

.heading {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  letter-spacing: 4px;
  color: var(--soft-white);
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 1rem;
}

.subheading {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  color: rgba(245, 245, 245, 0.7);
  letter-spacing: 1px;
}

.works-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-card-wrapper {
  /* Spacing: Cards have breathing room, 16px padding around */
  padding: 16px;
  width: 100%;
}

.project-card {
  width: 100%;
  cursor: pointer;
}

.image-container {
  width: 100%;
  /* Image aspect ratio: 16:9 maintained responsively */
  aspect-ratio: 16 / 9;
  position: relative;
  overflow: hidden;
  /* Uncommon styling: Image corners have subtle rounded borders (8px) */
  border-radius: 8px;
  box-shadow: var(--shadow-luxury);
  background-color: #000; /* Fallback */
}

/* 
  Wrapper handles the parallax translate.
  It's taller than the container to prevent empty gaps when translated.
*/
.parallax-wrapper {
  position: absolute;
  top: -15%;
  left: 0;
  width: 100%;
  height: 130%;
  will-change: transform;
  /* No transition here so scroll follows exactly without lag */
}

/* Image handles the hover zoom */
.parallax-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Add subtle transition duration (0.6s ease-out) */
  transition: transform 0.6s ease-out;
  transform: scale(1);
}

.parallax-img.is-hovered {
  /* Image zoom (1.02x) */
  transform: scale(1.02);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  /* Text overlay: Positioned at bottom with semi-transparent dark background */
  background: linear-gradient(to top, rgba(10, 22, 40, 0.95) 0%, rgba(10, 22, 40, 0.6) 40%, transparent 100%);
  display: flex;
  align-items: flex-end;
  padding: 2.5rem;
  /* Overlay opacity shift */
  opacity: 0.85;
  transition: opacity 0.6s ease-out;
}

.overlay.is-hovered {
  opacity: 1;
}

.text-content {
  display: flex;
  flex-direction: column;
}

.gold-line {
  width: 0;
  height: 1px;
  background-color: var(--gold);
  margin-bottom: 1.2rem;
  /* Thin gold line above project title (animated on scroll into view) */
  transition: width 1s cubic-bezier(0.19, 1, 0.22, 1);
}

.gold-line.animate-in {
  width: 80px;
}

.category {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.title {
  font-family: 'Playfair Display', serif;
  font-size: 2.4rem;
  color: var(--soft-white);
  letter-spacing: 1px;
  font-weight: 400;
  text-shadow: 0 4px 10px rgba(0,0,0,0.5);
}

@media (max-width: 768px) {
  .overlay {
    padding: 1.5rem;
  }
  
  .title {
    font-size: 1.8rem;
  }
  
  .category {
    font-size: 0.75rem;
  }
  
  .gold-line.animate-in {
    width: 50px;
  }
}
</style>
