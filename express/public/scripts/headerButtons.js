document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready!");

    document.getElementById("headerButtons2").addEventListener("click", function() {
        window.location.href = "/converter"; });

    document.getElementById("headerButtons1").addEventListener("click", function() {
        window.location.href = "/main" });

    document.getElementById("headerButtons3").addEventListener("click", function() {
        window.location.href= "/authorization";
    });

    var productButton = document.getElementById("productButton");

    if (productButton) {
        productButton.addEventListener("click", function() {
            window.location.href = "/converter";
        })};
});
