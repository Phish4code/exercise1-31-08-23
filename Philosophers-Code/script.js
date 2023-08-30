document.addEventListener("DOMContentLoaded", function() {
    let isDarkMode = false;

    // Initialize button and add it to the page
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = 'Toggle Dark Mode';
    toggleButton.id = 'toggle-theme';
    document.body.appendChild(toggleButton);

    // Event Listener for Theme Toggle Button
    document.getElementById('toggle-theme').addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#FFF';
        } else {
            document.body.style.backgroundColor = '#f4f4f4';
            document.body.style.color = '#333';
        }
    });
});
