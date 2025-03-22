// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    const navToggle = document.getElementById('nav-toggle');
    const navToggleLabel = document.querySelector('.nav-toggle-label');
    
    if (!nav.contains(e.target) && 
        !navToggleLabel.contains(e.target) && 
        !e.target.matches('.nav-toggle') && 
        navToggle.checked) {
        navToggle.checked = false;
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        const navToggle = document.getElementById('nav-toggle');
        navToggle.checked = false;
    });
});

// Prevent clicks inside the menu from closing it
document.querySelector('nav').addEventListener('click', function(e) {
    e.stopPropagation();
});