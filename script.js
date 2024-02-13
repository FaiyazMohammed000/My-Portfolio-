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

  
  