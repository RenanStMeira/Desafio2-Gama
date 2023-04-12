const url = 'https://soundgarden-api.vercel.app/events/'

const nameEdit = document.querySelector('#nome')
const nameBanner = document.querySelector('#banner')
const nameAtracoes = document.querySelector('#atracoes')
const namedata = document.querySelector('#data')
const namelotacao = document.querySelector('#lotacao')
const form = document.getElementById('form')

const id = URLSearchParams(window.location.search).get('id')

async function listarEventos() {
    const options = {
        method: "GET",
        redirect: "follow",
        headers: { "Content-Type": "application/json" },
    };

    const resposta = await fetch(`${url}/events/${id}`, options);

    const contentResposta = await resposta.json();

    nameEdit.value = contentResposta.nome;
    nameBanner.value = contentResposta.banner;
    nameAtracoes.value = contentResposta.atracoes
    namedata.value = contentResposta.data
    namelotacao.value = contentResposta.lotacao
};

listarEventos()

form.onsubmit = async (evento) => {
    evento.preventDefault();
    const atulizaevento = {
        nome: nameEdit.value,
        banner: nameBanner.value,
        atracoes: nameAtracoes.value,
        data: namedata.value,
        lotacao: namelotacao.value,
    }

    const options = {
        method: "PUT",
        body: JSON.stringify(atualizarEvento),
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
    };

    const resposta = await fetch(`${url}/events,${id}`, options);
    if (resposta.status == 200){
        alert("evento atualizado")
   }
    

}

