const form = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (password.value !== confirmPassword.value) {
    message.textContent = 'Passwords do not match!';
    return;
  }

  if (password.value.length < 6) {
    message.textContent = 'Password must be at least 6 characters!';
    return;
  }

  message.textContent = 'Sign-Up Successful!';
  message.style.color = 'green';

  
  username.value = '';
  email.value = '';
  password.value = '';
  confirmPassword.value = '';
});
