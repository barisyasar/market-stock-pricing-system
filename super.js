var navLinks = document.getElementsByClassName('nav-link');
const sPages = document.getElementsByName('sPage');

// Navigation
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

        var currentPage = document.getElementsByClassName("current");
        currentPage[0].classList.add('d-none');
        currentPage[0].classList.remove('current');

        sPages[i].classList.add('current');
        sPages[i].classList.remove('d-none');

      });
};