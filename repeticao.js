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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if(tipo !== "object" && tipo !== "functon") {
        console.log(`a chave ${chave} tem o valor ${cliente[chave]}`);
    }
   // console.log(`a chave ${chave} tem o valor ${cliente[chave]}`);
}