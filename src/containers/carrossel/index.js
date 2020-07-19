import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCarrinho } from "../../store/actions";
import moment from "moment";
import "moment/locale/pt-br";
import CarrosselComponents from "../../components/carrossel";

const Carrossel = ({ title, semPromo, data, noDrag, anuncio }) => {
  const dispatch = useDispatch();
  const diaAtual = moment(Date.now()).locale("pt-br").format("dddd");
  const [selected, setSelected] = useState(!semPromo ? diaAtual : data[0].nome);

  const onSelect = (key) => {
    setSelected(key);
  };

  const add = async (produto) => {
    await dispatch(addCarrinho(produto));
  };

  return (
    <CarrosselComponents
      anuncio={anuncio}
      diaAtual={diaAtual}
      onSelect={onSelect}
      selected={selected}
      title={title}
      semPromo={semPromo}
      data={data}
      noDrag={noDrag}
      addPizza={add}
    />
  );
};

export default Carrossel;
