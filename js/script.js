/*

function validateForm() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    

    if (fname === '') {
        alert("First Name field required");
        return false;
    }

    if (lname === '') {
        alert("Last Name field required");
        return false;
    }

    if (email === '') {
        alert("Email field required");
        return false;
    }

    if (message === '') {
        alert("Please enter a message");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    return true;
}

*/

// Function to validate the form
function validateForm(event) 
{
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Resets previous errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = "");

    // Validates first name
    const fname = document.getElementById('fname').value.trim();
    if (fname === "") {
        document.getElementById('fnameerror').textContent = "First Name is required.";
        isValid = false;
    }

    // Validates last name
    const lname = document.getElementById('lname').value.trim();
    if (lname === "") {
        document.getElementById('lnameerror').textContent = "Last Name is required.";
        isValid = false;
    }

    // Validates email address
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        document.getElementById('emailerror').textContent = "Email Address is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailerror').textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validates reason for inquiry
    const dropdown = document.getElementById('dropdown').value;
    if (!dropdown) {
        document.getElementById('dropdownerror').textContent = "Please select a reason for your inquiry.";
        isValid = false;
    }

    // Validates message
    const message = document.getElementById('message').value.trim();
    if (message === "") {
        document.getElementById('messageerror').textContent = "Message is required.";
        isValid = false;
    }

    // If the form is valid, submit it
    if (isValid) {
        alert("Form submitted successfully!");
    }
}