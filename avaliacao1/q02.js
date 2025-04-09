myArray = []
for (i = 0; i != 10; i++){
    n = prompt("Digite um número inteiro: ")
};
pares = 0;
impares = 0;
myArray.forEach((number) => {
    if (number % 2 == 0){
        pares += 1
    } else{
        impares += 1
    }
})

console.log(`Números pares: ${pares}`)
console.log(`Números impares: ${impares}`)