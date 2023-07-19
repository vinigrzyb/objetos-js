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
//console.log(cliente);

function filtraAp(input) {
    if(input === true) {
        return `${cliente.nome} mora na ${cliente.endereco.rua}, ${cliente.endereco.num}, ${cliente.endereco.complemento}.`;
    } else {
        return `${cliente.nome} mora na ${cliente.endereco.rua}, ${cliente.endereco.num}.`;
    }
};
console.log("dados do cliente:");
console.log(`O nome do cliente é ${cliente.nome}, tem ${cliente.idade} anos, seu email é ${cliente.email}, e seu telefone é ${cliente.telefones[0]}.`);
console.log(filtraAp(cliente.endereco.ap));