
function calcularTotal(precoUni, qtd){
    return precoUni * qtd
}

function aplicaDesconto(tot){
    if (tot > 100){
        return tot * 0.9
    } else{
        return tot * 1
    }
}

function exibeResumo(precoUnit, qtd){
    console.log("--------------------")
    console.log("Resumo da compra")
    total = calcularTotal(precoUnit, qtd)
    console.log(`Total sem desconto: ${total}`)
    if (aplicaDesconto(total) != total){
        total = aplicaDesconto(total)
        console.log(`Total com desconto: ${total}`)
    }
    

}


let precoUnit = prompt("Preço unitário: ")
let total = prompt("Total: ")
exibeResumo(precoUnit, total)