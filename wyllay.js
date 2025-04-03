// This script handles the form submission to a Google Apps Script web app
// and displays a success message to the user.
const scriptURL = 'https://script.google.com/macros/s/AKfycbzOt8h18qf5qFBJW7cTkLghqfy1gUmUa0FDznQ5-MItu24nF66rBgdcJ4N4wthlcijf/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(() => {
                msg.innerHTML = "";
                location.reload(); // Refresh the page
            }, 3000);
            form.reset(); // Reset the form fields
        })
      .catch(error => console.error('Error!', error.message))
  })