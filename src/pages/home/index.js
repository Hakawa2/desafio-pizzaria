import React from "react";
import moment from "moment";
import "moment/locale/pt-br";
import { pizzasSemana } from "../../mocks/pizzasApi";

import { Container } from "./index.styled";
import Header from "../../components/header";
import OfertaDia from "../../components/carrossel/promo";

const Home = () => {
  const diaAtual = moment(Date.now()).locale("pt-br").format("dddd");
  const pizzaDia = pizzasSemana.filter((pizza) => pizza.dia === diaAtual);
  return (
    <Container>
      <Header />
      <OfertaDia title={"SABOR DO DIA"} data={pizzaDia[0]} noDrag anuncio />
    </Container>
  );
};

export default Home;
