<template>
  <section id="stats" class="stats-section">
    <div class="content-container">
      <div class="stats-grid">
        <div class="stat-item" v-for="(stat, index) in stats" :key="index" v-reveal>
          <h3 class="stat-number">
            <span :ref="el => counters[index] = el" :data-target="stat.value">0</span>{{ stat.suffix }}
          </h3>
          <p class="stat-label">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stats = [
  { value: 12, suffix: '+', label: 'Years Experience' },
  { value: 85, suffix: '', label: 'Projects Completed' },
  { value: 14, suffix: '', label: 'Design Awards' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' }
]

const counters = ref([])
let observer = null

const animateValue = (obj, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    // ease-out cubic
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    obj.innerHTML = Math.floor(easeOutCubic * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.innerHTML = end;
    }
  };
  window.requestAnimationFrame(step);
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'), 10)
        animateValue(entry.target, 0, target, 2000)
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })

  counters.value.forEach(counter => {
    if (counter) observer.observe(counter)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.stats-section {
  width: 100%;
  padding: 6rem 2rem;
  background-color: var(--navy);
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem 2rem;
  text-align: center;
}

@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 400;
  color: var(--gold);
  line-height: 1;
}

.stat-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(245, 245, 245, 0.7);
}
</style>
