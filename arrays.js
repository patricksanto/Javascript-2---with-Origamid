// const botao = document.querySelector(".botao");

// function clicando() {
//   const texto = document.querySelector(".texto");
//   texto.classList.toggle("ativar");
// }

// botao.addEventListener("click", clicando);
// window.addEventListener("mousemove", seguirMouse);

// function seguirMouse(event) {
//   const circulo = document.querySelector(".circulo");
//   circulo.style.top = event.y - 35 + "px";
//   circulo.style.left = event.x - 35 + "px";
// }

// const botao = document.querySelector(".circulo");

// function circuloClick() {
//   botao.classList.add("circulocolorido");
//   window.mou;
// }
// botao.addEventListener("click", circuloClick);

// function fact(x) {
//   if (x == 1) return 1;
//   return x * fact(x - 1);
// }
// console.log(fact(5));

// function Carro(marca, preco) {
//   this.marca = marca;
//   this.preco = preco;
// }

// const Honda = new Carro("Honda", 8600);
// const Fiat = new Carro("Fiat", 4500);

// function Carro2(marca, precoInicial) {
//   const taxa = 1.2;
//   const precoFinal = precoInicial * taxa;
//   this.marca = marca;
//   this.precoInicial = precoFinal;
// }

// const Chevette = new Carro2("Chevettao", 2500);

// function Dom(objeto) {
//   this.seletor = function () {
//     return document.querySelector(objeto);
//   };
//   this.ativar = function () {
//     this.seletor().classList.add("ativo");
//   };
// }

// const li = new Dom("li");

// Transforme o objeto abaixo em uma Constructor Function
function pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new pessoa("Joao", 20);
const maria = new pessoa("Maria", 25);
const bruno = new pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

// function Dom(seletor) {
//   this.elements = function () {
//     return document.querySelectorAll(seletor);
//   };
//   this.addClass = function () {
//     const elemento = this.elements();
//     elemento.forEach((e) => {
//       e.classList.add("classe");
//     });
//   };
//   this.removeClass = function () {
//     const elemento = this.elements();
//     elemento.forEach((e) => {
//       e.classList.remove("classe");
//     });
//   };
// }

function Dom2(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((elemento) => {
      elemento.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((elemento) => {
      elemento.classList.remove(classe);
    });
  };
}
const li = new Dom2("li");
