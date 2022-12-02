// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
Pessoas.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome} tem ${this.idade} anos de idade`;
};

const patrick = new Pessoas("patrick", "Silva", 30);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //'HTMLLIElement'//
li.click; //function//
li.innerText; //String//
li.value; //number//
li.hidden; //boollean //
li.offsetLeft; //number //
li.click(); //undefinied//

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //string//

// Liste 5 objetos nativos

Object;
String;
Array;
Boolean;
Function;
Number;
Math;

// Liste 5 objetos do browser

Window;
History;
Document;
NodeList;
HTMLCollection;
querySelector;

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.onanimationcancel !== "undefined") {
  console.log("existe");
}
