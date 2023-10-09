// // 1 - métodos
// const animal = {
//     nome: "Galego",
//     miau: function() {
//         console.log("Miau miau");
//     },
// };

// console.log(animal)
// animal.miau()

// // 2 - aprofundando em métodos
// const person = {
//     name: "Marcos",

//     getName: function(){
//         return this.name;
//     },

//     setName: function(newName) {
//         this.name = newName;
//     },
// };

// console.log(person.name)
// console.log(person.getName())

// person.setName("Marcelo");
// console.log(person.getName())

// 3 - prototype
// const text = "aaah";
// console.log(Object.getPrototypeOf(text));

// const bool = true;
// console.log(Object.getPrototypeOf(bool));

// const arr = [];
// console.log(arr.length);
// console.log(Object.getPrototypeOf(arr));

// 4 - Classes básicas

// const cachorro = {
//     raca: null,
//     patas: 4,
// };

// const pitbull = Object.create(cachorro);

// pitbull.raca = "Pitbull";

// console.log(pitbull);
// console.log(pitbull.patas);

// const doberman = Object.create(cachorro);

// doberman.raca = "Doberman";

// console.log(doberman);
// console.log(doberman.patas);

// // 5 - função como classe - função construtora
// function criarCachorro(nome, raca) {
//     const cachorro = Object.create({});

//     cachorro.nome = nome;
//     cachorro.raca = raca;

//     return cachorro;
// }

// const cachorro1 = criarCachorro("Bob", "Vira-lata")
// console.log(cachorro1)

// const cachorro2 = criarCachorro("Espaike", "salsicha")
// console.log(cachorro2)

// 6 - funções como classe
// function Cachorro(nome, raca) {
//     this.nome = nome;
//     this.raca = raca;
// }

// const doberman1 = new Cachorro("Mike", "Doberman");
// console.log(doberman1)

// // 7 - métodos na função construtora
// Cachorro.prototype.uivar = function () {
//     console.log("Está latindo");
// };

// console.log(Cachorro.prototype);

// doberman1.uivar();

// // 8 - classes es6
// class Cachorro2 {    // versão idela para ser usada
//     constructor(nome, raca) {
//         this.nome = nome;
//         this.raca = raca;
//     };
// };

// const bardock = new Cachorro2("Bardock", "Vira-lata");
// console.log(bardock);

// console.log(Object.getPrototypeOf(bardock));

// 9 - mais sobre classes
class Caminhao {
    constructor(quantidadeRodas, corCaminhao) {
        this.quantidadeRodas = quantidadeRodas;
        this.corCaminhao = corCaminhao;
    };

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.quantidadeRodas} rodas e a cor dele é ${this.corCaminhao}`);
    }
};

const volvo = new Caminhao(12, "Branco");
console.log(volvo);

volvo.descreverCaminhao();

// 10 - getter e setter
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    };

    get exibirTitulo() {
        return `Tu está lendo: ${this.titulo}`;
    }

    set addTags(tags) {
        const tagsArray = tags.split(", ");
        this.tags = tagsArray
    }
};

const myPost = new Post("Qualquer post", "É sobre carro");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.addTags = "Celta, vermelho, placa: São Paulo";

console.log(myPost);

// 12 - Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Vaca extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}

const aurora = new Vaca(4, "Aurora");

console.log(aurora);

// 13 - instanceof 
console.log(aurora instanceof Vaca);

console.log(new Caminhao(12, "Branco") instanceof Mamifero);

console.log(new Vaca(4, "Aurora") instanceof Mamifero);