import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 20px 20px 0px 0px;
  width: 45%;
  min-height: 400px;
  margin: 50px auto 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 768px) {
    height: 100%;
    width: 95%;
  }
`;

Container.Title = styled.h1`
  color: #bc0303;
  font-size: 38px;
`;

Container.Carrinho = styled.ul`
  list-style: none;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

Container.Carrinho.Produto = styled.li`
  display: flex;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1), -2px 2px 2px rgba(0, 0, 0, 0.1);
  width: 90%;
  height: 80px;
  margin: 5px 0;

  @media (max-width: 768px) {
    min-height: 100px;
    width: 95%;
    margin: auto;
  }
`;

Container.Carrinho.Produto.Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

Container.Carrinho.Produto.Img = styled.img`
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`;

Container.Carrinho.Produto.Nome = styled.h3`
  color: #bc0303;
  margin: 10px 25px;
  @media (max-width: 768px) {
    margin: 0 0 5px 5px;
  }
`;

Container.Preco = styled.h2`
  color: #bc0303;
  margin: 10px 25px;
`;
