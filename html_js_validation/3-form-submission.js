document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the form and error/success message elements
    const form = document.getElementById('myForm');
    const errorElement = document.getElementById('error');
    const successElement = document.getElementById('success');

    // Attach an event listener to the form's submit event
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Retrieve the values entered in the form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Use JavaScript validation to ensure required fields are filled
        if (name.trim() === '' || email.trim() === '') {
            // Display an error message if any required field is empty
            errorElement.textContent = 'Please fill in all required fields.';
            successElement.textContent = ''; // Clear any previous success message
        } else {
            // Clear any previous error message
            errorElement.textContent = '';

            // Submit the form and display a success message
            successElement.textContent = 'Form submitted successfully!';
            
            // Optionally, you can submit the form to a server here using AJAX or another method.
            // Example:
            // sendFormDataToServer(name, email);

            // Reset the form fields after successful submission (optional)
            // form.reset();
        }
    });

    // You can also add a function here to send form data to the server using AJAX or another method
    // function sendFormDataToServer(name, email) {
    //     // Implement your server communication logic here
    // }
});
