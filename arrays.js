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
// function pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.andar = function () {
//     console.log(this.nome + " andou");
//   };
// }

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
// const joao = new pessoa("Joao", 20);
// const maria = new pessoa("Maria", 25);
// const bruno = new pessoa("Bruno", 15);

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

// function Dom2(seletor) {
//   const elementList = document.querySelectorAll(seletor);
//   this.elements = elementList;
//   this.addClass = function (classe) {
//     elementList.forEach((elemento) => {
//       elemento.classList.add(classe);
//     });
//   };
//   this.removeClass = function (classe) {
//     elementList.forEach((elemento) => {
//       elemento.classList.remove(classe);
//     });
//   };
// }
// const li = new Dom2("li");

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
const comidasPrimeiro = comidas.shift();
// Remova o último valor de comidas e coloque em uma variável
const comidasultimo = comidas.pop();
// Adicione 'Arroz' ao final da array
comidas.push("Arroz");
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe", "Batata");
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana"));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana"));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
// console.log(html.split("section").join("ul").split("div").join("li"));

// const carros = ["Ford", "Fiat", "VW", "Honda"];
// // Remova o último carro, mas antes de remover
// // salve a array original em outra variável
// const carros2 = carros.slice();
// carros.pop();
// console.log(carros2);
// console.log(carros);

// const numeros = [2, 4, 56, 76, 4, 23, 876, 98, 45, 32, 45];

// const numeroMaior = numeros.reduce(
//   (anterior, atual) => (anterior > atual ? anterior : atual),
//   0
// );
// console.log(numeroMaior);

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);
const objetoCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});
console.log(objetoCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maioresQueCem = numeros.filter((x) => x > 100);
console.log(maioresQueCem);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
console.log(
  instrumentos.some((n) => {
    return n === "Baixo";
  })
);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace("R$ ", "").replace(",", ".");
  return acumulador + precoLimpo;
}, 0);

console.log(valorTotal);
