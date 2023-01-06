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



//RENDER CARDS DYNAMICALLY

const projectsCards = [
  {
    id: 1,
    class: 'one',
    classDesktop: 'first',
    classImgDesktop: 'pc-left',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/component_1.png',
    imageDesktop: 'images/component_1_.png',
    alt: 'Project number one',
    keywords: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',

  },
  {
    id: 2,
    class: 'two',
    classDesktop: 'second',
    classImgDesktop: 'pc-left-bigger',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/component_2.png',
    imageDesktop: 'images/component_5.png',
    alt: 'Project number two',
    keywords: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',

  },
  {
    id: 3,
    class: 'three',
    classDesktop: 'pc-left-bigger',
    classImgDesktop: 'pc-right-squares',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/component_3.png',
    imageDesktop: 'images/pc_img_left_2.png',
    alt: 'Project number three',
    keywords: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',

  },
  {
    id: 4,
    class: 'four',
    classDesktop: '',
    classImgDesktop: 'pc-left',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/component_4.png',
    imageDesktop: 'images/pc_right.png',
    alt: 'Project number four',
    keywords: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',

  },
  {
    id: 5,
    class: 'five',
    classDesktop: '',
    classImgDesktop: 'pc-left',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/component_5.png',
    imageDesktop: 'images/component_5.png',
    alt: 'Project number five',
    keywords: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',

  },
  {
    id: 6,
    class: 'six',
    classDesktop: '',
    classImgDesktop: 'pc-left',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/component_6.png',
    imageDesktop: 'images/component_6.png',
    alt: 'Project number six',
    keywords: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',

  }
]



function generateProjectCards(projects) {
  const projectCards = [];
  for (const project of projects) {
    const projectCard = `
      <div class="box ${project.class}">
        <img class="component" src="${project.image}" alt="${project.alt}">
        <img class="component-1" src="${project.imageDesktop}" alt="${project.alt}">
        <h3 class="first-title">${project.name}</h3>
        <ul class="keywords">
          ${project.keywords.map(keyword => `<li>${keyword}</li>`).join('')}
        </ul>
        <div>
          <button class="buttonbox" href="${project.liveVersion}">See this project 🡲</button>
        </div>
      </div>
      <div class="${project.classDesktop}">
        <img class="component-1" src="${project.imageDesktop}" alt="${project.alt}">
        <h3 class="first-title-">${project.name}</h3>
        <ul class="keywords-">
          ${project.keywords.map(keyword => `<li>${keyword}</li>`).join('')}
        </ul>
        <div>
          <button class="buttonbox-" href="${project.liveVersion}">See this project 🡲</button>
        </div>
      </div>
    `;
    projectCards.push(projectCard);
  }
  return projectCards.join('');
}

const projectCardsHTML = generateProjectCards(projectsCards);
document.querySelector('.cards').innerHTML = projectCardsHTML;













// const showMenuButton = document.querySelectorAll('.burger');
// showMenuButton.addEventListener('click', showMobileMenu);

// const closeMenuButton = document.querySelectorAll('.mobile-x');
// closeMenuButton.addEventListener('click', closeMenu);