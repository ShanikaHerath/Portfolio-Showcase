<template>
  <div class="works-section fade-in" style="animation-delay: 0.4s;">
    <h2 class="section-title font-serif">Publications</h2>
    
    <van-swipe class="works-swipe" :loop="false" :width="280" :show-indicators="false">
      <van-swipe-item v-for="(book, index) in books" :key="index">
        <div class="book-card glass">
          <div class="book-cover-container">
            <van-image
              width="100%"
              height="180"
              :src="book.cover"
              fit="cover"
              class="book-cover"
            />
            <div class="book-overlay">
              <van-button size="small" type="primary" round plain class="read-btn">Read More</van-button>
            </div>
          </div>
          <div class="book-info">
            <h3 class="font-serif">{{ book.title }}</h3>
            <p class="book-desc">{{ book.desc }}</p>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const books = ref([
  {
    title: 'The Tell-Tale Heart',
    desc: 'A psychological thriller of guilt and madness.',
    cover: 'https://images.unsplash.com/photo-1587876931599-7f722ceec8cc?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'The Raven',
    desc: 'A narrative poem of a talking raven\'s mysterious visit.',
    cover: 'https://images.unsplash.com/photo-1544257121-72922dd81f08?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'The Fall of the House of Usher',
    desc: 'A tale of a decaying family mansion and its inhabitants.',
    cover: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&w=400&q=80'
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

.book-card {
  margin-right: 15px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.book-cover-container {
  position: relative;
  overflow: hidden;
}

.book-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.book-card:hover .book-overlay {
  opacity: 1;
}

.book-info {
  padding: 1rem;
  flex: 1;
}

.book-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: var(--text-primary);
}

.book-desc {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.4;
}
</style>
