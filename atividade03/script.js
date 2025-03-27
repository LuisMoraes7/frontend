arrayNomes = ["Júlya", "Maria", "Luís", "Eduardo", "Edivan"]
console.log(`Terceiro nome: ${arrayNomes[2]}`)
arrayNomes.push("Jorge")
console.log(`Adicionando na última posição: ${arrayNomes}`)
arrayNomes.unshift("Zeca")
console.log(`Adicionando na primeira posição: ${arrayNomes}`)
arrayNomes.pop()
console.log(`Removendo último nome: ${arrayNomes}`)

arrayNumeros = [2, 4, 6, 8]
arrayAtt = arrayNumeros.map((numero) => numero * 2)
console.log("Array atualizado multiplicado por 2: ")
console.log(arrayAtt)

arrayNumeros2 = [1, 3, 5, 7, 9]
arrayAtt2 = arrayNumeros2.filter((numero) => numero > 5)
console.log("Array com números maiores do que 5: ")
console.log(arrayAtt2)


