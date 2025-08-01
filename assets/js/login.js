// Basic client-side login handler
// Stores the username and redirects to dashboard

window.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const usernameInput = document.getElementById('login-username');
        if (usernameInput) {
            localStorage.setItem('username', usernameInput.value);
        }
        window.location.href = 'dashboard.html';
    });
});
