document.addEventListener('DOMContentLoaded', function () {
    // Clean initial URL if necessary
    handleInitialLoad();
  
    // Select all nav links
    const navLinks = document.querySelectorAll('.nav-bar a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        
        const href = this.getAttribute('href'); // Get the href attribute of the clicked link
        const cleanUrl = href.replace('../HTML/', '').replace('.html', ''); // Clean the URL
  
        // Change the URL without reloading the page
        window.history.pushState({}, '', cleanUrl);
  
        // Load the new content
        loadPageContent(href);
      });
    });
  
    window.addEventListener('popstate', function (event) {
      const cleanUrl = window.location.pathname;
      const url = `../HTML${cleanUrl}.html`;
      loadPageContent(url);
    });
  });
  
  function handleInitialLoad() {
    const currentUrl = window.location.pathname;
    if (!currentUrl.includes('HTML') && !currentUrl.endsWith('.html')) {
      const htmlFilePath = `../HTML${currentUrl}.html`;
      loadPageContent(htmlFilePath);
    }
  }
  
  function loadPageContent(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        document.querySelector('main').innerHTML = html; // Assuming you have a <main> element for your content
        updateLinks(); // Update the links after new content is loaded
      })
      .catch(error => {
        console.error('Error loading page content:', error);
        // Handle the error case and show an error message or fallback content
        document.querySelector('main').innerHTML = '<p>Page not found.</p>';
      });
  }
  
  function updateLinks() {
    const navLinks = document.querySelectorAll('.nav-bar a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        const href = this.getAttribute('href'); // Get the href attribute of the clicked link
        const cleanUrl = href.replace('../HTML/', '').replace('.html', ''); // Clean the URL
  
        // Change the URL without reloading the page
        window.history.pushState({}, '', cleanUrl);
  
        // Load the new content
        loadPageContent(href);
      });
    });
  }
  