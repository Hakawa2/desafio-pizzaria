import React from "react";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { useMediaQuery } from "react-responsive";

import { Card, Container, Arrow } from "./index.styled";

import prev from "../../assets/prev.png";
import next from "../../assets/next.png";

const MenuItem = ({
  text,
  selected,
  dia,
  imgUrl,
  borda,
  ingredientes,
  pedacos,
  diaAtual,
  preco,
  semPromo,
  data,
  addPizza,
  anuncio,
}) => {
  return (
    <Card anuncio={anuncio}>
      {!(diaAtual === dia || semPromo) && (
        <Card.Desabilitado>{dia}</Card.Desabilitado>
      )}
      <Card.Image src={imgUrl} alt={text} />
      <Card.Title>{text}</Card.Title>
      <Card.Lista>
        <Card.Lista.Item>Borda: {borda}</Card.Lista.Item>
        <Card.Lista.Item>Igredientes: {ingredientes}</Card.Lista.Item>
        <Card.Lista.Item>Pedaços: {pedacos}</Card.Lista.Item>
      </Card.Lista>
      <Card.Preco>Preço: R$ {preco}</Card.Preco>
      <Card.Adicionar
        onClick={() => (diaAtual === dia || semPromo) && addPizza(data)}
      >
        Adicionar ao carrinho
      </Card.Adicionar>
    </Card>
  );
};

const Carrossel = ({
  selected,
  onSelect,
  diaAtual,
  title,
  semPromo,
  data,
  noDrag,
  addPizza,
  anuncio,
}) => {
  const mobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const lista = () =>
    data.map((el) => {
      const { nome, dia, imgUrl, borda, ingredientes, pedacos, preco } = el;

      const key = dia ? dia : nome;
      return (
        <MenuItem
          text={nome}
          imgUrl={imgUrl}
          dia={dia}
          borda={borda}
          key={key}
          pedacos={pedacos}
          ingredientes={ingredientes}
          selected={selected}
          diaAtual={diaAtual}
          preco={preco}
          semPromo={semPromo}
          noDrag={noDrag}
          addPizza={addPizza}
          data={el}
          anuncio={anuncio}
        />
      );
    });

  return (
    <Container>
      <Container.Title>{title}</Container.Title>
      <Container.Scroll style={noDrag}>
        <ScrollMenu
          data={lista()}
          arrowLeft={(!noDrag || mobile) && <Arrow src={prev} alt="prev" />}
          arrowRight={(!noDrag || mobile) && <Arrow src={next} alt="next" />}
          selected={selected}
          onSelect={onSelect}
          scrollToSelected={true}
          wheel={false}
          dragging={(!noDrag || mobile) && true}
          alignCenter={false}
        />
      </Container.Scroll>
    </Container>
  );
};

MenuItem.propTypes = {
  selected: PropTypes.string,
  onSelect: PropTypes.func,
  diaAtual: PropTypes.string,
  title: PropTypes.string,
  semPromo: PropTypes.bool,
  data: PropTypes.array,
  noDrag: PropTypes.bool,
};

export default Carrossel;
