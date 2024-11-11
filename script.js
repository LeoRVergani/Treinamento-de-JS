var total = 10 + 5 * 2 / 2 + 20;
console.log(total)

var n1 = 'script';
var n2 = 20;
console.log(+n1 + 20);

var n3 = "200";
var n4 = 50;
console.log(+n3 + n4)

var n = '80';
var u = 'kg';
var peso = n + u;
var pesoPorDois = peso / 2;
console.log(pesoPorDois)

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

let idadePessoal = 18;
if ( idadePessoal > 18) {
    console.log("É de maior")
} else if (idadePessoal == 18){
    console.log("É igual")
} else {
    console.log("É de menor")
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil === china) {
    console.log("São iguais.")
} else {
    console.log("Não são iguais.")
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}