function navbarButtonClick(id) {
  var el = document.getElementById(id);
  el.scrollIntoView();
}

// Mobile menu functionality
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerMenu = document.querySelector('.hamburger-menu');

  mobileMenu.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerMenu = document.querySelector('.hamburger-menu');

  mobileMenu.classList.remove('active');
  hamburgerMenu.classList.remove('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navbar = document.querySelector('.navbar');

  if (mobileMenu && hamburgerMenu && navbar) {
    if (!navbar.contains(event.target) && mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  }
});

// Close mobile menu on window resize if it's open
window.addEventListener('resize', function() {
  if (window.innerWidth >= 1201) {
    closeMobileMenu();
  }
});

/*
<!--
<a class="navbar-button" href="#cosa-facciamo">COSA FACCIAMO</a>
<a class="navbar-button" href="#il-vivaio">IL VIVAIO</a>
<a class="navbar-button" href="#le-piante">LE PIANTE</a>
<a class="navbar-button" href="#bacche">LE NOSTRE BACCHE</a>
<a class="navbar-button" href="#chi-siamo">CHI SIAMO</a>
<a class="navbar-button" href="#contatti">CONTATTI</a>
<a class="navbar-button" href="#gin">IL NOSTRO GIN</a>
-->
*/
