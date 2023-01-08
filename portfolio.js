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

// RENDER CARDS DYNAMICALLY

const projectsCards = [
  {
    id: 1,
    class: 'one',
    classDesktop: 'first',
    classImgDesktop: 'pc-left',
    boxClass: 'boxDsk',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat. </br>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
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
    classDesktop: 'pc-left',
    classImgDesktop: 'pc-left',
    boxClass: 'boxDsk2',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat. </br>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/component_2.png',
    imageDesktop: 'images/pc_img_left.png',
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
    classImgDesktop: 'pc-left-bigger',
    boxClass: 'boxDsk3',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat. </br>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
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
    classDesktop: 'pc-right-yellow',
    classImgDesktop: 'pc-left',
    boxClass: 'boxDsk4',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat. </br>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
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
    classDesktop: 'component2',
    classImgDesktop: 'component2',
    boxClass: 'boxDsk5',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat. </br>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
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
    classDesktop: 'six-desktop',
    classImgDesktop: 'six-desktop',
    boxClass: 'boxDsk6',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  </br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/component_6.png',
    imageDesktop: 'images/component_6.png',
    alt: 'Project number six',
    keywords: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',

  },
];

function generateProjectCards(projects) {
  const projectCards = [];
  for (let i = 0; i < projects.length; i += 1) {
    const project = projects[i];
    const projectCard = `
      <div class="box ${project.class}">
        <img class="component" src="${project.image}" alt="${project.alt}">
        <img class="${project.classImgDesktop}" src="${project.imageDesktop}" alt="${project.alt}">
        <h3 class="first-title">${project.name}</h3>
        <ul class="keywords">
          ${project.keywords.map((keyword) => `<li>${keyword}</li>`).join('')}
        </ul>
        <div>
          <button class="buttonbox" onclick="showModal(${project.id})">See this project 🡲</button>
        </div>
      </div>
      <div class="${project.classDesktop}">
        <img class="" src="${project.imageDesktop}" alt="${project.alt}">
        <div class="${project.boxClass}">
          <h3 class="first-title">${project.name}</h3>
          <ul class="keywords">
            ${project.keywords.map((keyword) => `<li>${keyword}</li>`).join('')}
          </ul>
          <div class="buttonboxDesktop" >
            <button onclick="showModal(${project.id})">See this project 🡲</button>
          </div>
        </div>
      </div>
      <div class="geometry-center"> <img src="images/image-geometry_2.png" alt=""> </div>
      <div class="pc-right-squares"> <img src="images/image-geometry_3.png" alt=""> </div>
      <div class="dot-right-yellow"> <img src="images/image-geometry_4.png" alt=""> </div>
      <div class="pc-left-squares"> <img src="images/image-geometry_5.png" alt=""> </div>
    `;
    projectCards.push(projectCard);
  }
  return projectCards.join('');
}

const projectCardsHTML = generateProjectCards(projectsCards);
document.querySelector('.cards').innerHTML = projectCardsHTML;

const showModal = (id) => {
  // Find the project with the specified id in the projectsCards array
  const projectInfo = projectsCards.find((project) => project.id === id);

  // If a project was found, show the modal
  if (projectInfo) {
    const myModal = document.getElementById('myModal');
    myModal.style.display = 'flex';

    // Create the modal content elements using innerHTML
    myModal.innerHTML = `
      <div class="modal-content">
        <button id="closeModalX" onclick="closeModal()" class="close-modal close">&times</button>
        <h3 class="project-title-modal">${projectInfo.name}</h3>
        <ul class="card-tech-modal">
          ${projectInfo.keywords.map((keyword) => `<li>${keyword}</li>`).join('')}
        </ul>
        <img class="project-image modal-img" src="${projectInfo.image}" alt="${projectInfo.alt}">
        <p class="project-description">${projectInfo.description}</p>
        <div class="btns-modal">
          <button class="btn-modal seeLive">See live
            <img class="iconModal" src="">
          </button>
          <button class="btn-modal seeSource">See source
            <img class="iconModal" src="">
          </button>
        </div>
        <div class="next-prev-proj">
          <button class="prev-btn"> &larr; Previous project</button>
          <button class="prev-btn">Next Project &rarr;</button>
        </div>
      </div>
      <div class="modal-desktop">
        <button onclick="closeModal()" class="close-modal closeDsk">&times</button>
        <h3 class="title-modal-desktop">${projectInfo.name}</h3>
        <ul class="card-desktop-keywords">
          ${projectInfo.keywords.map((keyword) => `<li>${keyword}</li>`).join('')}
        </ul>
        <img class="project-image modal-img modal-img-dsk" src="${projectInfo.image}" alt="${projectInfo.alt}">
        <p class="project-description-dsk">${projectInfo.description}</p>
        <div class="btns-modal">
          <button class="btn-modal seeLiveDsk">See live
            <img class="iconModal" src="">
          </button>
          <button class="btn-modal seeSourceDsk">See source
            <img class="iconModal" src="">
          </button>
        </div>
        <div class="btn-nxt">
          <button class="prev-btn-dsk"> &larr; Previous project</button>
          <button class="next-btn-dsk">Next Project &rarr;</button>
        </div>
      </div>
    `;
  }
};

const closeModal = () => {
  const myModal = document.getElementById('myModal');
  myModal.style.display = 'none';
};

const showMenuButton = document.querySelectorAll('.burger');
showMenuButton.addEventListener('click', showMobileMenu);

const closeMenuButton = document.querySelectorAll('.mobile-x');
closeMenuButton.addEventListener('click', closeMenu);

// Get the modal buttons
const showModalButton = document.querySelector('#show-modal-button');
const closeModalButton = document.querySelector('#close-modal-button');

// Add click event listeners to the buttons
showModalButton.addEventListener('click', showModal);
closeModalButton.addEventListener('click', closeModal);