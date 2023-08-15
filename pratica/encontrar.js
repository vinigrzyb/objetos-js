const clientes = require("./clientes.json");
function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}
const encontrado1 = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar(clientes, "telefone", "4733865848");
console.log(encontrado2);