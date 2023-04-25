function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  // Ajouter un gestionnaire d'événements pour chaque élément de navigation qui doit faire défiler vers une section
  const homeLink = document.querySelector('.nav-link[href="#Home"]');
  homeLink.addEventListener('click', () => {
    scrollToSection('informations');
  });
  
  const projectsLink = document.querySelector('.nav-link[href="#Projects"]');
  projectsLink.addEventListener('click', () => {
    scrollToSection('projects');
  });
  
  const contactLink = document.querySelector('.nav-link[href="#Contact"]');
  contactLink.addEventListener('click', () => {
    scrollToSection('footer');
});
  