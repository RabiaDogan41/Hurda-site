document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.querySelector(".menu-icon");
    var navbar = document.querySelector(".navbar");
    
    menuIcon.addEventListener("click", function() {
        // Navbar'ın açılıp kapanmasını sağlar
        navbar.classList.toggle("active");
        
        // Açıkken çarpı, kapalıyken hamburger sembolü göster
        if (navbar.classList.contains("active")) {
            menuIcon.textContent = "✖";
        } else {
            menuIcon.textContent = "☰";
        }
    });
});
