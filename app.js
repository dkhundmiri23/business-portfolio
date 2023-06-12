$(document).ready(function() {
    // Interaction 1: Smooth Scrolling
    $('nav a').click(function(event) {
      event.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate{
        scrollTop: $(target)
      }
    }
    )
)