const url = 'https://soundgarden-api.vercel.app/events';

async function listarEventos() {
    const tabela = document.querySelector("tbody");
    const response = await fetch(`${url}`, {
      method: "GET",
      redirect: "follow",
      headers: { "Content-Type": "application/json" },
    });


    const dateCorret = (date) => {
      let data = date.split("");
      let dataArrumada =
        data.slice(8, 10).join("")  + '/' +
        data.slice(5, 7).join("")  + '/' +
        data.slice(0, 4).join("");
      return dataArrumada;
    };
  
    const contentResponse = await response.json();
    contentResponse.forEach((item) => {
      tabela.innerHTML += `<tr>
      <th scope="row">${contentResponse.indexOf(item) + 1}</th>
      <td>${dateCorret(item.scheduled)}
        </td>
      <td>${item.name}</td>
      <td>${item.attractions}</td>
      <td>
          <a href="reservas.html?id=${
            item._id
          }" class="btn btn-dark">ver reservas</a>
          <a href="editar-evento.html?id=${
            item._id
          }" class="btn btn-secondary">editar</a>
          <a href="excluir-evento.html?id=${
            item._id
          }" class="btn btn-danger2">excluir</a>
      </td>
  </tr>`;
    });
  }
  
  listarEventos();