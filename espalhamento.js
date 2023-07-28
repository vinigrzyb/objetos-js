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
function ligaParaCliente(telefoneComercial, telefonePessoal){
    console.log(`Ligando para ${telefoneComercial}.`);
    console.log(`Ligando para ${telefonePessoal}.`);
};
ligaParaCliente(...cliente.telefones);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco, // "..." espalha os elementos de um objeto no outro "juntando" os dois
};
console.log(encomenda);
