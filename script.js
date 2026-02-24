const clientes = document.getElementById("listaclientes");
fetch("https://crudcrud.com/api/18aa0856b58f4ee38acc2b950eecb330/clientes")
.then(resposta => resposta.json())
.then((listaDeClientes) => {

    listaDeClientes.forEach(cliente => {
        const item = document.createElement("li");
        item.innerHTML = `${cliente.descricao} ${cliente.email} <button id="removecliente('${cliente.id}')">Remover</button>`;
        clientes.appendChild(item);
        
    });
});

document.getElementById("add").addEventListener("click", () => {
    const descricao = document.getElementById("nome").value;
    const elemento = document.getElementById("email").value;

    const cliente = {
        descricao: descricao,
        email: elemento
    }

    fetch("https://crudcrud.com/api/18aa0856b58f4ee38acc2b950eecb330/clientes",{

        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({descricao: descricao, email: elemento})

    })
    .then(resposta => resposta.json())
    .then((cliente) => {

        const item = document.createElement("li");
        item.innerHTML = `${cliente.descricao} ${cliente.email} <button id="removecliente('${cliente.id}')">Remover</button>`;
        clientes.appendChild(item);
    });
});

document.getElementById("removecliente").addEventListener("click", () => {
    fetch("https://crudcrud.com/api/18aa0856b58f4ee38acc2b950eecb330/clientes/removecliente/removeelemento",{
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
    
    });
});