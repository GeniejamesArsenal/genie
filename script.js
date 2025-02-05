window.addEventListener('scroll', function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            const value = bar.getAttribute('data-value');
            bar.style.width = value + '%';
            bar.style.transition = 'width 1s ease-in-out';
        }
    });
});