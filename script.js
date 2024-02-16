// Define project data
const projects = [
    {
      title: 'Todo-list',
      description: 'I have developed a Todo-List web app using Spring Boot. This application allows users to create, schedule, and manage tasks, providing a convenient way to organize and track their to-do lists.',
      link: '#',
      image: 'Todo.jpeg',
      files: 'Todo-Web-Application-main.zip'
    },
    {
      title: 'HOTEL BOOKING APPLICATION: JAVA BACKEND DEVELOPMENT',
      description: 'This project involved developing the backend of a Hotel Booking Application using Java. The application aims to provide users with a seamless experience in booking the best-rated hotels within their budget. By leveraging Java’s capabilities, the backend ensures a reliable and efficient system for hotel search, booking management, and user authentication. With a focus on user satisfaction and budget optimization, this Hotel Booking Application offers a user-friendly platform for finding and reserving top-rated hotels.',
      link: '#',
      image: 'HotelBooking.jpeg',
      files: 'HotelBookingApp-main.zip'
    }
  ];
const projectsSection = document.getElementById('projects');
const projectsContainer = projectsSection.querySelector('.container');

projects.forEach(project => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');

  const projectImage = document.createElement('img');
  projectImage.src = project.image;
  projectImage.alt = project.title;

  const projectTitle = document.createElement('h3');
  projectTitle.textContent = project.title;

  const projectDescription = document.createElement('p');
  projectDescription.textContent = project.description;

  // Create a link to download the project files
  const projectFilesLink = document.createElement('a');
  projectFilesLink.href = project.files; // URL of the zip file
  projectFilesLink.textContent = 'Download Project Files';
  projectFilesLink.setAttribute('download', ''); // Optional: Set the download attribute to force download

  projectDiv.appendChild(projectImage);
  projectDiv.appendChild(projectTitle);
  projectDiv.appendChild(projectDescription);
  projectDiv.appendChild(projectFilesLink);

  projectsContainer.appendChild(projectDiv);
});


  
    
  document.getElementById("download-resume").addEventListener("click", function() {
    // Replace "path/to/your/resume.pdf" with the actual path to your resume file
    const resumePath = "Resume 22:11:23.pdf";
    
    // Create an anchor element
    const link = document.createElement("a");
    
    // Set the href attribute to the resume path
    link.href = resumePath;
    
    // Set the download attribute to force download
    link.download = "Resume.pdf";
    
    // Append the anchor element to the body
    document.body.appendChild(link);
    
    // Click the link to trigger the download
    link.click();
    
    // Remove the anchor element from the body
    document.body.removeChild(link);
  });
  
  document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
  });
  // Get the menu items
const menuItems = document.querySelectorAll('nav ul li a');

// Function to close the menu
function closeMenu() {
  const nav = document.querySelector('nav');
  nav.classList.remove('active');
  document.body.classList.remove('menu-open');
}

// Add event listeners to menu items
menuItems.forEach(item => {
  item.addEventListener('click', closeMenu);
});

  
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTopButton").style.display = "block";
  } else {
    document.getElementById("scrollTopButton").style.display = "none";
  }
}
// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to reveal skills list items one by one
function revealSkills(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      var skillsListItems = entry.target.querySelectorAll('li');
      skillsListItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('show');
        }, index * 100); // Adjust the delay time (100ms) as needed
      });
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer instance
var skillsObserver = new IntersectionObserver(revealSkills, { rootMargin: '0px', threshold: 0.2 });

// Observe the skills section
var skillsSection = document.getElementById('skills');
skillsObserver.observe(skillsSection);

//TYPING THE MOHAMMED FAIYAZ AGAIN AND AGAIN
var words = ['MOHAMMED FAIYAZ'];
var index = 0; // Start with the first word
var speed = 200; // Typing speed in milliseconds
var deleteSpeed = 50; // Deleting speed in milliseconds
var pause = 1000; // Pause between typing and deleting in milliseconds

// Function to simulate typing each letter
function typeLetter(word, i) {
  var currentText = document.getElementById('dynamic-heading').textContent;
  if (i <= word.length) {
    var newText = word.substring(0, i);
    document.getElementById('dynamic-heading').textContent = newText;
    setTimeout(function() {
      typeLetter(word, i + 1);
    }, speed);
  } else {
    setTimeout(function() {
      deleteLetter(word, i - 1);
    }, pause);
  }
}

// Function to simulate deleting each letter
function deleteLetter(word, i) {
  var currentText = document.getElementById('dynamic-heading').textContent;
  if (i >= 0) {
    var newText = word.substring(0, i);
    document.getElementById('dynamic-heading').textContent = newText;
    setTimeout(function() {
      deleteLetter(word, i - 1);
    }, deleteSpeed);
  } else {
    index = (index + 1) % words.length; // Move to the next word (loop back to the beginning if necessary)
    setTimeout(function() {
      typeLetter(words[index], 0);
    }, pause);
  }
}

// Start the process with the first word
typeLetter(words[index], 0);
