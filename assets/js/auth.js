// Simple auth guard to ensure user is logged in
window.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('username')) {
        window.location.href = 'index.html';
        return;
    }

    // simple dropdown menu for logout
    const avatarButton = document.querySelector('button[id^="radix"]');
    if (avatarButton) {
        const menu = document.createElement('div');
        menu.id = 'user-menu';
        menu.style.display = 'none';
        menu.style.position = 'absolute';
        menu.style.right = '1rem';
        menu.style.top = '3.5rem';
        menu.style.background = 'rgba(30,41,59,0.9)';
        menu.style.color = '#fff';
        menu.style.padding = '0.5rem 1rem';
        menu.style.borderRadius = '0.25rem';

        const logout = document.createElement('a');
        logout.href = '#';
        logout.textContent = 'Logout';
        logout.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('username');
            window.location.href = 'index.html';
        });

        menu.appendChild(logout);
        document.body.appendChild(menu);

        avatarButton.addEventListener('click', function () {
            menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        });
    }
});
