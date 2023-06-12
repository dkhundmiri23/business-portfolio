$(document).ready(function() {
    // Interaction 1: Smooth Scrolling
    $('nav a').click(function(event) {
      event.preventDefault();
      let target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800);
    });
  
    // Interaction 2: Open Modal for "About Me"
    $('#aboutBtn').click(function() {
      let aboutContent = 'I am a Software Engineer who brings a unique perspective to the field based on my previous career as a retail associate. In my previous role, I developed strong communication and problem-solving skills, working closely with customers to meet their needs and address any challenges they encountered. This experience taught me the value of empathy and user-centric design, which I now bring to my software engineering work.';
      openModal(aboutContent);
    });
  
    // Interaction 3: Open Modal for "Projects"
    $('#projectsBtn').click(function() {
      let projectsContent = 'Here are some of the projects I have worked on:<ul><li>Project 1</li><li>Project 2</li><li>Project 3</li></ul>';
      openModal(projectsContent);
    });
  
    // Interaction 4: Open Modal for "Contact Me"
    $('#contactBtn').click(function() {
      let contactForm = '<form><label for="name">Name:</label><input type="text" id="name" name="name"><label for="email">Email:</label><input type="email" id="email" name="email"><button type="submit">Submit</button></form>';
      openModal(contactForm);
    });
  
    // Close Modal
    $('.close').click(function() {
      closeModal();
    });
  
    // Submit Contact Form
    $(document).on('submit', 'form', function(event) {
      event.preventDefault();
      let name = $('#name').val();
      let email = $('#email').val();
      let message = 'Thank you, ' + name + '! I will get back to you at ' + email + '.';
      openModal(message);
      $('#name').val('');
      $('#email').val('');
    });
  
    // Helper function to open modal
    function openModal(content) {
      $('#modalContent').html(content);
      $('#modal').fadeIn();
    }
  
    // Helper function to close modal
    function closeModal() {
      $('#modal').fadeOut();
    }
  });
  