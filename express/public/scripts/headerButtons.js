document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready!");

    document.getElementById("headerButtons2").addEventListener("click", function() {
        window.location.href = "/converter"; });

    document.getElementById("headerButtons1").addEventListener("click", function() {
        window.location.href = "/main" });

    document.getElementById("headerButtons3").addEventListener("click", async function() {
        try {
            const response = await fetch('/check-auth');
            const data = await response.json();

            if (data.authenticated) {
            window.location.href = "/profile";
            } else {
            window.location.href = "/login";
            }
        } catch (error) {
            console.error('Error checking authentication:', error);
        }
        });

    var SignUpBut = document.getElementById("SignUpBut");

    if (SignUpBut) {
        SignUpBut.addEventListener("click", function() {
            window.location.href = "/register";
        })};

    var productButton = document.getElementById("productButton");

    if (productButton) {
        productButton.addEventListener("click", function() {
            window.location.href = "/converter";
        })};

    var SignInBut = document.getElementById("SignInBut");

    if (SignInBut) {
        SignInBut.addEventListener("click", function() {
            window.location.href = "/login";
        })};

    var errorLogin = document.getElementById('errorLogin');
    var loginForm = document.querySelector('#Form form');

    if (errorLogin && loginForm) {
        loginForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const formData = new FormData(this);
            const email = formData.get('email');
            const password = formData.get('password');

            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                if (!response.ok) {
                    const errorMessage = await response.json();
                    errorLogin.textContent = errorMessage.error;
                    errorLogin.style.display = 'block';
                } else {
                    window.location.href = "/converter";
                }
            } catch (error) {
                console.error('Error:', error);
                window.location.href = "/errors";
            }
        });
    }

    var errorRegister = document.getElementById('errorEmail');
    var registerForm = document.querySelector('#Form form');

    if (errorRegister && registerForm) {
        registerForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const formData = new FormData(this);
            const email = formData.get('email');
            const name = formData.get("name");
            const password = formData.get("password");

            try {
                const response = await fetch('/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name,email, password })
                });

                if (!response.ok) {
                    const errorMessage = await response.json();
                    errorRegister.textContent = errorMessage.error;
                    errorRegister.style.display = 'block';
                } else {
                    window.location.href = "/login";
                }
            } catch (error) {
                console.error('Error:', error);
                window.location.href = "/errors";
            }
        });
    }
});