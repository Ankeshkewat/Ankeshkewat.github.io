// Add smooth scrolling to nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Add active class to current nav link
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', event => {
  const currentPosition = window.scrollY + (window.innerHeight / 2);
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
      const navId = `#nav-${section.id}`;
      document.querySelector(navId).classList.add('active');
    } else {
      const navId = `#nav-${section.id}`;
      document.querySelector(navId).classList.remove('active');
    }
  });
});
