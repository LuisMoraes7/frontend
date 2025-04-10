const json = '[{ "nome": "Maria Joaquinha", "notas": [8,7.5,9], "curso": "Sistemas para Internet"}, { "nome": "João Ricardo", "notas": [8,8.5,5], "curso": "Direito"}, { "nome": "José Henrique", "notas": [4,10,7], "curso": "Administração"}, { "nome": "Pedro da Silva", "notas": [6,7.6,7.5], "curso": "Sistemas para Internet"}, { "nome": "Silvana Morais", "notas": [6,7.5,9.5], "curso": "Sistemas de Informação"}, { "nome": "Patricia Castro", "notas": [1,9,10], "curso": "Arquitetura"}, { "nome": "Joana Ribeiro", "notas": [8,9,9], "curso": "Contabilidade"}, { "nome": "Rafael Rocha", "notas": [4,4,9], "curso": "Sistemas para Internet"}, { "nome": "Gustavo Henrique", "notas": [8,7.5,5], "curso": "Sistemas para Internet"} ]'

const database = JSON.parse(json)

descriptografa(database)

function descriptografa(listaObj){
    for (i = 0; i < listaObj.length; i++){
        if (pegaMedia(listaObj[i].notas) >= 7){
            console.log("---------------")
            console.log(`Nome: ${listaObj[i].nome}`)
            console.log(`Média: ${(pegaMedia(listaObj[i].notas)).toFixed(2)}`)
            console.log(`Curso: ${listaObj[i].curso}`)
            console.log("---------------")
        }
    }
}

function pegaMedia(listaNotas){
    media = 0
    listaNotas.forEach(element => {
        media += element
    })
    return (media/listaNotas.length)
}