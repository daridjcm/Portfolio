document.addEventListener("DOMContentLoaded", function () {
  let darkModeBtn = document.getElementById("darkMode");
  let lightModeBtn = document.getElementById("lightMode");
  let btnMode = document.getElementById("btnMode");
  let modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
  let bodyElement = document.querySelector("body");

  let userDecisionMade = localStorage.getItem("userDecisionMade");

  if (!userDecisionMade) {
    modal.show();
  } else {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }

  let modalButtons = document.querySelectorAll("#staticBackdrop button");
  modalButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setTheme(btn.id);
      modal.hide();
      userDecisionMade = true;
      localStorage.setItem("userDecisionMade", userDecisionMade);
    });
  });

  function setTheme(theme) {
    if (theme === "dark") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
    localStorage.setItem("theme", theme);
  }

  function setDarkTheme() {
    bodyElement.classList.add("dark-theme");
    bodyElement.setAttribute("data-bs-theme", "dark");
    unloadStyles();
    applyDarkThemeStyles();
  };

  function setLightTheme() {
    bodyElement.classList.remove("dark-theme");
    bodyElement.setAttribute("data-bs-theme", "light");
    unloadStyles();
  };

  function applyDarkThemeStyles() {
    let linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = "style-dark.css";
    linkElement.id = "theme-styles";
    document.head.appendChild(linkElement);
  };

  function unloadStyles() {
    let existingLink = document.getElementById("theme-styles");
    if (existingLink) {
      existingLink.parentNode.removeChild(existingLink);
    };
  };

  btnMode.addEventListener("click", function () {
    if (bodyElement.classList.contains("dark-theme")) {
      setLightTheme();
    } else {
      setDarkTheme();
    };
    modal.hide();
    userDecisionMade = true;
    localStorage.setItem("userDecisionMade", userDecisionMade);
  });
});
