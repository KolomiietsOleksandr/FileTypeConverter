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
});
