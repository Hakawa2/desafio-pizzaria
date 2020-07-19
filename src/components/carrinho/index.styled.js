import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  border-radius: 20px;
  background-color: #fff;
  z-index: 10;
  position: absolute;
  width: 380px;
  right: 24px;
  top: 52px;

  @media (max-width: 768px) {
    right: 20px;
    top: 133px;
  }
`;

Container.Item = styled(Link)`
  width: 90%;
  height: 80px;
  display: flex;
  margin: 10px;
  cursor: pointer;
`;

Container.Item.Lista = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 10px;
`;

Container.Item.Lista.Item = styled.li``;

Container.Item.Img = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 15px;
  border-radius: 10px;
`;

Container.Item.Text = styled.h1`
  margin: 0;
  font-size: 22px;
  color: #bc0303;
`;

Container.Item.Preco = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #bc0303;
`;
