const cliente = {
  nome: "Yuki",
  idade: 43,
  email: "yuki@xpto.com",
  telefone: ["1155555555", "11333333333"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo){
      console.log("Saldo insuficiente!");
    }
    else {
      this.saldo -= valor;
      console.log(`Pagamento realizado, Novo saldo: ${this.saldo}`);
    }    
  }
};
cliente.efetuaPagamento(10);

