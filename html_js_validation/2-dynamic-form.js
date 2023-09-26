document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the form, input container, and error message element
    const form = document.getElementById('myForm');
    const inputContainer = document.getElementById('inputContainer');
    const errorElement = document.getElementById('error');

    // Attach an event listener to the form's submit event
    form.addEventListener('submit', function (event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Retrieve the selected value from the dropdown menu
        const selectedValue = document.getElementById('fieldCount').value;

        // Call the generateInputFields function to generate the specified number of text input fields
        generateInputFields(selectedValue);
    });

    // Function to generate input fields based on the selected value
    function generateInputFields(fieldCount) {
        // Clear the existing input fields in the container
        inputContainer.innerHTML = '';

        // Validate the selected value
        if (isNaN(fieldCount) || fieldCount < 1) {
            errorElement.textContent = 'Please select a valid number of fields.';
            return;
        }

        // Clear any previous error message
        errorElement.textContent = '';

        // Create and append the specified number of text input fields
        for (let i = 1; i <= fieldCount; i++) {
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.name = 'field' + i;
            inputField.placeholder = 'Field ' + i;
            inputContainer.appendChild(inputField);
        }
    }
});
