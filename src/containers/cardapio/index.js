import React from "react";
import Carrossel from "../carrossel";
import {
  pizzasDoces,
  pizzasSemana,
  pizzasClassicas,
} from "../../mocks/pizzasApi";

const Cardapio = () => {
  return (
    <>
      <Carrossel title={"SABORES DO DIA"} data={pizzasSemana} />
      <Carrossel title={"CLÁSSICAS"} data={pizzasClassicas} semPromo />
      <Carrossel title={"PIZZAS DOCES"} data={pizzasDoces} semPromo noDrag />
    </>
  );
};

export default Cardapio;
