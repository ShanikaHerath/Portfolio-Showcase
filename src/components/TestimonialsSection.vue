<template>
  <section id="testimonials" class="testimonials-section">
    <div class="noise-bg"></div>
    <div class="content-container">
      
      <div class="section-header" v-reveal>
        <h2 class="heading">Client Words</h2>
        <div class="gold-line"></div>
      </div>
      
      <div class="carousel-container" v-reveal>
        <transition-group name="fade">
          <div 
            v-for="(t, index) in testimonials" 
            :key="t.id"
            v-show="currentIndex === index"
            class="testimonial-wrapper"
          >
            <div 
              class="card-gradient-border"
              :style="{ background: `linear-gradient(${t.gradientDir}, rgba(212,175,55,0.8), transparent 70%)` }"
            >
              <div class="testimonial-card">
                <div class="stars">
                  <van-icon name="star" class="star-icon" v-for="n in 5" :key="n" />
                </div>
                
                <blockquote class="quote">"{{ t.quote }}"</blockquote>
                
                <div class="author-info">
                  <img :src="t.photo" :alt="t.name" class="author-photo" />
                  <div class="author-text">
                    <span class="author-name">{{ t.name }}</span>
                    <span class="author-role">{{ t.role }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
      
      <div class="cta-wrapper" v-reveal>
        <a href="#" class="cta-link">
          <span class="cta-text">See All Reviews</span>
        </a>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const testimonials = [
  {
    id: 1,
    quote: "Evelyn possesses an exceedingly rare combination of visionary creativity and meticulous execution. The digital experience she crafted elevated our entire brand presence.",
    name: "Eleanor Vance",
    role: "CEO, Vance Atelier",
    photo: "https://i.pravatar.cc/150?u=eleanor",
    gradientDir: "135deg" // Top-left to bottom-right
  },
  {
    id: 2,
    quote: "Working with Sinclair was a revelation. The attention to spacing, typography, and interaction resulted in a final product that simply exudes luxury.",
    name: "James Sterling",
    role: "Founder, Sterling & Co.",
    photo: "https://i.pravatar.cc/150?u=james",
    gradientDir: "225deg" // Top-right to bottom-left
  },
  {
    id: 3,
    quote: "A masterclass in modern minimalism. Our conversion rates have doubled, not by shouting at the user, but by whispering elegantly in their ear.",
    name: "Sophia Laurent",
    role: "Director, Laurent Boutique",
    photo: "https://i.pravatar.cc/150?u=sophia",
    gradientDir: "45deg" // Bottom-left to top-right
  }
]

const currentIndex = ref(0)
let timer = null

onMounted(() => {
  // Rotation: Every 6 seconds
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length
  }, 6000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.testimonials-section {
  width: 100%;
  padding: 8rem 0;
  /* Slightly darker background to contrast with cards */
  background-color: #060b14;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

/* Background: Dark with subtle texture (noise pattern, very faint) */
.noise-bg {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}

.content-container {
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.heading {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  letter-spacing: 4px;
  color: var(--soft-white);
  text-transform: uppercase;
  font-weight: 400;
}

.gold-line {
  width: 40px;
  height: 1px;
  background-color: var(--gold);
}

.carousel-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  min-height: 420px;
  margin: 0 auto;
}

.testimonial-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* Card spacing: Generous margins (24px all around) */
  padding: 24px;
}

.card-gradient-border {
  /* Thin 1px padding acts as the gradient border */
  padding: 1px;
  border-radius: 4px;
}

.testimonial-card {
  background-color: rgba(10, 22, 40, 0.95);
  backdrop-filter: blur(10px);
  padding: 3.5rem 3rem;
  border-radius: 3px;
  /* Add a gold accent line on left side (4px width) of each card */
  border-left: 4px solid var(--gold);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stars {
  display: flex;
  gap: 0.5rem;
}

.star-icon {
  color: var(--gold);
  font-size: 1.2rem;
}

.quote {
  /* Quote in serif font (italic, 1.2x larger than body) */
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.4rem; /* Assuming 1.1rem body, this is ~1.2x */
  line-height: 1.7;
  color: var(--soft-white);
  margin: 0;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 1rem;
}

.author-photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(212, 175, 55, 0.4);
}

.author-text {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.author-name {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--soft-white);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.author-role {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 300;
  color: rgba(245, 245, 245, 0.6);
  letter-spacing: 1px;
}

/* Fade Transition (not slide, 1s duration) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.cta-wrapper {
  margin-top: 1rem;
  text-align: center;
}

.cta-link {
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
}

.cta-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 400;
  transition: color 0.3s ease;
}

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

.cta-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

@media (max-width: 768px) {
  .carousel-container {
    min-height: 480px;
  }
  
  .testimonial-card {
    padding: 2.5rem 1.5rem;
  }
  
  .quote {
    font-size: 1.25rem;
  }
}
</style>
