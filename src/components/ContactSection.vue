<template>
  <section id="contact" class="contact-section">
    <div class="content-container">
      
      <div class="section-header" v-reveal>
        <h2 class="heading">Inquire</h2>
        <div class="gold-line"></div>
      </div>
      
      <div class="form-wrapper" v-reveal>
        <transition name="fade-slide" mode="out-in">
          
          <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="luxury-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                placeholder="Your full name" 
                @input="clearError('name')" 
              />
              <span class="error-msg" v-if="errors.name">{{ errors.name }}</span>
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                placeholder="Your email address" 
                @input="clearError('email')" 
              />
              <span class="error-msg" v-if="errors.email">{{ errors.email }}</span>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <div class="textarea-wrapper">
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  placeholder="How can we help you?" 
                  @input="clearError('message')" 
                  maxlength="500"
                ></textarea>
                <span class="char-counter">{{ form.message.length }} / 500</span>
              </div>
              <span class="error-msg" v-if="errors.message">{{ errors.message }}</span>
            </div>
            
            <div class="submit-wrapper">
              <button type="submit" class="submit-btn" v-ripple>
                <span>Send Inquiry</span>
              </button>
            </div>
          </form>
          
          <div v-else class="success-message">
            <van-icon name="checked" class="success-icon" />
            <h3 class="success-title">Message Received</h3>
            <p class="success-desc">Thank you for your inquiry. Our team will review your message and contact you shortly.</p>
          </div>
          
        </transition>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isSubmitted = ref(false)
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const clearError = (field) => {
  errors[field] = ''
}

const handleSubmit = () => {
  let isValid = true
  
  if (!form.name.trim()) {
    errors.name = 'Name is required.'
    isValid = false
  }
  
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
    isValid = false
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Please provide a valid email address.'
    isValid = false
  }
  
  if (!form.message.trim()) {
    errors.message = 'Message is required.'
    isValid = false
  }
  
  if (isValid) {
    // Simulate a network request
    setTimeout(() => {
      isSubmitted.value = true
    }, 600)
  }
}
</script>

<style scoped>
.contact-section {
  width: 100vw;
  padding: 8rem 2rem;
  background-color: var(--navy);
  position: relative;
  display: flex;
  justify-content: center;
}

.content-container {
  width: 100%;
  max-width: 600px; /* Single column, focused design */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.heading {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  letter-spacing: 4px;
  color: var(--soft-white);
  text-transform: uppercase;
  font-weight: 400;
}

.gold-line {
  width: 40px;
  height: 1px;
  background-color: var(--gold);
}

.form-wrapper {
  width: 100%;
  min-height: 450px; /* Prevents layout shift during transition */
}

.luxury-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  /* Form spacing: 20px between fields */
  margin-bottom: 20px;
  position: relative;
}

label {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: rgba(245, 245, 245, 0.6);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8px;
}

input, textarea {
  /* No visible box around inputs—border only at bottom */
  background: transparent;
  border: none;
  /* Gold bottom border (2px) */
  border-bottom: 2px solid rgba(212, 175, 55, 0.4);
  color: var(--soft-white);
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  padding: 10px 0;
  outline: none;
  transition: all 0.3s ease;
  width: 100%;
}

textarea {
  /* Minimum height 120px */
  min-height: 120px;
  resize: vertical;
}

input::placeholder, textarea::placeholder {
  /* Very light gray, elegant font */
  color: rgba(245, 245, 245, 0.2);
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.1rem;
}

/* Focus state: Gold border becomes brighter, subtle gold glow */
input:focus, textarea:focus {
  border-bottom-color: var(--gold);
  box-shadow: 0 8px 15px -8px rgba(212, 175, 55, 0.5);
}

.textarea-wrapper {
  position: relative;
  width: 100%;
}

.char-counter {
  position: absolute;
  /* Placed right below the line, slightly offset to avoid overlapping the line */
  bottom: -22px; 
  right: 0;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: rgba(245, 245, 245, 0.4);
}

/* Inline validation in gold text below field */
.error-msg {
  color: var(--gold);
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  margin-top: 6px;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

.submit-wrapper {
  /* Form spacing: 30px before submit */
  margin-top: 30px;
}

.submit-btn {
  /* Gold background (#d4af37), white text */
  background-color: var(--gold);
  color: #ffffff;
  border: 1px solid var(--gold);
  /* Large padding (16px 32px) */
  padding: 16px 32px;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease;
  width: 100%;
}

/* Button hover: Slight darken effect or white border on gold background */
.submit-btn:hover {
  background-color: #bfa132; /* Slightly darkened gold */
  border: 1px solid #ffffff;
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
}

/* Success Message: Fade + slide up */
.success-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  padding: 4rem 2rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 4px;
  backdrop-filter: blur(10px);
}

.success-icon {
  font-size: 4rem;
  color: var(--gold);
}

.success-title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: var(--soft-white);
  font-weight: 400;
}

.success-desc {
  font-family: 'Inter', sans-serif;
  line-height: 1.8;
  color: rgba(245, 245, 245, 0.8);
  font-weight: 300;
}

/* Transition classes */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
