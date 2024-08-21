class Conta {
    static proximoNumero = 1;

    constructor(nome, telefone, dataNascimento) {
        this.nome = nome;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.numeroConta = Conta.proximoNumero++;
        this.saldo = 1000;
    }
}

class Banco {
    constructor() {
        this.contas = [];
    }
    inserir() {
        const nome = prompt("Digite o nome completo:");
        const telefone = prompt("Digite o telefone:");
        const dataNascimento = prompt("Digite a data de nascimento (dd/mm/yyyy):");

        const novaConta = new Conta(nome, telefone, dataNascimento);
        this.contas.push(novaConta);
        alert(`Conta criada com sucesso! Número da conta: ${novaConta.numeroConta}`);
    }

    transferir() {
        const contaOrigemNumero = parseInt(prompt("Digite o número da conta de origem:"));
        const contaDestinoNumero = parseInt(prompt("Digite o número da conta de destino:"));
        const valor = parseFloat(prompt("Digite o valor a ser transferido:"));

        const contaOrigem = this.contas.find(conta => conta.numeroConta === contaOrigemNumero);
        const contaDestino = this.contas.find(conta => conta.numeroConta === contaDestinoNumero);

        if (!contaOrigem) {
            alert("Conta de origem não encontrada.");
            return;
        }

        if (!contaDestino) {
            alert("Conta de destino não encontrada.");
            return;
        }

        if (contaOrigem.saldo < valor) {
            alert("Saldo insuficiente para a transferência.");
            return;
        }

        contaOrigem.saldo -= valor;
        contaDestino.saldo += valor;
        alert(`Transferência de R$${valor.toFixed(2)} realizada com sucesso!`);
    }

    exibir() {
        const numeroConta = parseInt(prompt("Digite o número da conta:"));
        const conta = this.contas.find(conta => conta.numeroConta === numeroConta);

        if (conta) {
            alert(`Nome: ${conta.nome}\nTelefone: ${conta.telefone}\nData de Nascimento: ${conta.dataNascimento}\nNúmero da Conta: ${conta.numeroConta}\nSaldo: R$${conta.saldo.toFixed(2)}`);
        } else {
            alert("Conta não encontrada.");
        }
    }

    remover() {
        const numeroConta = parseInt(prompt("Digite o número da conta a ser removida:"));
        const indiceConta = this.contas.findIndex(conta => conta.numeroConta === numeroConta);

        if (indiceConta !== -1) {
            this.contas.splice(indiceConta, 1);
            alert("Conta removida com sucesso.");
        } else {
            alert("Conta não encontrada.");
        }
    }

    debitar() {
        const numeroConta = parseInt(prompt("Digite o número da conta:"));
        const valor = parseFloat(prompt("Digite o valor a ser debitado:"));
        const conta = this.contas.find(conta => conta.numeroConta === numeroConta);

        if (!conta) {
            alert("Conta não encontrada.");
            return;
        }

        if (conta.saldo < valor) {
            alert("Saldo insuficiente.");
            return;
        }

        conta.saldo -= valor;
        alert(`Débito de R$${valor.toFixed(2)} realizado com sucesso!`);
    }
}

const banco = new Banco();