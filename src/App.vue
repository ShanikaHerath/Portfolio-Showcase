<script setup>
import { ref, onMounted } from 'vue';
import HeaderSection from './components/HeaderSection.vue';
import AboutSection from './components/AboutSection.vue';
import WorksSection from './components/WorksSection.vue';
import CreativeStats from './components/CreativeStats.vue';
import FooterContact from './components/FooterContact.vue';

const isLightMode = ref(false);

const toggleTheme = () => {
  isLightMode.value = !isLightMode.value;
  if (isLightMode.value) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
};

onMounted(() => {
  // Ensure default is dark mode
  document.body.classList.remove('light-mode');
});
</script>

<template>
  <div class="app-container">
    <HeaderSection :isLightMode="isLightMode" @toggle-theme="toggleTheme" />
    <AboutSection />
    <WorksSection />
    <CreativeStats />
    <FooterContact />
  </div>
</template>

<style scoped>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  overflow-x: hidden;
}
</style>
