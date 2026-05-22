# Shanika Herath (Shani) - Developer Portfolio

A modern, high-performance personal portfolio website showcasing my skills, projects, and professional journey as a Software Engineer. Built with **Vue 3**, **Vite**, and **Vant UI**, this portfolio emphasizes responsive design, clean aesthetics, and smooth animations.

---

## 🚀 Live Demo
*(https://portfolio-showcase-common.vercel.app/)*

## ✨ Features
* **Modern & Responsive UI**: Fully responsive across mobile, tablet, and desktop viewports, leveraging a mobile-first approach.
* **Component-Based Architecture**: Modular Vue 3 components (Hero, About, Works, Services, Testimonials, Contact, Footer, etc.) for high maintainability.
* **Performance Optimized**: Uses Vite for lightning-fast HMR and optimized production builds. Includes lazy-loading for images and efficient asset delivery.
* **Smooth Animations**: Incorporates scroll-triggered reveals, parallax image effects, and fluid CSS transitions for a premium feel.
* **Skeleton Loaders**: Custom skeleton loading states for a polished perceived performance experience.
* **Accessibility Focused**: Includes proper ARIA tags, high-contrast text rendering, and respects `prefers-reduced-motion` system settings.

## 🛠️ Tech Stack
* **Framework**: [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **UI Library**: [Vant 4](https://vant-ui.github.io/vant/)
* **Routing**: [Vue Router](https://router.vuejs.org/)
* **Icons**: FontAwesome & Vant Icons
* **Styling**: Vanilla CSS3 (Custom Properties / CSS Variables)

## 📁 Project Structure

```text
├── public/                   # Static assets (images, icons)
├── src/
│   ├── assets/               # Project-specific images and graphics
│   ├── components/           # Reusable Vue components
│   │   ├── NavigationBar.vue     # Top navigation with smooth scroll links
│   │   ├── HeroSection.vue       # Landing hero with profile and CTA
│   │   ├── AboutSection.vue      # About me, skills, and background
│   │   ├── CreativeStats.vue     # Animated statistics / counters
│   │   ├── ServicesSection.vue   # Services / offerings showcase
│   │   ├── WorksSection.vue      # Portfolio / projects grid
│   │   ├── TestimonialsSection.vue # Client testimonials carousel
│   │   ├── ContactSection.vue    # Contact form and social links
│   │   ├── FooterSection.vue     # Site footer with links
│   │   └── SkeletonLoader.vue    # Reusable skeleton loading component
│   ├── App.vue               # Root component
│   ├── main.js               # Application entry point & global configurations
│   └── style.css             # Global styles and design tokens
├── index.html                # HTML entry point with critical CSS
├── package.json              # Project dependencies and scripts
└── vite.config.js            # Vite configuration file
```

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ShanikaHerath/Portfolio-Showcase.git
   cd Portfolio-Showcase
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```
   The optimized output will be generated in the `dist` directory.

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

## 🎨 Design System
The project uses a custom design system managed via CSS variables in `style.css`.
* **Primary Background**: Deep Navy (`#0a1628`)
* **Accent Color**: Luxury Gold (`#d4af37`)
* **Typography**: *Inter* for readable body text and *Playfair Display* for elegant headings.

## 🤝 Contact & Social
* **GitHub**: [@ShanikaHerath](https://github.com/ShanikaHerath)
* **LinkedIn**: *(www.linkedin.com/in/shanika-herath)*


*Designed & Developed by Shanika Herath*
