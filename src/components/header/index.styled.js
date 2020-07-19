import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

export const Logo = styled.img`
  width: 286px;
  height: 175px;
  margin-bottom: 45px;
`;

export const NavBar = styled.div`
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 100px;
    height: 100%;
  }
`;

export const Button = styled(Link)`
  text-align: left;
  letter-spacing: 0px;
  color: #d90606;
  text-shadow: -2px 1px 0px #0c7e045c;
  opacity: 1;
  font-size: 30px;
  margin: 0 15px;
  font-weight: bold;

  :hover {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 5px 0;
    :hover {
      font-size: 19px;
    }
  }
`;

export const CarrinhoImg = styled.img`
  margin: 0 30px;
  width: 30px;
  cursor: pointer;
`;
