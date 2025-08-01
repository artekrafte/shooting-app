// Simple auth guard to ensure user is logged in
window.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('username')) {
        window.location.href = 'index.html';
    }
});
