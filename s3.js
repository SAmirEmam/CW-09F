function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

function validateForm() {
    let isValid = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("retype-password").value;

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

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if(!passwordPattern.test(password)){
        passwordError.textContent = "Please enter a valid password"
        isValid = false;
    }

    if(rePassword != password){
        rePasswordError.textContent = "retyped password doesn't match the original one.";
        isValid = false;
    }

    if(isValid){
        submitSuccess.textContent = "SUCCESSFUL!"
    }

    return isValid;
}