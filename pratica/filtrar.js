const clientes = require("./clientes.json");
function filtro(clientes){ //filtra apartanentos que não tem complemento
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento === true)
    })    
}