// $(document).ready(function() {
//   // Interaction 1: Expand "About Me" Content
//   $('#aboutBtn').click(function() {
//     $('#aboutContent').toggleClass('hidden');
//   });

//   // Interaction 2: Submit Contact Form
//   $('#contactForm').submit(function(event) {
//     event.preventDefault();
//     var name = $('#name').val();
//     var email = $('#email').val();
//     var message = 'Thank you, ' + name + '! I will get back to you at ' + email + '.';
//     $('#contactForm')[0].reset();
//     showMessage(message);
//   });

//   // Interaction 3: Open Modals
//   $('.modal .close').click(function() {
//     $(this).closest('.modal').hide();
//   });

//   $('nav a[href="#about"]').click(function(event) {
//     event.preventDefault();
//     $('#aboutModal').show();
//   });

//   $('nav a[href="#projects"]').click(function(event) {
//     event.preventDefault();
//     $('#projectsModal').show();
//   });

//   $('nav a[href="#contact"]').click(function(event) {
//     event.preventDefault();
//     $('#contactModal').show();
//   });

//   // Carousel for Pictures
//   var images = $('#imageCarousel img');
//   var currentIndex = 0;

//   function showImage(index) {
//     images.hide();
//     images.eq(index).show();
//   }

//   function nextImage() {
//     currentIndex = (currentIndex + 1) % images.length;
//     showImage(currentIndex);
//   }

//   setInterval(nextImage, 2000);

//   // Change Header Color
//   $('#headerTitle').click(function() {
//     var header = $('header');
//     header.toggleClass('blue-header');
//     if (header.hasClass('blue-header')) {
//       header.css('background-color', 'blue');
//     } else {
//       header.css('background-color', 'red');
//     }
//   });

//   // Helper function to display messages
//   function showMessage(message) {
//     var messageElement = $('<p>').text(message);
//     $('#contactForm').append(messageElement);
//   }
// });
