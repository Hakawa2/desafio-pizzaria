import React from "react";
import { useSelector } from "react-redux";
import { Container } from "./index.styled";
import { formataPreco } from "../../utils/formataPreco";

const Carrinho = React.forwardRef((props, ref) => {
  const produto = useSelector((state) => state.carrinho.produtos);
  return (
    <Container ref={ref}>
      {produto.map((pt) => {
        return (
          <Container.Item key={pt.nome} to="/carrinho">
            <Container.Item.Img src={pt.imgUrl} alt={pt.nome} />
            <Container.Item.Lista>
              <Container.Item.Text>{pt.nome}</Container.Item.Text>
              <Container.Item.Preco>
                Preço: R$ {formataPreco(pt.preco)}
              </Container.Item.Preco>
              {pt.bonus && (
                <Container.Item.Preco>
                  Bonus Fidelidade: {pt.bonus}
                </Container.Item.Preco>
              )}
            </Container.Item.Lista>
          </Container.Item>
        );
      })}
    </Container>
  );
});

export default Carrinho;
