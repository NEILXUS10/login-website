document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Log data to the console (only you as the developer can see this)
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    
    // Hide the login form and show a simple "logged in" message to the user
    document.getElementById('loginContainer').classList.add('hidden');
    document.getElementById('userContainer').classList.remove('hidden');
    
    // Display a message without sensitive data
    document.getElementById('loggedInUser').textContent = `You are logged in as: ${email}`;
});

document.getElementById('logoutButton').addEventListener('click', function() {
    // Clear the input fields (optional)
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    
    // Show the login form and hide the user container
    document.getElementById('loginContainer').classList.remove('hidden');
    document.getElementById('userContainer').classList.add('hidden');
});