document.getElementById('booking-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;


  const selectedDate = new Date(date);
  const day = selectedDate.getDay(); // 0 = Κυριακή, 6 = Σάββατο

  if (day === 0 || day === 6) {
    alert("Η κράτηση είναι διαθέσιμη μόνο από Δευτέρα έως Παρασκευή.");
    return;
  }

  // Αργότερα: αποστολή σε Firebase
  console.log("Booking submitted:", { name, email, date, time });

  document.getElementById('success-message').style.display = 'block';
  this.reset();
});
