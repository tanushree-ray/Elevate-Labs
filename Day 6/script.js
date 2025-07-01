document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('successMsg').textContent = '';

  let valid = true;
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required';
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email format';
    valid = false;
  }

  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required';
    valid = false;
  }

  if (valid) {
    document.getElementById('successMsg').textContent = 'Form submitted successfully!';
    document.getElementById('contactForm').reset();
  }
});
