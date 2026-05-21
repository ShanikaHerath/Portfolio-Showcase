<template>
  <div class="header-section fade-in">
    <van-nav-bar :border="false">
      <template #right>
        <van-icon :name="isLightMode ? 'moon-o' : 'sun-o'" size="20" @click="$emit('toggle-theme')" />
      </template>
    </van-nav-bar>
    
    <div class="profile-content">
      <div class="avatar-container">
        <!-- Using a generic placeholder image for avatar -->
        <van-image
          round
          width="120"
          height="120"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
          fit="cover"
          class="avatar-img"
        />
      </div>
      
      <h1 class="author-name font-serif text-accent">Alex Morgan</h1>
      
      <div class="tagline-container">
        <p class="tagline typewriter">Creative Developer & Designer</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  isLightMode: Boolean
});
defineEmits(['toggle-theme']);
</script>

<style scoped>
.header-section {
  padding: 1rem;
  text-align: center;
  margin-bottom: 2rem;
}

.profile-content {
  margin-top: 2rem;
}

.avatar-container {
  display: inline-block;
  padding: 4px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-color), transparent);
  margin-bottom: 1.5rem;
}

.avatar-img {
  border: 2px solid var(--bg-color);
  box-shadow: 0 8px 16px rgba(229, 9, 20, 0.2);
}

.author-name {
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.5px;
  text-transform: uppercase;
}

.tagline-container {
  display: inline-block;
}

.tagline {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 300;
  margin: 0;
  display: inline-block;
  letter-spacing: 1px;
}
</style>
