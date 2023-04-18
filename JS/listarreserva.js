const BASE_URL = 'https://soundgarden-api.vercel.app/bookings'


function getApiIngressos() {
    fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resposta) => {
      return resposta.json();
    }).then((resposta) => {
     
      let tmIngresso = "";
      let id = 1
     console.log(resposta + 'Para conferir os ingressos do enevento click em OK');

      resposta.forEach((user) => {
        tmIngresso+="<tr><th scope='row'>"+id

        +"</th>";
        tmIngresso+="<td>"+user.owner_name+"</td>";
        tmIngresso+="<td>"+user.owner_email+"</td>";
        tmIngresso+="<td>"+user.number_tickets+"</td>";
        tmIngresso+="</tr>";
        id++;
      });

      document.getElementById("tIngresso").innerHTML = tmIngresso;

    }).catch((erro) => {
      alert(erro + 'Sua solicitação não foi atendida, tente novamente');
    });
}
  

getApiIngressos();