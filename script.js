const toggle = document.querySelector('.dark-mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('show');
});

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
