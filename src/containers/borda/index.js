import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Bordas } from "../../mocks/monteApi";
import { addIngrediente } from "../../store/actions";

import IngredienteForm from "../../components/ingredienteForm";

const Borda = ({ history }) => {
  const dispatch = useDispatch();
  const [ingrediente, setIngrediente] = useState(null);

  const handleIngrediente = (dt) => {
    setIngrediente(dt);
  };

  const addProduto = async () => {
    try {
      await dispatch(addIngrediente(ingrediente, "ADD_BORDA"));
      history.push("/monte/tamanho");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <IngredienteForm
      data={Bordas}
      addProduto={addProduto}
      handleIngrediente={handleIngrediente}
      ingrediente={ingrediente}
      title={"Escolha sua borda"}
    />
  );
};

export default Borda;
