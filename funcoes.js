const cliente = {
    nome: "João",
    email: "joao@exemplo.com",
    telefones: ["(41) 1111-1111", "(41) 2222-2222"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if(valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else{
            this.saldo -= valor;
            console.log(`O pagamento foi realizado, seu novo saldo é ${this.saldo}R$`);
        }
    }
};
cliente.efetuaPagamento(25);