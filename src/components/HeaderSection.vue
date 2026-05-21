<template>
  <div class="header-section fade-in">
    <van-nav-bar :border="false">
      <template #right>
        <van-icon :name="isLightMode ? 'moon-o' : 'sun-o'" size="20" @click="$emit('toggle-theme')" />
      </template>
    </van-nav-bar>
    
    <div class="profile-content">
      <div class="avatar-container">
        <!-- Using a placeholder image for avatar -->
        <van-image
          round
          width="120"
          height="120"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          fit="cover"
          class="avatar-img"
        />
      </div>
      
      <h1 class="author-name font-serif text-accent">E. A. Poe</h1>
      
      <div class="tagline-container">
        <p class="tagline typewriter">Whispering tales from the shadows...</p>
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
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
}

.author-name {
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.5px;
}

.tagline-container {
  display: inline-block;
}

.tagline {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-style: italic;
  margin: 0;
  display: inline-block;
}
</style>
