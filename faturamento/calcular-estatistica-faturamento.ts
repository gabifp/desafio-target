import { faturamentoMensal } from "./faturamento-data";

function calcularEstatisticasFaturamento(faturamento: FaturamentoDia[]): void {
  const diasComFaturamento = faturamento.filter(dia => dia.valor > 0);

  const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
  const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));

  const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0);
  const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

  const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaFaturamento).length;

  console.log(`Menor valor de faturamento: ${menorValor.toFixed(2)}`);
  console.log(`Maior valor de faturamento: ${maiorValor.toFixed(2)}`);
  console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

calcularEstatisticasFaturamento(faturamentoMensal);