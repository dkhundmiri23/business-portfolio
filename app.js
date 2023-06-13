$(document).ready(function() {
  // Interaction 1: Expand "About Me" Content
  $('#aboutBtn').click(function() {
    $('#aboutContent').toggleClass('hidden');
  });

  // Interaction 2: Submit Contact Form
  $('#contactForm form').submit(function(event) {
    event.preventDefault();
    let name = $('#name').val();
    let email = $('#email').val();
    let message = 'Thank you, ' + name + '! I will get back to you at ' + email + '.';
    $('#contactForm')[0].reset();
    showMessage(message);
  });

  // Interaction 3: Open Modals
  $('nav a[href="#about"]').click(function(event) {
    event.preventDefault();
    $('#modal-overlay').show();
    $('#modal-container').show();
    $('#modal-body').html('<h3>About Me</h3><p> I started my professional journey as a dedicated customer service representative, where I honed my communication and problem-solving skills while ensuring customer satisfaction. While I found fulfillment in assisting others, I felt an insatiable curiosity for technology and its potential to shape the world. Motivated by this curiosity, I made a bold decision to embark on a new path, transitioning into the dynamic field of software engineering. With unwavering determination and a thirst for knowledge, I am now committed to expanding my technical expertise, crafting innovative solutions, and contributing to the advancement of technology. As I forge ahead on this exciting journey, I am excited to combine my background in customer service with my newfound software engineering skills to create meaningful and user-centric experiences.</p>');
  });

  $('nav a[href="#projects"]').click(function(event) {
    event.preventDefault();
    $('#modal-overlay').show();
    $('#modal-container').show();
    $('#modal-body').html('<h3>Projects</h3><p>More details about your projects.</p>');
  });

  $('nav a[href="#contact"]').click(function(event) {
    event.preventDefault();
    $('#modal-overlay').show();
    $('#modal-container').show();
    $('#modal-body').html('<h3>Contact Me</h3><p>Instructions on how to contact you.</p>');
  });

  // Carousel for Pictures
  let images = $('#projects .carousel-container .carousel-img active');
  let currentIndex = 0;
  
  function showImage(index) {
    images.removeClass('active');
    images.eq(index).addClass('active');
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  setInterval(nextImage, 2000);
  

  // Change Header Color
  $('#header-text').click(function() {
    let header = $('header');
    header.toggleClass('blue-header');
    if (header.hasClass('blue-header')) {
      header.css('background-color', 'blue');
    } else {
      header.css('background-color', 'red');
    }
  });

  // Helper function to display messages
  function showMessage(message) {
    let messageElement = $('<p>').text(message);
    $('#contactForm').append(messageElement);
  }
});
