const BASE_URL = 'https://soundgarden-api.vercel.app:';

const nameInput = document.getElementById("nome");
const bannerinput = document.getElementById("banner");
const inputAtracoes = document.getElementById("atracoes");
const atracaoInput = document.getElementById("descricao");
const dataInput = document.getElementById("data");
const lotacaoInput = document.getElementById("lotacao");
const form = document.querySelector("form");

const id = new URLSearchParams(window.location.search).get("id");

async function exibirEventos() {
  const options = {
    method: "GET",
    redirect: "follow",
    headers: { "Content-Type": "application/json" },
  };
  const resposta = await fetch(`${BASE_URL}/events/${id}`, options);

  const conteudoResposta = await resposta.json();
  nameInput.value = conteudoResposta.name;
  bannerinput.value = conteudoResposta.poster;
  inputAtracoes.value = conteudoResposta.attractions;
  atracaoInput.value = conteudoResposta.description;
  dataInput.value = conteudoResposta.scheduled.slice(0, 16);
  lotacaoInput.value = conteudoResposta.number_tickets;
}
exibirEventos();

form.onsubmit = async (evento) => {
  evento.preventDefault();

  const atualizarEvento = {
    name: nameInput.value,
    poster: bannerinput.value,
    attractions: inputAtracoes.value.split(","),
    description: atracaoInput.value,
    scheduled: dataInput.value,
    number_tickets: lotacaoInput.value,
  };

  const options = {
    method: "PUT",
    body: JSON.stringify(atualizarEvento),
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
  };

  const resposta = await fetch(`${BASE_URL}/events/${id}`, options);
  if (resposta.status == 200) {
    alert("Evento atualizado com sucesso!!");
  }
};