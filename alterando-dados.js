// adicionando elementos no ojeto
const p = {
    nome: "Fernanda",
    email: "fernanda@exemplo.com",
    cargo: "administrativo"
};
console.log(p.nome);

p.tel = "(41) 1234-5678"; // a alteração é lida na ordem do código, então se for chamado antes da declaração, não haverá mudança
console.log(p.tel);

console.log(p)

// alterando elementos do objeto
p.nome = "fernanda Keila Grzyb"; // a alteração é lida na ordem do código
console.log(p); 