<template>
  <div class="stats-section fade-in" style="animation-delay: 0.6s;">
    <van-grid :border="false" :column-num="3" :gutter="10">
      <van-grid-item class="stat-item glass">
        <div class="stat-content">
          <van-icon name="chart-trending-o" size="24" color="var(--accent-color)" />
          <h4>5+</h4>
          <p>Years Exp</p>
        </div>
      </van-grid-item>
      <van-grid-item class="stat-item glass">
        <div class="stat-content">
          <van-icon name="apps-o" size="24" color="var(--accent-color)" />
          <h4>50+</h4>
          <p>Projects</p>
        </div>
      </van-grid-item>
      <van-grid-item class="stat-item glass">
        <div class="stat-content">
          <van-icon name="smile-o" size="24" color="var(--accent-color)" />
          <h4>100%</h4>
          <p>Satisfaction</p>
        </div>
      </van-grid-item>
    </van-grid>

    <div class="skills-container glass">
      <h3 class="font-serif">Core Expertise</h3>
      <div class="skills-tags">
        <span class="skill-tag" v-for="(skill, index) in skills" :key="index">
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
  'Vue.js & React',
  'UI/UX Design',
  'Node.js',
  'TypeScript',
  'Tailwind CSS',
  'Figma',
  'Agile Workflow'
]);
</script>

<style scoped>
.stats-section {
  padding: 0 1rem 2rem 1rem;
}

.stat-item {
  border-radius: 12px;
  overflow: hidden;
}

.stat-content {
  text-align: center;
  padding: 0.5rem;
}

.stat-content h4 {
  margin: 0.5rem 0 0.25rem 0;
  font-size: 1.2rem;
  color: var(--text-primary);
}

.stat-content p {
  margin: 0;
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.skills-container {
  margin-top: 1.5rem;
  padding: 1.5rem;
  text-align: center;
}

.skills-container h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-size: 1.4rem;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.skill-tag {
  background-color: rgba(229, 9, 20, 0.1);
  color: var(--accent-color);
  border: 1px solid var(--accent-color);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background-color: var(--accent-color);
  color: #fff;
}
</style>
