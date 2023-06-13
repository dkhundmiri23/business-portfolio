// Open modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

// Close modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Submit form
function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  // Submit form logic...
  closeModal('contactModal');
  var successMessage = document.createElement('p');
  successMessage.innerHTML = 'Thank you, ' + name + '! Your message has been sent.';
  document.querySelector('.content').appendChild(successMessage);
}

// Carousel
var slideIndex = 0;
var images = document.querySelectorAll('.carousel img');

function carouselPrev() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = images.length - 1;
  }
  showSlide(slideIndex);
}

function carouselNext() {
  slideIndex++;
  if (slideIndex >= images.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function showSlide(index) {
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  images[index].style.display = 'block';
}

// Change header color
function changeHeaderColor() {
  var header = document.getElementById('header');
  header.classList.toggle('blue');
}
