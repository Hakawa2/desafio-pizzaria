import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCarrinho } from "../../store/actions";
import { formataPreco } from "../../utils/formataPreco";
import Header from "../../components/header";
import { Container } from "./index.styled";

const Carrinho = ({ history }) => {
  const dispatch = useDispatch();
  const { produtos, precoTotal, bonusFidelidade } = useSelector(
    (state) => state.carrinho
  );
  const pizza = useSelector((state) => state.monte.pizzaMontada);

  useEffect(() => {
    if (pizza) {
      const init = async () => {
        await dispatch(addCarrinho(pizza));
      };
      init();
    }
  }, [dispatch, pizza]);

  return (
    <>
      <Header />
      <Container>
        <Container.Title>Produtos</Container.Title>
        <Container.Carrinho>
          {produtos.map((produto) => (
            <Container.Carrinho.Produto key={produto.nome}>
              <Container.Carrinho.Produto.Img
                src={produto.imgUrl}
                alt={produto.nome}
              />
              <Container.Carrinho.Produto.Info>
                <Container.Carrinho.Produto.Nome>
                  {produto.nome} | Pedaços: {produto.pedacos}
                </Container.Carrinho.Produto.Nome>
                <Container.Carrinho.Produto.Nome>
                  Preço: R$ {formataPreco(produto.preco)}
                  {produto.bonus && ` | Bônus Fidelidade: ${produto.bonus}`}
                </Container.Carrinho.Produto.Nome>
              </Container.Carrinho.Produto.Info>
            </Container.Carrinho.Produto>
          ))}
        </Container.Carrinho>
        {precoTotal && (
          <Container.Preco>
            Preço total: R$ {formataPreco(precoTotal)}
          </Container.Preco>
        )}
        {bonusFidelidade && (
          <Container.Preco>
            Quantidade de Bônus Fidelidade: {bonusFidelidade}
          </Container.Preco>
        )}
      </Container>
    </>
  );
};

export default Carrinho;
