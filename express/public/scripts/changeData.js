document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready!");

    document.getElementById("cpb").addEventListener("click", function(event) {
      event.preventDefault();

      const newPassword = document.getElementById("newPassword").value;

      fetch('/change-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newPassword })
      })
      .then(response => {
        if (response.ok) {
          window.location.reload();
        } else {
          console.error('Error:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });

    document.getElementById("ceb").addEventListener("click", function(event) {
      event.preventDefault();

      const newEmail = document.getElementById("newEmail").value;

      fetch('/change-email', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newEmail })
      })
      .then(response => {
        if (response.ok) {
          window.location.reload();
        } else {
          console.error('Error:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  });
