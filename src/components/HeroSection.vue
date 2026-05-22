<template>
  <section class="hero-container" @mousemove="handleMouseMove" ref="heroSection">
    <div class="background-animation"></div>
    
    <div class="content-wrapper">
      <div class="profile-container" v-reveal>
        <div class="image-frame" :style="magneticStyle">
          <img src="/profile.webp" alt="Profile" class="profile-image" />
        </div>
      </div>
      
      <div class="text-content" v-reveal>
        <h1 class="title">Evelyn Sinclair</h1>
        <p class="subtitle">Creative Director</p>
      </div>
      
      <div class="glass-card" v-reveal>
        <p class="card-text">
          Crafting exquisite digital experiences that blend timeless elegance with modern functionality.
        </p>
        <van-button class="cta-button" type="primary" round block v-ripple>
          <span class="cta-text">View Portfolio</span>
        </van-button>
      </div>
    </div>
    
    <div class="scroll-indicator" v-reveal>
      <van-icon name="arrow-down" class="animated-arrow" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const heroSection = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (e) => {
  if (!heroSection.value) return
  const rect = heroSection.value.getBoundingClientRect()
  
  // Calculate relative mouse position (-1 to 1)
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  
  mouseX.value = x
  mouseY.value = y
}

// Very subtle max 10px movement
const magneticStyle = computed(() => {
  return {
    transform: `translate(${mouseX.value * 20}px, ${mouseY.value * 20}px)`,
    transition: 'transform 0.1s ease-out'
  }
})
</script>

<style scoped>
.hero-container {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #0a1628 0%, #1a0b2e 50%, #000000 100%);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 60%);
  pointer-events: none;
}

.content-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 2rem;
}

.profile-container {
  margin-top: 1rem;
}

.image-frame {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, var(--gold), rgba(212, 175, 55, 0.2));
  box-shadow: var(--shadow-luxury), 0 0 25px rgba(212, 175, 55, 0.2);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid var(--navy);
}

.text-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title {
  font-size: 2.8rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: var(--soft-white);
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 4px;
  color: rgba(245, 245, 245, 0.8);
  text-transform: uppercase;
}

.glass-card {
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 3rem 2rem;
  box-shadow: var(--shadow-luxury);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.card-text {
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: center;
  color: rgba(245, 245, 245, 0.95);
  font-weight: 300;
}

:deep(.cta-button) {
  background: transparent !important;
  border: 1px solid var(--gold) !important;
  height: 56px !important;
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease !important;
}

:deep(.cta-button)::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;
}

:deep(.cta-button:hover)::before,
:deep(.cta-button:active)::before {
  transform: scaleX(1);
  transform-origin: left;
}

:deep(.cta-button:hover),
:deep(.cta-button:active) {
  background-color: var(--gold-light) !important;
  border-color: var(--gold-light) !important;
  box-shadow: 0 0 25px rgba(212, 175, 55, 0.4) !important;
}

.cta-text {
  position: relative;
  z-index: 2;
  color: var(--gold);
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: color 0.4s ease;
}

:deep(.cta-button:hover) .cta-text,
:deep(.cta-button:active) .cta-text {
  color: var(--navy);
  font-weight: 500;
}

.scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--gold);
  font-size: 1.8rem;
  opacity: 0.8;
}

.animated-arrow {
  animation: bounce 2s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-12px); }
  60% { transform: translateY(-6px); }
}

@media (max-width: 380px) {
  .title { font-size: 2.4rem; }
  .image-frame { width: 140px; height: 140px; }
  .glass-card { padding: 2.5rem 1.5rem; }
}
</style>
