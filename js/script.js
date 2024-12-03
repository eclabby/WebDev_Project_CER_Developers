function validateForm(event) {

    event.preventDefault();

    let isValid = true;
    
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = "");

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let dropdown = document.getElementById('dropdown').value;
    let message = document.getElementById('message').value;

    // Validations
    if (fname === "") {
        document.getElementById('fnameerror').textContent = "First Name is required.";
        isValid = false;
    }

    if (lname === "") {
        document.getElementById('lnameerror').textContent = "Last Name is required.";
        isValid = false;
    }

    if (email === "") {
        document.getElementById('emailerror').textContent = "An email address is required.";
        isValid = false;
    } 
    else if (!emailRegex.test(email)) {
        document.getElementById('emailerror').textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (!dropdown) {
        document.getElementById('dropdownerror').textContent = "Please select a reason for your inquiry.";
        isValid = false;
    }

    if (message === "") {
        document.getElementById('messageerror').textContent = "A message is required.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully");
        document.querySelector('.contact-form').reset();
        document.querySelector('.contact-form').submit();
    }
}
