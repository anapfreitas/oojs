function Veiculo(marca, modelo, preco) {
    this.marca = marca;
    this.modelo = modelo;

    let _preco = preco;
    
    this.getPreco = function(){
        return _preco;
    }

    this.setPreco = function(valor) {
        if(typeof valor == "number" && valor >= 0){
            _preco = valor;
        }
    }

    this.aumentarPreco = function (percentual) {
        const novoPreco = _preco * (1 + percentual / 100);
        _preco = novoPreco;
    }

    this.detalhes = function (){
        console.log(`${this.marca} ${this.modelo} custa R$ ${_preco.toFixed(2)}`);
    }
}

function Carro (marca, modelo) {
    Veiculo.call(this, marca, modelo, 50000);
    this.aumentarPreco = function () {
        const novoPreco = this.getPreco () * 1.05;
        this.setPreco(novoPreco);
    }
}

function Moto (marca, modelo) {
    Veiculo.call(this, marca, modelo, 20000);
    this.aumentarPreco = function () {
        const novoPreco = this.getPreco () * 1.08;
        this.setPreco(novoPreco);
    }
}

const carro1 = new Carro ("Toyota","Corolla");
const moto1 = new Moto ("Honda","CG 160");
const moto2 = new Moto ("Yamaha","Fazer 250");

carro1.aumentarPreco();
carro1.detalhes();

moto1.aumentarPreco();
moto1.detalhes();

moto2.aumentarPreco();
moto2.detalhes();