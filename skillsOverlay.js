document.addEventListener('DOMContentLoaded', function() {
  const skills = document.querySelectorAll('.skill');

  skills.forEach(function(skill) {
    skill.addEventListener('click', function() {
      const title = skill.getAttribute('data-title');
      const description = skill.getAttribute('data-description');
      const imageSrc = skill.querySelector('.skill-image').getAttribute('src');

      const overlay = document.createElement('div');
      overlay.classList.add('skill-overlay');

      const overlayContent = document.createElement('div');
      overlayContent.classList.add('skill-overlay-content');

      const image = document.createElement('img');
      image.src = imageSrc;

      const titleElement = document.createElement('p');
      titleElement.classList.add('lead');
      titleElement.textContent = title;

      const descriptionElement = document.createElement('p');
      descriptionElement.classList.add('lead');
      descriptionElement.textContent = description;

      overlayContent.appendChild(image);
      overlayContent.appendChild(titleElement);
      overlayContent.appendChild(descriptionElement);

      overlay.appendChild(overlayContent);
      document.body.appendChild(overlay);

      overlay.addEventListener('click', function() {
        overlay.remove();
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const skillImages = document.querySelectorAll('.skill-image');

  skillImages.forEach(function(image) {
      image.addEventListener('click', function() {
          skillImages.forEach(function(img) {
              img.style.maxWidth = '100%';
              img.style.maxHeight = '100%';
              img.style.boxShadow = 'none';
          });
          image.style.maxWidth = '95%';
          image.style.maxHeight = '100%';
          image.style.boxShadow = '-0px 5px 15px #656565';
      });
  });
});
