

document.addEventListener("DOMContentLoaded", function () {
    const showSignupBtn = document.getElementById('showSignup');
    const showLoginBtn = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const modalTitle = document.getElementById('exampleModalLabel');

    showSignupBtn.addEventListener('click', () => {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        modalTitle.innerText = 'Sign Up';
    });

    showLoginBtn.addEventListener('click', () => {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
        modalTitle.innerText = 'Login';
    });

    document.querySelectorAll(".toggle-password").forEach((icon) => {
        icon.addEventListener("click", () => {
            const input = document.querySelector(icon.getAttribute("toggle"));
            const type = input.getAttribute("type") === "password" ? "text" : "password";
            input.setAttribute("type", type);
            icon.classList.toggle("fa-eye");
            icon.classList.toggle("fa-eye-slash");
        });
    });

    // Login validation
    document.getElementById("loginRealForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");
        let valid = true;

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.value.match(emailPattern)) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        const passwordValue = password.value;
        const hasLetter = /[a-zA-Z]/.test(passwordValue);
        const hasNumber = /[0-9]/.test(passwordValue);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);

        if (passwordValue.length < 6 || !hasLetter || !hasNumber || !hasSpecialChar) {
            passwordError.textContent = "Password must be at least 6 characters and include a letter, number, and special character.";
            valid = false;
        } else {
            passwordError.textContent = "";
        }

        if (valid) {
            alert("Login successful!");
        }
    });

    // Signup validation
    document.getElementById("signupRealForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("signupEmail");
        const password = document.getElementById("signupPassword");
        const confirmPassword = document.getElementById("signupConfirmPassword");
        const emailError = document.getElementById("signupEmailError");
        const passwordError = document.getElementById("signupPasswordError");
        const confirmPasswordError = document.getElementById("confirmPasswordError");
        let valid = true;

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.value.match(emailPattern)) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        const passwordValue = password.value;
        const hasLetter = /[a-zA-Z]/.test(passwordValue);
        const hasNumber = /[0-9]/.test(passwordValue);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);

        if (passwordValue.length < 6 || !hasLetter || !hasNumber || !hasSpecialChar) {
            passwordError.textContent = "Password must be at least 6 characters and include a letter, number, and special character.";
            valid = false;
        } else {
            passwordError.textContent = "";
        }

        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            valid = false;
        } else {
            confirmPasswordError.textContent = "";
        }

        if (valid) {
            alert("Signup successful!");
        }
    });
});
// About work
document.addEventListener("DOMContentLoaded", function () {
    var dropdownElement = document.querySelectorAll('.dropdown-toggle');
    dropdownElement.forEach(function (dropdown) {
        new bootstrap.Dropdown(dropdown);
    });
});
