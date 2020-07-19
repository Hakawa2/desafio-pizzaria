import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Recheios } from "../../mocks/monteApi";
import { addIngrediente, montarPizza } from "../../store/actions";

import IngredienteForm from "../../components/ingredienteForm";

const Recheio = ({ history }) => {
  const dispatch = useDispatch();
  const [ingrediente, setIngrediente] = useState(null);

  const handleIngrediente = (dt) => {
    setIngrediente(dt);
  };

  const addProduto = async () => {
    try {
      await dispatch(addIngrediente(ingrediente, "ADD_RECHEIO"));
      await dispatch(montarPizza());
      history.push("/carrinho");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <IngredienteForm
      data={Recheios}
      addProduto={addProduto}
      handleIngrediente={handleIngrediente}
      ingrediente={ingrediente}
      title={"Escolha seu recheio"}
    />
  );
};

export default Recheio;
