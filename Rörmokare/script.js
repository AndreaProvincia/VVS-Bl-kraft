// Shrink hero on scroll
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero-section');
    const topbar = document.querySelector('.topbar');
    const body = document.body;

    if (window.scrollY > 50) {
        if (hero) hero.classList.add('shrink');
        if (topbar) topbar.classList.add('shrink');
        if (body) body.classList.remove('topbar-fixed-padding');
    } else {
        if (hero) hero.classList.remove('shrink');
        if (topbar) topbar.classList.remove('shrink');
        if (body) body.classList.add('topbar-fixed-padding');
    }
});

// Toggle search field in topbar
document.addEventListener('DOMContentLoaded', function() {
    // ensure body has padding to account for fixed topbar initially
    document.body.classList.add('topbar-fixed-padding');
    const searchForm = document.querySelector('.search-form');
    if (!searchForm) return;
    const toggle = searchForm.querySelector('.search-toggle');
    const input = searchForm.querySelector('input[type="search"]');
    const submit = searchForm.querySelector('.search-submit');

    toggle && toggle.addEventListener('click', function(e) {
        const isOpen = searchForm.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (isOpen) {
            // focus input after it becomes visible
            setTimeout(() => input && input.focus(), 50);
        }
    });

    // Close search if click outside
    document.addEventListener('click', function(e) {
        if (!searchForm.classList.contains('open')) return;
        if (!searchForm.contains(e.target)) {
            searchForm.classList.remove('open');
            toggle && toggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Optional: prevent empty searches
    searchForm.addEventListener('submit', function(e) {
        if (input && input.value.trim() === '') {
            e.preventDefault();
            input.focus();
        }
    });
});