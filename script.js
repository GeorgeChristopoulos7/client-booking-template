document.getElementById('booking-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  console.log("Booking submitted:", { name, email, date, time });

  // Αργότερα μπορείς να στείλεις αυτά τα δεδομένα σε Firebase εδώ

  document.getElementById('success-message').style.display = 'block';
  this.reset(); // Καθαρίζει τη φόρμα
});
