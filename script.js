window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var acercaDeSection = document.querySelector('.acerca-de');

  if (window.scrollY >= acercaDeSection.offsetTop) {
      navbar.classList.add('dark');
  } else {
      navbar.classList.remove('dark');
  }
});

function isVisible(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight && rect.bottom >= 0;
}

// Funci贸n para agregar la clase show cuando la secci贸n est谩 visible
function checkSections() {
  var sections = document.querySelectorAll('.fade-in');
  sections.forEach(function(section) {
      if (isVisible(section)) {
          section.classList.add('show');
      }
  });
}

// Evento scroll para verificar las secciones visibles
window.addEventListener('scroll', function() {
  checkSections();
});

document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll(".fade-up");

  sections.forEach(function (section) {
    if (isElementInViewport(section)) {
      section.classList.add("active");
    }
  });

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", function () {
    sections.forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.add("active");
      }
    });
  });
});

