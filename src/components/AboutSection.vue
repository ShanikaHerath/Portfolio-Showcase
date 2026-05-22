<template>
  <section id="about" class="about-section">
    <div class="content-container">
      
      <!-- Text Side (60%) -->
      <div class="text-side">
        <div class="section-header" v-reveal>
          <div class="gold-line"></div>
          <h2 class="heading">The Philosophy</h2>
        </div>
        
        <blockquote class="pull-quote" v-reveal>
          "Elegance is not about being noticed, it's about being remembered."
        </blockquote>
        
        <div class="text-blocks" v-reveal>
          <p class="body-text">
            I am a visionary creative director specializing in high-end digital experiences. With a profound appreciation for bespoke design, my philosophy centers on the seamless integration of pristine aesthetics and intuitive function.
          </p>
          <p class="body-text">
            Every project is an intimate journey—a delicate balance of space, light, and typography designed to captivate and endure. My work reflects an unwavering commitment to quality and a passion for refined minimalism.
          </p>
        </div>
        
        <div class="gold-divider" v-reveal></div>
        
        <div class="icon-set" v-reveal>
          <div class="icon-item">
            <van-icon name="gem-o" class="luxury-icon" />
            <span>Refined</span>
          </div>
          <div class="icon-item">
            <van-icon name="brush-o" class="luxury-icon" />
            <span>Bespoke</span>
          </div>
          <div class="icon-item">
            <van-icon name="award-o" class="luxury-icon" />
            <span>Excellence</span>
          </div>
        </div>
      </div>
      
      <!-- Decorative Side (40%) -->
      <div class="decorative-side">
        <div class="abstract-shape" v-reveal>
          <div class="geometric-pattern"></div>
          <div class="gold-gradient-overlay"></div>
          <div class="accent-circle"></div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-section {
  width: 100vw;
  /* Empty space strategy: very generous padding */
  padding: 10rem 2rem;
  background-color: var(--navy);
  position: relative;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column; /* Mobile stacked by default */
  gap: 6rem;
}

@media (min-width: 992px) {
  .content-container {
    flex-direction: row;
    align-items: center;
    gap: 5rem;
  }
}

.text-side {
  flex: 0 0 60%;
  display: flex;
  flex-direction: column;
  /* Margin/padding ratio focus */
  gap: 3rem;
}

.section-header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.gold-line {
  width: 60px;
  height: 1px;
  background-color: var(--gold);
}

.heading {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  letter-spacing: 5px;
  color: var(--soft-white);
  text-transform: uppercase;
  font-weight: 300;
}

.pull-quote {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.4rem;
  color: var(--gold);
  border-left: 2px solid var(--gold);
  padding-left: 2rem;
  margin: 0;
  line-height: 1.6;
  letter-spacing: 1px;
}

.text-blocks {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.body-text {
  font-family: 'Inter', sans-serif;
  line-height: 1.9;
  text-align: justify;
  color: rgba(245, 245, 245, 0.85);
  font-weight: 300;
  font-size: 1.05rem;
  letter-spacing: 0.5px;
}

.gold-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, rgba(212, 175, 55, 0.4), transparent);
  margin: 1rem 0;
}

.icon-set {
  display: flex;
  gap: 3rem;
  justify-content: flex-start;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(245, 245, 245, 0.6);
}

.luxury-icon {
  font-size: 1.8rem;
  color: var(--gold);
  opacity: 0.9;
}

.decorative-side {
  flex: 0 0 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.abstract-shape {
  width: 100%;
  max-width: 340px;
  aspect-ratio: 3 / 4;
  position: relative;
  /* Elegant arch shape */
  border-radius: 170px 170px 0 0;
  border: 1px solid rgba(212, 175, 55, 0.2);
  background: rgba(255, 255, 255, 0.015);
  overflow: hidden;
  box-shadow: var(--shadow-luxury);
}

.geometric-pattern {
  position: absolute;
  inset: 0;
  /* Thin grid pattern */
  background-image: 
    linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.5;
}

.gold-gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(212, 175, 55, 0.6) 0%, transparent 60%);
  mix-blend-mode: overlay;
}

.accent-circle {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
  filter: blur(10px);
}

@media (max-width: 768px) {
  .about-section {
    padding: 6rem 1.5rem;
  }
  
  .heading {
    font-size: 2rem;
  }
  
  .pull-quote {
    font-size: 1.25rem;
    padding-left: 1.5rem;
  }
  
  .icon-set {
    gap: 2rem;
  }
  
  .abstract-shape {
    max-width: 280px;
  }
}
</style>
