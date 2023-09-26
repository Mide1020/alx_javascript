document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the form and error message element
    const form = document.getElementById('myForm');
    const errorElement = document.getElementById('error');

    // Attach an event listener to the form's submit event
    form.addEventListener('submit', function (event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Get the password input field value
        const password = document.getElementById('password').value;

        // Call the validatePassword function to perform validation
        if (validatePassword(password)) {
            // If the password is valid, allow the form submission
            form.submit();
        } else {
            // If the password is invalid, display an error message
            errorElement.textContent = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.';
        }
    });

    // Function to validate the password
    function validatePassword(password) {
        // Define regular expressions for each password criteria
        const minLength = 8;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*]/;

        // Check each criteria
        const isLengthValid = password.length >= minLength;
        const hasUppercase = uppercaseRegex.test(password);
        const hasLowercase = lowercaseRegex.test(password);
        const hasDigit = digitRegex.test(password);
        const hasSpecialChar = specialCharRegex.test(password);

        // Return true if all criteria are met
        return isLengthValid && hasUppercase && hasLowercase && hasDigit && hasSpecialChar;
    }
});
