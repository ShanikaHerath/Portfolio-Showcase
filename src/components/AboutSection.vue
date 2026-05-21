<template>
  <div class="about-section glass fade-in" style="animation-delay: 0.2s;">
    <h2 class="section-title font-serif">The Journey</h2>
    <div class="bio-text">
      <p>
        I am a weaver of words, lost in the labyrinth of dark fantasy and psychological thrillers. 
        My ink flows with the tears of forgotten ghosts and the whispers of midnight winds.
      </p>
    </div>
    
    <div class="timeline-container">
      <van-steps direction="vertical" :active="2" active-color="var(--accent-color)">
        <van-step>
          <h3 class="font-serif">The First Whisper</h3>
          <p>Published first short story in "Midnight Tales"</p>
          <span class="year">2015</span>
        </van-step>
        <van-step>
          <h3 class="font-serif">The Raven's Call</h3>
          <p>Debut novel hit the bestseller lists</p>
          <span class="year">2018</span>
        </van-step>
        <van-step>
          <h3 class="font-serif">Echoes in the Dark</h3>
          <p>Latest masterpiece currently sweeping the globe</p>
          <span class="year">2023</span>
        </van-step>
      </van-steps>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-section {
  padding: 2rem;
  margin: 1rem 1rem 2rem 1rem;
}

.section-title {
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
}

.bio-text {
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.timeline-container h3 {
  margin: 0 0 0.25rem 0;
  color: var(--text-primary);
}

.timeline-container p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.year {
  display: block;
  font-size: 0.8rem;
  color: var(--accent-color);
  margin-top: 0.25rem;
  font-weight: 600;
}
</style>
