import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logo, NavBar, Container, Button, CarrinhoImg } from "./index.styled";
import useOutsideClick from "../../utils/useOutsideClick";
import Carrinho from "../carrinho";

import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";

const Header = () => {
  const refCarrinho = useRef();
  const [showCarrinho, setShowCarrinho] = useState(false);
  const produto = useSelector((state) => state.carrinho.produtos);

  const onShow = () => {
    setShowCarrinho(!showCarrinho);
  };

  useOutsideClick(refCarrinho, () => {
    onShow();
  });

  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>
      <NavBar>
        <Button to="/cardapio">NOSSO CARDÁPIO</Button>
        <Button to="/monte/borda">MONTE SUA PIZZA</Button>
        <Button to="/contatos">CONTATOS</Button>
        {produto.length > 0 && (
          <CarrinhoImg onClick={onShow} src={cart} alt="carrinho" />
        )}
        {showCarrinho && <Carrinho ref={refCarrinho} />}
      </NavBar>
    </Container>
  );
};

export default Header;
