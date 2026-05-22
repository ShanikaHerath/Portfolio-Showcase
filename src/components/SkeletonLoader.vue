<template>
  <div class="skeleton-wrapper" :class="{ 'is-loaded': loaded }">
    <div v-if="!loaded" class="skeleton-pulse" :style="{ width: width, height: height, borderRadius: borderRadius }"></div>
    <div class="content" :class="{ 'hidden': !loaded }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  loaded: {
    type: Boolean,
    default: true
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
  borderRadius: {
    type: String,
    default: '4px'
  }
})
</script>

<style scoped>
.skeleton-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.skeleton-pulse {
  background: linear-gradient(90deg, rgba(212, 175, 55, 0.05) 25%, rgba(212, 175, 55, 0.15) 50%, rgba(212, 175, 55, 0.05) 75%);
  background-size: 200% 100%;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.content {
  opacity: 1;
  transition: opacity var(--luxury-timing);
}

.content.hidden {
  opacity: 0;
  position: absolute;
  pointer-events: none;
}
</style>
