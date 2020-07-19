import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Theme } from "./theme.styled";

import Cardapio from "../../pages/cardapio";
import Carrinho from "../../pages/carrinho";
import Contato from "../../pages/contato";
import Monte from "../../pages/monte";
import Home from "../../pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Theme />
      <Switch>
        <Route path="/cardapio" exact component={Cardapio} />
        <Route path="/" exact component={Home} />
        <Route path="/monte" component={Monte} />
        <Route path="/carrinho" component={Carrinho} />
        <Route path="/contatos" exact component={Contato} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
