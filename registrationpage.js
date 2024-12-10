// auth.js

// Register a new user and save the data in localStorage
function registerUser(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if username or email already exists
    if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose another.");
    } else {
        // Save user details as a JSON object in localStorage
        const userData = {
            email: email,
            password: password
        };

        localStorage.setItem(username, JSON.stringify(userData));
        alert("Registration successful! Redirecting to login page...");
        window.location.href = "login.html"; // Redirect to login page
    }
}

// Validate the user credentials on login
function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userData = localStorage.getItem(username);

    if (userData) {
        const storedData = JSON.parse(userData);

        if (storedData.password === password) {
            alert("Login successful! Welcome to the quiz game.");
            window.location.href = "quiz.html"; // Redirect to quiz or welcome page
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("User not found. Please register.");
    }
}
