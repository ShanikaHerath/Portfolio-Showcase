<template>
  <div class="footer-section fade-in" style="animation-delay: 0.8s;">
    <h2 class="section-title font-serif">Let's Connect</h2>
    <p class="contact-desc">Available for freelance opportunities and collaborations.</p>
    
    <div class="social-links">
      <van-button icon="envelop-o" type="default" round plain class="social-btn glass" @click="contactEmail">Email Me</van-button>
      <van-button icon="share-o" type="default" round plain class="social-btn glass" @click="showShare = true">Network</van-button>
    </div>

    <van-share-sheet
      v-model:show="showShare"
      title="Connect with me"
      :options="shareOptions"
      @select="onShareSelect"
    />

    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Generic Profile Template. All rights reserved.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';

const showShare = ref(false);
const shareOptions = [
  { name: 'LinkedIn', icon: 'link' },
  { name: 'GitHub', icon: 'weapp-qrcode' }, // Using weapp-qrcode as a generic dev icon substitute
  { name: 'Twitter', icon: 'twitter' }
];

const contactEmail = () => {
  showToast('Opening email client...');
  setTimeout(() => {
    window.location.href = 'mailto:hello@example.com';
  }, 1000);
};

const onShareSelect = (option) => {
  showToast(`Redirecting to ${option.name}...`);
  showShare.value = false;
};
</script>

<style scoped>
.footer-section {
  padding: 0 1rem 2rem 1rem;
  text-align: center;
}

.section-title {
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.contact-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.social-btn {
  width: 120px;
}

.footer-bottom {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.8rem;
  color: var(--text-secondary);
}
</style>
