window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { 
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.add('transparent');
      navbar.classList.remove('scrolled');
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.add('transparent');
      navbar.classList.remove('scrolled');
    }
  });


  // >>>>><<<<<<<<
  
 



