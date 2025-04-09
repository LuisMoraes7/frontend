function calcularInvestimento() {
    const capital = (prompt("Informe o capital inicial investido (R$):"));
    const taxa = (prompt("Informe a taxa de juros mensal (%):"));
    const tempo = (prompt("Informe o tempo do investimento (em meses):"));
  
    const i = taxa / 100;
    const montante = capital * Math.pow(1 + i, tempo);
  
    console.log(`Montante após ${tempo} meses: R$ ${montante.toFixed(2)}`);
  }
  
calcularInvestimento();
  