const hideElements = () => {
  const elements = document.querySelectorAll('.hamburger, .headline, .image-down, .logo-mobile, .description, .projects, .about, .form, .footer');
  elements.forEach(element => element.style.display = 'none');
}

const showElements = () => {
  const elements = document.querySelectorAll('.logo-mobile, .mobile_menu, .headline, .description, .projects, .about, .form, .footer');
  elements.forEach(element => element.style.display = 'flex');
}

function showMobileMenu() {
  hideElements();
  const mobileMenu = document.querySelector('.mobile_menu');
  mobileMenu.style.display = 'flex';
  mobileMenu.style.width = '100%';
  mobileMenu.style.height = '454px';
}

const scrollToElement = (id) => {
  showElements();
  document.querySelector(id).scrollIntoView();
}

showMobileMenu;
scrollToElement('#projects');
scrollToElement('#about');
scrollToElement('#form');
