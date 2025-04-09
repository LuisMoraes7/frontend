let salario = (prompt("salário inicial: "));
let anoInicial = 1995;
let anoAtual = new Date().getFullYear();
let percentual = 0.0015; 

for (let ano = 1996; ano <= anoAtual; ano++) {
  salario += salario * percentual;
  percentual *= 2;
}

console.log(`Salário atual em ${anoAtual}: R$ ${salario.toFixed(2)}`);
