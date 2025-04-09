function calcularCirculo() {
    const raio = (prompt("raio:"));
    pi = 3.14
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;
  console.log(`Raio: ${raio}
  Área: ${area.toFixed(2)}
  Perímetro: ${perimetro.toFixed(2)}`)
  }
  
  calcularCirculo();
  