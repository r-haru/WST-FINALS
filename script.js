function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup(response) {
    document.getElementById('popup').style.display = 'none';
    if (response === 'yes') {
        window.location.href = 'menu.html'; // Redirect to the menu page
    }
    // If response is 'no', just close the popup and stay on the home page
}
