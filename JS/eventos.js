const BASE_URL = "https://soundgarden-api.vercel.app/events";
const enviarBtn = document.getElementById('enviar');
const nameInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const quantidadeInput = document.getElementById('quantidade');
const lnome_msg = document.getElementById('msg-vld-lname');
let id;


function getApiEventos() {
    fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resposta) => {
      return resposta.json();
    }).then((resposta) => {
  
      let lmEvento = "";
      console.log(resposta);
      resposta.reverse().forEach((user) => {
        id = user._id;
        let scheduled = user.scheduled.substring(0, 10);

        lmEvento+='<article class="evento card p-5 m-3"><h2>'+user.name+' - '+scheduled+'</h2>';
        lmEvento+="<h4>"+user.attractions
        +"</h4>";
        lmEvento+="<p>"+user.description+"</p>";
        lmEvento+='<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">reserlet ingresso</button>';
        lmEvento+="</article>";
      });
      document.getElementById("lsEvento").innerHTML = lmEvento;

    }).catch((erro) => {
      console.log(erro);
    });
}
getApiEventos();

enviarBtn.onclick = function(event){
    lnome_msg.style.display = 'none';
    if (nameInput.value === "" || emailInput.value === "" || quantidadeInput.value === "") {
        event.preventDefault(); 
        lnome_msg.style.display = 'block';
    } else {
        event.preventDefault();
        let requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "owner_name": nameInput.value,
              "owner_email": emailInput.value,
              "number_tickets": quantidadeInput.value,
              "event_id": id
          }),
        };
          
        fetch(BASE_URL, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
      
    }
}