document.addEventListener("DOMContentLoaded", function() {
    // Carregar header
    fetch("../02_components/01_menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    // Carregar footer
    fetch("../02_components/02_footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});