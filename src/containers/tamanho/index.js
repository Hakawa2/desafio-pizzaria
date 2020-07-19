import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Tamanhos } from "../../mocks/monteApi";
import { addIngrediente } from "../../store/actions";

import IngredienteForm from "../../components/ingredienteForm";

const Tamanho = ({ history }) => {
  const dispatch = useDispatch();
  const [ingrediente, setIngrediente] = useState(null);

  const handleIngrediente = (dt) => {
    setIngrediente(dt);
  };

  const addProduto = async () => {
    try {
      await dispatch(addIngrediente(ingrediente, "ADD_TAMANHO"));
      history.push("/monte/recheio");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <IngredienteForm
      data={Tamanhos}
      addProduto={addProduto}
      handleIngrediente={handleIngrediente}
      ingrediente={ingrediente}
      title={"Escolha seu tamanho"}
    />
  );
};

export default Tamanho;
