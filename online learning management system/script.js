// This file will handle API requests to the backend

// Simulate login (in real-world, use AJAX to verify credentials)
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Normally, make an AJAX request to the backend to validate user credentials.
    if (username === 'admin' && password === 'admin') {
      alert('Login successful');
      window.location.href = 'courses.html'; // Redirect to courses page
    } else {
      alert('Invalid username or password');
    }
  });
  
  // Fetch and display course list
  if (document.getElementById('courseList')) {
    fetch('http://localhost:8080/api/courses')
      .then(response => response.json())
      .then(data => {
        const courseListDiv = document.getElementById('courseList');
        data.forEach(course => {
          const courseElement = document.createElement('div');
          courseElement.innerHTML = `
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <button onclick="viewCourseDetails(${course.id})">View Details</button>
          `;
          courseListDiv.appendChild(courseElement);
        });
      })
      .catch(error => console.error('Error fetching courses:', error));
  }
  
  // View course details
  function viewCourseDetails(courseId) {
    fetch(`http://localhost:8080/api/course/${courseId}`)
      .then(response => response.json())
      .then(data => {
        const courseDetailsDiv = document.getElementById('courseDetails');
        courseDetailsDiv.innerHTML = `
          <h2>${data.name}</h2>
          <p><strong>Instructor:</strong> ${data.instructor}</p>
          <p>${data.description}</p>
        `;
      })
      .catch(error => console.error('Error fetching course details:', error));
  }
  