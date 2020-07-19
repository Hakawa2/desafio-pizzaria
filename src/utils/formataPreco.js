export const formataPreco = (str) => {
  const strAjustada = str.toFixed(2);
  const strReplace = strAjustada.replace(".", ",");
  return strReplace;
};
