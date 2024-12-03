// Function to validate the form
function validateForm(event) 
{
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Resets previous errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = "");

    // Validates first name
    const firstname = document.getElementById('firstname').value.trim();
    if (firstname === "") {
        document.getElementById('firstnameerror').textContent = "First Name is required.";
        isValid = false;
    }

    // Validates last name
    const lastname = document.getElementById('lastname').value.trim();
    if (lastname === "") {
        document.getElementById('lastnameerror').textContent = "Last Name is required.";
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
    const inquiryReason = document.getElementById('inquiryreason').value;
    if (!inquiryReason) {
        document.getElementById('inquiryreasonerror').textContent = "Please select a reason for your inquiry.";
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
