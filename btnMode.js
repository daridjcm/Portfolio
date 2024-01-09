document.addEventListener("DOMContentLoaded", function () {
  let darkModeBtn = document.getElementById("darkMode");
  let lightModeBtn = document.getElementById("lightMode");
  let btnMode = document.getElementById("btnMode");
  let modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
  let bodyElement = document.querySelector("body");

  modal.show();
  let modalButtons = document.querySelectorAll("#staticBackdrop button");
  modalButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      modal.hide();
    });
  });

  function setDarkTheme() {
    bodyElement.classList.add("dark-theme");
    bodyElement.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("theme", "dark");
    unloadStyles();
    applyDarkThemeStyles();
  };

  function setLightTheme() {
    bodyElement.classList.remove("dark-theme");
    bodyElement.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
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

  darkModeBtn.addEventListener("click", setDarkTheme);
  lightModeBtn.addEventListener("click", setLightTheme);

  btnMode.addEventListener("click", function () {
    if (bodyElement.classList.contains("dark-theme")) {
      setLightTheme();
    } else {
      setDarkTheme();
    };
    modal.hide();
  });

  let savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    setLightTheme();
  } else {
    setDarkTheme();
  }
});
