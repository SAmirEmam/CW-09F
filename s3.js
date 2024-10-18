if (localStorage.getItem("theme") == "dark") {
  document.body.classList.toggle("dark-theme");
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function validateForm() {
  let isValid = true;

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const rePassword = document.getElementById("retype-password").value;

  sessionStorage.setItem("name", name);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("password", password);
  sessionStorage.setItem("rePassword", rePassword);

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const rePasswordError = document.getElementById("Retype-passwordError");
  const submitSuccess = document.getElementById("submit-message");

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  rePasswordError.textContent = "";
  submitSuccess.textContent = "";

  if (name.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long.";
    isValid = false;
  }

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  if (!passwordPattern.test(password)) {
    passwordError.textContent = "Please enter a valid password";
    isValid = false;
  }

  if (rePassword != password) {
    rePasswordError.textContent =
      "retyped password doesn't match the original one.";
    isValid = false;
  }

  if (isValid) {
    submitSuccess.textContent = "SUCCESSFUL!";
  }

  return isValid;
}

function setinput() {
  let name = sessionStorage.getItem("name");
  let email = sessionStorage.getItem("email");
  let password = sessionStorage.getItem("password");
  let repassword = sessionStorage.getItem("rePassword");

  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("password").value = password;
  document.getElementById("retype-password").value = repassword;

}
setinput()