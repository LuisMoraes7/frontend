let popA = 80000;
let popB = 200000;
let taxaA = 1.03;
let taxaB = 1.015;
let anos = 0
while (popB >= popA){
    popA = popA * taxaA;
    popB = popB * taxaB;
    anos += 1
}


console.log(`Populações se igualam em ${anos} anos, em ${popA} habitantes.`)