<template>
  <div class="stats-section fade-in" style="animation-delay: 0.6s;">
    <van-grid :border="false" :column-num="3" :gutter="10">
      <van-grid-item class="stat-item glass">
        <div class="stat-content">
          <van-icon name="award-o" size="24" color="var(--accent-color)" />
          <h4>4</h4>
          <p>Awards</p>
        </div>
      </van-grid-item>
      <van-grid-item class="stat-item glass">
        <div class="stat-content">
          <van-icon name="fire-o" size="24" color="var(--accent-color)" />
          <h4>10k+</h4>
          <p>Readers</p>
        </div>
      </van-grid-item>
      <van-grid-item class="stat-item glass">
        <div class="stat-content">
          <van-icon name="smile-o" size="24" color="var(--accent-color)" />
          <h4>402</h4>
          <p>Coffees</p>
        </div>
      </van-grid-item>
    </van-grid>

    <div class="quote-generator glass">
      <div class="quote-content">
        <van-icon name="quotes-left" class="quote-icon" />
        <p class="quote-text font-serif">"{{ currentQuote }}"</p>
      </div>
      <van-button size="small" type="primary" plain round @click="generateQuote" class="generate-btn">
        Another Whisper
      </van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const quotes = [
  "Words have no power to impress the mind without the exquisite horror of their reality.",
  "All that we see or seem is but a dream within a dream.",
  "I became insane, with long intervals of horrible sanity.",
  "Never to suffer would never to have been blessed.",
  "Deep into that darkness peering, long I stood there, wondering, fearing..."
];

const currentQuote = ref(quotes[0]);

const generateQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  currentQuote.value = quotes[randomIndex];
};
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

.quote-generator {
  margin-top: 1.5rem;
  padding: 1.5rem;
  text-align: center;
  position: relative;
}

.quote-icon {
  font-size: 2rem;
  color: var(--border-color);
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.quote-text {
  font-size: 1.1rem;
  color: var(--text-primary);
  font-style: italic;
  margin: 1rem 0;
  min-height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.generate-btn {
  margin-top: 0.5rem;
}
</style>
