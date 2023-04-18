const BASE_URL = 'https://soundgarden-api.vercel.app/bookings'
const bookBtn = document.getElementById('book-btn');
const modal = document.getElementById('booking-modal');
const closeBtn = document.getElementsByClassName('close')[0];
const confirmBookingBtn = document.getElementById('confirm-booking');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ticketsInput = document.getElementById('tickets');

bookBtn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

confirmBookingBtn.onclick = function() {
  const name = nameInput.value;
  const email = emailInput.value;
  const tickets = ticketsInput.value;

  fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      email: email,
      number_tickets: tickets,
      event_id: ''
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Reserva criada com sucesso!');
    } else {
      alert('Erro ao criar reserva. Por favor, tente novamente mais tarde.');
    }
  })
  .catch(error => {
    alert('Ocorreu um erro ao criar a reserva. Por favor, tente novamente mais tarde.');
  });

}
