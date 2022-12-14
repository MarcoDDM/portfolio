function hideElements() {
  const elements = document.querySelectorAll('.hamburger,  .headline, .image-down, .description, .projects, .about, .form, .footer');

  elements.forEach((element) => {
    element.style.display = 'none';
  });
}

function hideMenu() {
  const elements = document.querySelectorAll('.mobile-menu');
  elements.forEach((element) => {
    element.style.display = 'none';
  });
}

function closeMenu() {
  hideMenu();
  const elements = document
    .querySelectorAll('.hamburger, .headline, .image-down, .description, .projects, .about, .form, .footer');
  if (window.innerWidth <= 768) {
    // Show the elements on mobile devices
    elements.forEach((element) => {
      element.style.display = 'flex';
    });
  } else {
    // Hide the elements on desktop devices
    elements.forEach((element) => {
      element.style.display = 'none';
    });
  }
}

// Function to show menu mobile
function showMobileMenu() {
  hideElements();
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'flex';
  mobileMenu.style.width = '375px';
  mobileMenu.style.height = '200px';
}

// Function to scroll
const links = document.querySelectorAll('.scroll-link');
hideMenu();
links.forEach((link) => {
  link.addEventListener('click', function handleClick(event) {
    event.preventDefault();

    // Get the element to scroll to
    const elementId = this.getAttribute('href');
    const element = document.querySelector(elementId);

    // Scroll to the element with a smooth animation
    element.scrollIntoView({ behavior: 'smooth' });
  });
});

const showMenuButton = document.getElementById('.burger');
showMenuButton.addEventListener('click', showMobileMenu);

const closeMenuButton = document.getElementById('.mobile-x');
closeMenuButton.addEventListener('click', closeMenu);
