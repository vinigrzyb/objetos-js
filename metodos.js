const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@exemplo.com",
    telefones: ["(41) 1111-1111", "(41) 2222-2222"] 
};
cliente.endereco = {
    rua: "Rua Almeida Aves",
    num: "123",
    ap: true,
    complemento: "apartamento 99"
};
const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);
if (!chavesDoObjeto.includes("endereco")){ // ! antes do parametro : sinal de negação, faz o oposto
    console.error("ERRO: é necessário ter um endereço cadastrado");
};
