const donatebutton = document.getElementById('donatebutton');
const donationform = document.getElementById('donationform');
const submit = document.getElementById('submit');
const thankyou = document.getElementById('thankyou');

donatebutton.addEventListener('click', () => {
  donationform.style.display = 'block';
});

submit.addEventListener('click', (event) => {
  event.preventDefault();
  donationform.style.display = 'block';
  thankyou.style.display = 'block';
});

showSlide(currentSlide);

const prevBtn = document.createElement('button');
prevBtn.textContent = 'Previous';
prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + testimonialItems.length) % testimonialItems.length;
  showSlide(currentSlide);
});

const nextBtn = document.createElement('button');
nextBtn.textContent = 'Next';
nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % testimonialItems.length;
  showSlide(currentSlide);
});

testimonialSlider.appendChild(prevBtn);
testimonialSlider.appendChild(nextBtn);
const bookingForm = document.getElementById('booking-form');

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate form fields here (e.g., required fields, email format)
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  if (name === '' || email === '' || date === '' || time === '') {
    alert('Please fill in all required fields.');
    return;
  }

  // Submit form data using AJAX or other methods
  // ...
});


const volunteerForm = document.getElementById('volunteer-form');

volunteerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the values of the input fields
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;
    const county = document.getElementById('county').value;
    const email = document.getElementById('email').value;

   
});

const volunteer = document.getElementById('volunteer');

volunteer.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the values of the input fields
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;
    const county = document.getElementById('county').value;
    const email = document.getElementById('email').value;

    // Do something with the collected data, e.g., send it to a server
    console.log('First Name: ${firstName}');
    console.log('Last Name: ${lastName}');
    console.log('Phone Number: ${phone}');
    console.log('County: ${county}');
    console.log('Email Address: ${email}');
});

const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        // Handle click event for social media icons (e.g., open corresponding URL)
        event.preventDefault();
        window.open(icon.href, '_blank');
    });
});
document.getElementById('playVideo').addEventListener('click', function() {
});
function playVideo() {
  var video = document.getElementById("charity event.mp4");
  video.play();
}