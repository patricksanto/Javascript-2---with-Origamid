// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];
let taxatotal = 0;

transacoes.forEach((item) => {
  if (item.descricao.slice(0, 3) === "Tax") {
    const valorTaxa = +item.valor.replace("R$ ", "");
    taxatotal += valorTaxa;
  }
});
console.log(`taxa total = R$${taxatotal}`);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

let novoHtml = html.split("span").join("a");
console.log(novoHtml);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";
const ultimoCar = frase.charAt(--frase.length);
console.log(ultimoCar);

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];
transacoes2.forEach((tran) => {
  tran = tran.toLowerCase().trim();
  tran = tran.trim();
  console.log(tran);
});

const aleatorio = Math.random() * 10;
console.log(aleatorio.toFixed());

// Retorne um número aleatório
// entre 1050 e 2000

const aleatorio2 = Math.random() * (2000 - 1050 + 1) + 1050);
console.log(aleatorio2);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];
