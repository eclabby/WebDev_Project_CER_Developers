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