const clientes = document.getElementById("controleClientes");
fetch("https://crudcrud.com/api/6150dc511c644513a088048a20f33d73")
.then(resposta => resposta.json())
.then((controleDeClientes) => (

    controleDeClientes.forEach(cliente => {
        const item = document.createElement("li");
        item.innerHTML = `${cliente.descricao} <button onclick="remove(${cliente._id})">x</button>`;
        clientes.appendChild(item);
        
    });
));

document.getElementById("add").addEventListener("click", () => {
    const descricao = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const cliente = {descricao: descricao, email: email};


    fetch("https://crudcrud.com/api/6150dc511c644513a088048a20f33d73",{

        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({descricao: descricao, email: email})

    })
    .then(resposta => resposta.json())
    .then((cliente) => {

        const item = document.createElement("li");
        item.innerHTML = `${cliente.descricao} <button onclick= remove('${cliente._id}')>x</button>`;
        clientes.appendChild(item);
    })
}
)

function remove (_id) {
    fetch("https://crudcrud.com/api/6150dc511c644513a088048a20f33d73",{
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
    });
}