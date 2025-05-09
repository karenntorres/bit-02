document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
  
    // Alternar visibilidad del menú al hacer clic en el botón
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  
    // Cerrar el menú al hacer clic en un enlace dentro del menú
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  });
  