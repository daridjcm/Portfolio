window.onload = function () {
  var darkModeBtn = document.getElementById('darkMode');
  var bodyElement = document.querySelector('body');
  var savedTheme = localStorage.getItem('theme');

  // Set default theme to light if not saved previously
  if (!savedTheme) {
    savedTheme = 'light';
    localStorage.setItem('theme', 'light');
  };

  // Apply light theme styles by default
  if (savedTheme === 'dark') {
    applyDarkThemeStyles();
    bodyElement.classList.add('dark-theme'); // Agregar la clase al cargar si el tema oscuro está activo
  };

  darkModeBtn.addEventListener('click', function () {
    // Toggle the dark theme class on the body element
    bodyElement.classList.toggle('dark-theme');

    // Check if the dark theme is now active
    var currentTheme = bodyElement.classList.contains('dark-theme') ? 'dark' : 'light';
    
    // Update the data-bs-theme attribute
    bodyElement.setAttribute('data-bs-theme', currentTheme);

    // Update the localStorage with the current theme
    localStorage.setItem('theme', currentTheme);

    // Remove existing dark theme styles and apply new ones
    unloadDarkThemeStyles();
    if (currentTheme === 'dark') {
      applyDarkThemeStyles();
    };
  });

  function applyDarkThemeStyles() {
    var linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'darkTheme.css';
    linkElement.id = 'dark-theme-styles';
    document.head.appendChild(linkElement);
  }

  function unloadDarkThemeStyles() {
    var existingLink = document.getElementById('dark-theme-styles');
    if (existingLink) {
      existingLink.parentNode.removeChild(existingLink);
    };
  };
};
