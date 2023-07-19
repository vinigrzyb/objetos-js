const cliente = {
    nome: "andre",
    idade: 32,
    cpf: "123456789",
    email: "andre@exemplo.com"
};

// acessando dados com .
console.log(`O nome do cliente é ${cliente.nome}, seu email é ${cliente.email}.`); // "." permite acessar dados expecíficos do objeto
console.log(`OS 3 primeitos digitos do cpf são ${cliente.cpf.substring(0, 3)}.`); // .substring permite usar apenas uma parte de uma string

// acessando dacos com []
console.log(`O nome do cliente é ${cliente["nome"]}, seu email é ${cliente["email"]}.`);

