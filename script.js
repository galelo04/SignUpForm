const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function validatePasswords() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity('Passwords do not match.');
  } else {
    confirmPassword.setCustomValidity('');
  }
  // confirmPassword.reportValidity(); 
}

confirmPassword.addEventListener('input', validatePasswords);