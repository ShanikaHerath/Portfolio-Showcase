<template>
  <div class="works-section fade-in" style="animation-delay: 0.4s;">
    <h2 class="section-title font-serif">Featured Projects</h2>
    
    <van-swipe class="works-swipe" :loop="false" :width="280" :show-indicators="false">
      <van-swipe-item v-for="(project, index) in projects" :key="index">
        <div class="project-card glass">
          <div class="project-cover-container">
            <van-image
              width="100%"
              height="180"
              :src="project.cover"
              fit="cover"
              class="project-cover"
            />
            <div class="project-overlay">
              <van-button size="small" type="primary" round plain class="view-btn">View Details</van-button>
            </div>
          </div>
          <div class="project-info">
            <h3 class="font-serif">{{ project.title }}</h3>
            <p class="project-desc">{{ project.desc }}</p>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    title: 'E-Commerce Dashboard',
    desc: 'A comprehensive analytics dashboard for modern retailers.',
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Fintech Mobile App',
    desc: 'Seamless and secure mobile banking experience design.',
    cover: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Creative Agency Website',
    desc: 'A stunning, high-performance landing page for a creative agency.',
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80'
  }
]);
</script>

<style scoped>
.works-section {
  padding: 0 1rem 2rem 1rem;
}

.section-title {
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
}

.works-swipe {
  padding-bottom: 1rem;
}

.project-card {
  margin-right: 15px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-cover-container {
  position: relative;
  overflow: hidden;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-info {
  padding: 1rem;
  flex: 1;
}

.project-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: var(--text-primary);
}

.project-desc {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.4;
}
</style>
