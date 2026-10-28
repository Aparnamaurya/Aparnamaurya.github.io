document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    const initialTheme = savedTheme === 'dark' ? 'dark' : 'light';

    const setTheme = (theme) => {
        document.documentElement.dataset.theme = theme;
        themeToggles.forEach((toggle) => {
            const isDark = theme === 'dark';
            toggle.setAttribute('aria-pressed', String(isDark));
            toggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
            toggle.textContent = isDark ? 'Light mode' : 'Dark mode';
        });
    };

    setTheme(initialTheme);

    themeToggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
            setTheme(nextTheme);
            window.localStorage.setItem('portfolio-theme', nextTheme);
        });
    });

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
