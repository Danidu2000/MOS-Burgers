document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    const signInButton = document.querySelector('a.btn');

    signInButton.addEventListener('click', function (event) {
        event.preventDefault();

        const userNameInput = document.getElementById('floatingInput');
        const passwordInput = document.getElementById('floatingPassword');
        const rememberMe = document.getElementById('flexCheckDefault').checked;

        const userName = userNameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!userName || !password) {
            alert('Please enter both user name and password');
            return;
        }

        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
            localStorage.setItem('userName', userName);
        } else {
            localStorage.removeItem('rememberMe');
            localStorage.removeItem('userName');
        }

        if (userName === 'admin' && password === 'password') {
            window.location.href = './customer.html';
        } else {
            alert('Invalid user name or password');
        }
    });

    const remembered = localStorage.getItem('rememberMe') === 'true';
    if (remembered) {
        const savedUserName = localStorage.getItem('userName');
        if (savedUserName) {
            document.getElementById('floatingInput').value = savedUserName;
            document.getElementById('flexCheckDefault').checked = true;
        }
    }
});
