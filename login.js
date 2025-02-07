document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can expand this)
    if (username === '' || password === '') {
        alert('Please fill in all fields');
    } else {
        alert('Login successful!'); // Replace with actual login logic
        // Here you can add your login logic (e.g., API call)
    }
});