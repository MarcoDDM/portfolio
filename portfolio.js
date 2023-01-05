function hideElements() {
  const elements = document.querySelectorAll('.hamburger, .logo,  .headline, .image-down, .description, .projects, .about, .form, .footer');

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
    .querySelectorAll('.hamburger, .headline, .logo, .image-down, .description, .projects, .about, .form, .footer');
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

//RENDER CARDS DYNAMICALLY

const projectsCards = [
  {
    id: 1,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/component_1.png',
    alt: 'laptop',
    keywords: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',

  },
  {
    id: 2,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/component_2.png',
    alt: 'laptop',
    keywords: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',

  },
  {
    id: 3,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/component_3.png',
    alt: 'laptop',
    keywords: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',

  },
  {
    id: 4,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/component_4.png',
    alt: 'laptop',
    keywords: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',

  },
  {
    id: 5,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/component_5.png',
    alt: 'laptop',
    keywords: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',

  },
  {
    id: 6,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/component_5.png',
    alt: 'laptop',
    keywords: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',

  }
]

//how to render projectsCard content dynamically without bootstrap on cards div??