import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../../components/header";
import Borda from "../../containers/borda";
import Tamanho from "../../containers/tamanho";
import Recheio from "../../containers/recheio";

const Monte = ({ match }) => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={`${match.path}/borda`} component={Borda} />
        <Route exact path={`${match.path}/tamanho`} component={Tamanho} />
        <Route exact path={`${match.path}/recheio`} component={Recheio} />
      </Switch>
    </>
  );
};

export default Monte;
