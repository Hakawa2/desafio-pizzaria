import React from "react";
import { useDispatch } from "react-redux";
import { addCarrinho } from "../../../store/actions";
import { Container, Card } from "../index.styled";

const Item = ({ data, title }) => {
  const dispatch = useDispatch();
  const add = async (produto) => {
    await dispatch(addCarrinho(produto));
  };

  return (
    <>
      <Container.Title>{title}</Container.Title>
      <Card anuncio={true}>
        <Card.Image src={data.imgUrl} alt={data.text} />
        <Card.Title>{data.text}</Card.Title>
        <Card.Lista>
          <Card.Lista.Item>Borda: {data.borda}</Card.Lista.Item>
          <Card.Lista.Item>Igredientes: {data.ingredientes}</Card.Lista.Item>
          <Card.Lista.Item>Pedaços: {data.pedacos}</Card.Lista.Item>
        </Card.Lista>
        <Card.Preco>Preço: R$ {data.preco}</Card.Preco>
        <Card.Adicionar onClick={() => add(data)}>
          Adicionar ao carrinho
        </Card.Adicionar>
      </Card>
    </>
  );
};

export default Item;
