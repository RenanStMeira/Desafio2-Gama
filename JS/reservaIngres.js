const BASE_URL = 'https://soundgarden-api.vercel.app/bookings'
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const fechar = document.getElementsByClassName("close")[0];
const form = document.getElementById("reservationForm");
const reserv = document.getElementById('reserv');

btn.onclick = function() {
  modal.style.display = "block";
}

fechar.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

form.onsubmit = function(event) {
  event.preventDefault(); 
  // Obtem os dados do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const tickets = document.getElementById("tickets").value;
 
  // Cria um objeto com os dados do formulário
  const formData = new FormData();
  formData.append("nome", nome);
  formData.append("email", email);
  formData.append("tickets", tickets);
 
   

  
  // Envia os dados do formulário para o servidor usando fetch
  fetch(BASE_URL, { 
    mode: "no-cors",
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" }
  }) 
  
  .then(function(resposta) {
    if (resposta.ok) {
      // Se a resposta for bem-sucedida, você pode implementar a lógica de reserva do ingresso aqui
      alert("Reserva de ingresso realizada com sucesso!");
      modal.style.display = "none"; // Fecha o modal após o envio do formulário
    } else {
      alert("Erro ao fazer reserva de ingresso." );
    }
  })
  .catch(function(error) {
    alert("Erro ao fazer reserva de ingresso: " + error);
  });
}



