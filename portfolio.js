const hideElements = () => {
  const elements = document.querySelectorAll('.hamburger, .headline, .image-down, .description, .projects, .about, .form, .footer');
  elements.forEach(element => element.style.display = 'none');
}

const hideMenu = () => {
  const elements = document.querySelectorAll('.mobile-menu');
  elements.forEach(element => element.style.display = 'none');
}

const showElements = () => {
  const elements = document.querySelectorAll('.hamburger, .headline, .description, .projects, .about, .form, .footer');
  elements.forEach(element => element.style.display = 'flex');
}

const closeMenu = () => {
  hideMenu();
  const elements = document.querySelectorAll('.hamburger, .headline, .image-down, .description, .projects, .about, .form, .footer');
  elements.forEach(element => element.style.display = 'flex');
}


function showMobileMenu() {
  hideElements();
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'flex';
  mobileMenu.style.width = '375px';
  mobileMenu.style.height = '200px';
}

const scrollToElement = (id) => {
  hideMenu();
  showElements();
  const element = document.querySelector(id);
  element.scrollIntoView();
}


//showMobileMenu;
//scrollToElement('#description')
//scrollToElement('#projects');
//scrollToElement('#about');
//scrollToElement('#form');
