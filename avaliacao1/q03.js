myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let maiorValor = myArray[0]
let menorValor = myArray[0]
const meio = Math.floor(myArray.length/2)
let mediana = myArray[0]

if (myArray.length % 2 == 0){
    let somaDosDois = 0;
    myArray.forEach((num, index) => {
      if (index === meio - 1 || index === meio) {
        somaDosDois += num;
      }
    })
    mediana = somaDosDois / 2
} else{
    mediana = myArray[meio]
}

myArray.forEach((element) => {
    if (element > maiorValor){
        maiorValor = element
    } else if (element < menorValor){
        menorValor = element
    } 

});

console.log(`Maior valor: ${maiorValor}`)
console.log(`Menor valor: ${menorValor}`)
console.log(`Mediana: ${mediana}`)