document.addEventListener('DOMContentLoaded', function () {

  // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });


    // --- CODE POUR LA SECTION FAQ ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Vérifie si l'élément cliqué est déjà actif
            const isActive = item.classList.contains('active');

            // Optionnel : Ferme tous les autres items pour n'en garder qu'un ouvert
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Si l'élément n'était pas actif, on l'ouvre
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

});


  const swiper = new Swiper('.logo-swiper', {
    slidesPerView: 'auto',
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
  });

  // Désactiver le clic droit
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Désactiver le raccourci clavier pour copier (Ctrl+C / Cmd+C)
document.addEventListener("keydown", function (e) {
  // Pour Windows : Ctrl+C (code 67)
  // Pour Mac : Meta+C (code 67)
  if ((e.ctrlKey || e.metaKey) && e.keyCode === 67) {
    e.preventDefault();
  }
});

// Empêcher le glisser-déposer d'images ou de texte
document.addEventListener("dragstart", function (e) {
  e.preventDefault();
});

// Empêcher la sélection de texte
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});