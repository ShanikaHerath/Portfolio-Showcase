<template>
  <header class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="navbar-content">
      <div class="logo">
        Sinclair
      </div>
      
      <button class="hamburger" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }" aria-label="Toggle menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>

    <!-- Slide-in Menu -->
    <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
      <nav class="menu-nav">
        <a href="#" class="menu-link active" @click="closeMenu">Home</a>
        <div class="divider"></div>
        <a href="#portfolio" class="menu-link" @click="closeMenu">Portfolio</a>
        <div class="divider"></div>
        <a href="#services" class="menu-link" @click="closeMenu">Services</a>
        <div class="divider"></div>
        <a href="#about" class="menu-link" @click="closeMenu">About</a>
        <div class="divider"></div>
        <a href="#contact" class="menu-link" @click="closeMenu">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Prevent body scroll when menu is open
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  if (window.scrollY > 20) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.4s ease;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(10, 22, 40, 0.75);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: relative;
  z-index: 1001; /* Keeps logo and hamburger above the menu background */
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  color: var(--soft-white);
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.4s ease;
}

/* Subtle animation on scroll */
.navbar.scrolled .logo {
  font-size: 1.4rem;
  color: var(--gold);
}

.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 24px;
  padding: 0;
  z-index: 1001;
}

.bar {
  width: 100%;
  height: 2px;
  background-color: var(--soft-white);
  transition: all 0.4s ease-in-out;
  border-radius: 2px;
}

.navbar.scrolled .bar {
  background-color: var(--gold);
}

/* Hamburger to X animation */
.hamburger.is-active .bar:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
  background-color: var(--gold);
}
.hamburger.is-active .bar:nth-child(2) {
  opacity: 0;
}
.hamburger.is-active .bar:nth-child(3) {
  transform: translateY(-11px) rotate(-45deg);
  background-color: var(--gold);
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(10, 22, 40, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 1000;
}

.mobile-menu.is-open {
  transform: translateY(0);
}

.menu-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

.menu-link {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--soft-white);
  text-decoration: none;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 1.2rem 0;
  min-height: 48px; /* Large touch target */
  display: flex;
  align-items: center;
  position: relative;
  transition: color 0.4s ease;
}

.menu-link:hover, .menu-link.active {
  color: var(--gold);
}

/* Active link indicator - Gold underline with slide animation */
.menu-link::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.menu-link:hover::after, .menu-link.active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.divider {
  width: 30px;
  height: 1px;
  background-color: rgba(212, 175, 55, 0.4); /* Subtle gold divider */
  margin: 0.5rem 0;
}
</style>
