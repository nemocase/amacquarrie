// Retrieve text files
fetch('about.txt')
    .then(response => response.text())
    .then(text => document.getElementById('about').innerHTML = text)

// Apply text files
