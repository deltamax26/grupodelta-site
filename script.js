document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const dropdown = document.getElementById("groupDropdown");
  const dropdownToggle = dropdown ? dropdown.querySelector(".dropdown-toggle") : null;

  // Menú móvil
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Dropdown Grupo Delta: funciona con clic en iPad, celular y escritorio
  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const isOpen = dropdown.classList.toggle("open");
      dropdownToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Cerrar dropdown al hacer clic fuera
  document.addEventListener("click", (event) => {
    if (dropdown && !dropdown.contains(event.target)) {
      dropdown.classList.remove("open");

      if (dropdownToggle) {
        dropdownToggle.setAttribute("aria-expanded", "false");
      }
    }
  });

  // Cerrar menú móvil al elegir un enlace
  document.querySelectorAll("#mainNav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 1020 && mainNav) {
        mainNav.classList.remove("open");

        if (menuToggle) {
          menuToggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  // Si se cambia el tamaño de ventana, limpiar estados móviles
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1020 && mainNav) {
      mainNav.classList.remove("open");

      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
      }
    }
  });
});
