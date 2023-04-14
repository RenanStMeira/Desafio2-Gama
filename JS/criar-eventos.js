
const nome = document.querySelector('#nome');
const artist = document.querySelector('#atracoes');
const description = document.querySelector('#descricao');
const date = document.querySelector('#data');
const tickets = document.querySelector('#lotacao');

const BASE_URL = "https://soundgarden-api.vercel.app/events";

const eventoForm = document.getElementById('form');

eventoForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Metodo para usar os valores do formulario com o metodo GET
  const formData = new FormData(event.target); 

  //dados do formulario para envio a API
  const novoEvento = {
            name: nome.value,
            poster: "https://as1.ftcdn.net/v2/jpg/01/08/17/48/1000_F_108174890_bPrqlS1Ziz40MUizqKTthmhx3q6jsuSK.jpg",
            attractions: artist.value.split(', '),
            description: description.value,
            scheduled: date.value,
            number_tickets: tickets.value,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'  // Tipo do corpo POST
    },
    body: JSON.stringify(novoEvento)
  };

  try {
    const response = await fetch(`${BASE_URL}`, options);  //  O objeto options contém a configuração do método POST a requisição do formato JSOn e o cabeçalho
    const data = await response.json();    // resposta de await é convertida em json
    alert('Evento criado com sucesso!');

  } catch (error) {
    alert('Erro ao criar evento. Verifique os campos e tente novamente.');
  }
});