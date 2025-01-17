function verificarFibonacci(numero: number): void {
  let a = 0; 
  let b = 1;

  if (numero === a || numero === b) {
      console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
      return;
  }

  while (b < numero) {
      const temp = b; 
      b = a + b;
      a = temp;
  }

  if (b === numero) {
      console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
      console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }
}

const numero = 21; // Número a ser verificado
verificarFibonacci(numero);
