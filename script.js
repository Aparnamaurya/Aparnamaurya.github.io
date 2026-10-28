document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
        if (!navbar) return;
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
});
