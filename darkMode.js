window.onload = function () {
  var darkModeBtn = document.getElementById('darkMode');
  var bodyElement = document.querySelector('body');
  var savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    bodyElement.classList.add('dark-theme');
    unloadDarkThemeStyles();
  } else {
    loadDarkThemeStyles();
  }

  darkModeBtn.addEventListener('click', function () {
    bodyElement.classList.toggle('dark-theme');
    bodyElement.classList.toggle('dark-text');
    bodyElement.classList.toggle('dark-background');

    var currentTheme = bodyElement.classList.contains('dark-theme') ? 'dark' : 'light';
    bodyElement.setAttribute('data-bs-theme', currentTheme);

    localStorage.setItem('theme', currentTheme === 'dark' ? 'dark' : 'light');

    if (currentTheme === 'dark') {
      loadDarkThemeStyles();
    } else {
      unloadDarkThemeStyles();
    };
  });

  function loadDarkThemeStyles() {
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
    }
  }
};
