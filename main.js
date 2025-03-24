const cont = document.querySelector('.cont');
const elsArr = Array.from(document.querySelectorAll('.el'));
const closeBtnsArr = Array.from(document.querySelectorAll('.el__close-btn'));

// Initial animation
setTimeout(() => {
    cont.classList.remove('s--inactive');
}, 200);

// Open section
elsArr.forEach(el => {
    el.addEventListener('click', function() {
        if (this.classList.contains('s--active')) return;
        cont.classList.add('s--el-active');
        this.classList.add('s--active');
        
        // Add subtle bounce effect
        this.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        setTimeout(() => {
            this.style.transition = 'transform 0.6s 0.7s, width 0.7s, opacity 0.6s 0.7s, z-index 0s 1.3s';
        }, 600);
    });
});

// Close section
closeBtnsArr.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        cont.classList.remove('s--el-active');
        const activeEl = document.querySelector('.el.s--active');
        if (activeEl) {
            activeEl.classList.remove('s--active');
        }
    });
});

// Add hover effect for elements
elsArr.forEach(el => {
    el.addEventListener('mouseenter', function() {
        if (!this.classList.contains('s--active')) {
            this.style.transform = `translate3d(${this.style.transform.split('(')[1].split(',')[0]}, 0, 0) scale(1.02)`;
        }
    });
    
    el.addEventListener('mouseleave', function() {
        if (!this.classList.contains('s--active')) {
            this.style.transform = `translate3d(${this.style.transform.split('(')[1].split(',')[0]}, 0, 0)`;
        }
    });
});