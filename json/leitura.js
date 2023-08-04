const dados = require("./cliente.json");
console.log(dados);
console.log(typeof dados);

const clienteString = JSON.stringify(dados); // JSON.stringify() transforma objeto json em string
console.log(clienteString);
console.log(typeof clienteString);
console.log(clienteString.nome);

const clienteObjeto = JSON.parse(clienteString); // JSON.parse() transforma string em objeto
console.log(clienteObjeto);