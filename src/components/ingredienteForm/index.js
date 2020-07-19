import React from "react";
import PropTypes from "prop-types";
import { Container } from "./index.styled";
import { pizzasSemana } from "../../mocks/pizzasApi";
import { formataPreco } from "../../utils/formataPreco";
import OfertaDia from "../carrossel/promo";
import moment from "moment";
import "moment/locale/pt-br";

const IngredienteForm = ({
  data,
  ingrediente,
  handleIngrediente,
  addProduto,
  title,
}) => {
  const diaAtual = moment(Date.now()).locale("pt-br").format("dddd");
  const pizzaDia = pizzasSemana.filter((pizza) => pizza.dia === diaAtual);

  return (
    <Container>
      <Container.Form>
        <Container.Text>{title}</Container.Text>
        <Container.Form.Lista>
          {data.map((dt) => (
            <Container.Form.Lista.Item
              key={dt.tipo}
              onClick={() => handleIngrediente(dt)}
            >
              <Container.Form.Lista.Item.Input name="input" type="radio" />
              <Container.Form.Lista.Item.Text>
                {`Tipo: ${dt.tipo} | Preço: R$ ${formataPreco(dt.preco)} ${
                  dt.pedacos ? `| Pedaços: ${dt.pedacos}` : ""
                }`}
              </Container.Form.Lista.Item.Text>
            </Container.Form.Lista.Item>
          ))}
        </Container.Form.Lista>
        <Container.Form.Button onClick={addProduto} disabled={!ingrediente}>
          Continuar
        </Container.Form.Button>
      </Container.Form>
      <Container.Oferta>
        <OfertaDia title={"SABOR DO DIA"} data={pizzaDia[0]} noDrag anuncio />
      </Container.Oferta>
    </Container>
  );
};

IngredienteForm.propTypes = {
  data: PropTypes.array,
  ingrediente: PropTypes.object,
  handleIngrediente: PropTypes.func,
  addProduto: PropTypes.func,
  title: PropTypes.string,
};

export default IngredienteForm;
