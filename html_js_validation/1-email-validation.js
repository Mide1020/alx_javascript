document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the form and error message element
    const form = document.getElementById('myForm');
    const errorElement = document.getElementById('error');

    // Attach an event listener to the form's submit event
    form.addEventListener('submit', function (event) {
        // Get the email input field value
        const email = document.getElementById('email').value;

        // Call the validateEmail function to perform validation
        if (!validateEmail(email)) {
            // If the email format is incorrect, prevent form submission and display an error message
            event.preventDefault(); // Prevent the form from submitting
            errorElement.textContent = 'Please enter a valid email address.';
        }
    });

    // Function to validate the email format
    function validateEmail(email) {
        // Define a regular expression for a standard email format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Test the email against the regex pattern
        return emailRegex.test(email);
    }
});
