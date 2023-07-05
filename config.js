const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

const anoDeCriacao = empresas.filter(empresa => (empresa.anoDeCriacao > 2000));

console.log( anoDeCriacao );

const estoque = [
    {codigo: 1, descrição: "Coca-cola", unidade: "Lata", valor: 5.00},
    {codigo: 1, descrição: "Guaraná", unidade: "Lata", valor: 5.00},
    {codigo: 1, descrição: "Haineken", unidade: "Garrafa", valor: 5.00},
    {codigo: 1, descrição: "Original", unidade: "Garrafa", valor: 5.00},
    {codigo: 1, descrição: "Spaten", unidade: "Garrafa", valor: 5.00},
    {codigo: 1, descrição: "Laranjinha", unidade: "Ks", valor: 5.00},
    {codigo: 1, descrição: "Sprite", unidade: "Lata", valor: 5.00}
];

const tipoLata = estoque.filter(element => element.unidade === "Lata")
console.log(tipoLata)