function calcularSoma(): void {
  const INDICE = 13;
  let soma = 0;
  let k = 0;

  while (k < INDICE) {
      k = k + 1;
      soma += k;
  }

  console.log(soma);
}

calcularSoma();