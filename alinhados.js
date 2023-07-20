const client = {
    nome: "João",
    idade: 24,
    email: "joao@exemplo.com",
    telefones: ["(41) 1111-1111", "(41) 2222-2222"] 
};
client.endereco = {
    rua: "Rua Almeida Aves",
    num: "123",
    ap: true,
    complemento: "apartamento 99"
};
//console.log(cliente);

function filtraAp(input) {
    if(input === true) {
        return `${client.nome} mora na ${client.endereco.rua}, ${client.endereco.num}, ${client.endereco.complemento}.`;
    } else {
        return `${client.nome} mora na ${client.endereco.rua}, ${client.endereco.num}.`;
    }
};
console.log("dados do cliente:");
console.log(`O nome do cliente é ${client.nome}, tem ${client.idade} anos, seu email é ${client.email}, e seu telefone é ${client.telefones[0]}.`);
console.log(filtraAp(client.endereco.ap));