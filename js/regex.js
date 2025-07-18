// script.js

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission

    // Clear previous error messages
    
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    // Define regex patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let counter = 0;
    // Validate email
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';

    }

    // Validate password
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').innerText = 
            'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.';
            counter = counter+1;

        }

        if (counter >= 3){

        }

    // If both fields are valid, you can submit the form or perform the desired action
    if (emailRegex.test(email) && passwordRegex.test(password)) {
        // Submit the form or handle the data
        alert('Form submitted successfully!');
        counter = 0;
    }
});


