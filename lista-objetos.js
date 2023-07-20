const client = {
    name: "João",
    age: 24,
    email: "joao@exemplo.com",
    phoneNumbers: ["(41) 1111-1111", "(41) 2222-2222"] 
};
client.adresses = [
    {
    street: "Rua Almeida Aves",
    num: "123",
    apartament: true,
    complement: "apartamento 99"
    }
];
client.adresses.push({
    street: "rua doutor rafi salum",
    num: 444,
    apartament: false
});
const onlyApartaments = client.adresses.filter(
    (adress) => adress.apartament === true
);
console.log(onlyApartaments);
